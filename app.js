import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class Tweet {
	static totalTweets = 0;
	constructor(text, username, name, url = "") {
		this.text = text;
		this.username = username;
		this.name = name;
		this.url = url;
		this.id = Tweet.totalTweets + 1;
		this.createdAt = new Date();
		Tweet.totalTweets++;
	}
}

let tweets = [
	new Tweet("first tweet", "1005hoon", "hoon", ""),
	new Tweet("second tweet", "1005hoon", "hoon", ""),
	new Tweet("third tweet", "1005hoon", "hoon", ""),
];

/**
 * method       GET
 * api          /tweets
 * description  return all tweets
 */
app.get("/tweets", (req, res) => {
	res.status(200).json(tweets);
});

/**
 * method       GET
 * api          /tweets/:id
 * description  return tweets by id
 */
app.get("/tweets/:id", (req, res) => {
	const tweetId = req.params.id;
	const tweet = tweets.find((t) => t.id === +tweetId);
	if (!tweet) {
		return res.status(404).json({ message: `Tweet id ${tweetId} does not exist!` });
	}
	res.status(200).json(tweet);
});

/**
 * method       POST
 * api          /tweets
 * description  create new tweet
 */
app.post("/tweets", (req, res) => {
	const { text, username, name, url } = req.body;

	const tweet = new Tweet(text, username, name, url);
	tweets.push(tweet);

	res.status(201).json(tweet);
});

/**
 * method       PUT
 * api          /tweets/:id
 * description  update tweet by id
 */
app.put("/tweets/:id", (req, res) => {
	const tweetId = req.params.id;

	const { text } = req.body;

	const tweet = tweets.find((t) => t.id === +tweetId);

	if (!tweet) {
		return res.status(404).json({ message: `Tweet id ${tweetId} does not exist!` });
	}

	tweet.text = text;

	res.status(200).json(tweet);
});

/**
 * method       DELETE
 * api          /tweets/:id
 * description  delete tweet by id
 */
app.delete("/tweets/:id", (req, res) => {
	const tweetId = req.params.id;
	tweets = tweets.filter((t) => t.id !== +tweetId);

	res.status(209).send();
});

app.use((req, res, next) => {
	res.sendStatus(404);
});

app.use((error, req, res, next) => {
	console.error(error);
	res.sendStatus(500);
});

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`[App]: Server running on port ${PORT}`);
});
