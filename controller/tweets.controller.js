import * as tweetsRepository from "../data/tweets.model.js";

/**
 * method       GET
 * api          /tweets
 * description  return all tweets
 */
export const getAllTweets = async (req, res) => {
	const username = req.query.username;
	const data = username ? await tweetsRepository.getAllByUsername(username) : await tweetsRepository.getAll();
	res.status(200).json(data);
};

/**
 * method       GET
 * api          /tweets/:id
 * description  return tweets by id
 */
export const getTweetById = async (req, res) => {
	const tweetId = req.params.id;
	const tweet = await tweetsRepository.getById(tweetId);
	if (!tweet) {
		return res.status(404).json({ message: `Tweet id ${tweetId} does not exist!` });
	}
	res.status(200).json(tweet);
};

/**
 * method       POST
 * api          /tweets
 * description  create new tweet
 */
export const createTweet = async (req, res) => {
	const { text, username, name, url } = req.body;
	const tweet = await tweetsRepository.create(text, username, name, url);

	res.status(201).json(tweet);
};

/**
 * method       PUT
 * api          /tweets/:id
 * description  update tweet by id
 */
export const updateTweetById = async (req, res) => {
	const tweetId = req.params.id;
	const { text } = req.body;

	const tweet = await tweetsRepository.updateById(tweetId, text);

	if (!tweet) {
		return res.status(404).json({ message: `Tweet id ${tweetId} does not exist!` });
	}

	res.status(200).json(tweet);
};

/**
 * method       DELETE
 * api          /tweets/:id
 * description  delete tweet by id
 */
export const deleteTweetById = async (req, res) => {
	const tweetId = req.params.id;
	await tweetsRepository.deleteById(tweetId);
	res.sendStatus(204);
};
