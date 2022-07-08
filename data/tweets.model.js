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

export const getAll = async () => {
	return tweets;
};

export const getAllByUsername = async (username) => {
	return tweets.filter((t) => t.username === username);
};

export const getById = async (id) => {
	return tweets.find((t) => t.id === +id);
};

export const create = async (text, username, name, url) => {
	const tweet = new Tweet(text, username, name, url);
	tweets = [tweet, ...tweets];
	return tweet;
};

export const updateById = async (id, text) => {
	const tweet = tweets.find((t) => t.id === +id);
	if (!tweet) {
		return undefined;
	}

	tweet.text = text;
	return tweet;
};

export const deleteById = async (id) => {
	tweets = tweets.filter((t) => t.id !== +id);
};
