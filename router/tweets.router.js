import express from "express";
import * as tweetsController from "../controller/tweets.controller.js";

const tweetsRouter = express.Router();

tweetsRouter.route("/").get(tweetsController.getAllTweets).post(tweetsController.createTweet);

tweetsRouter
	.route("/:id")
	.get(tweetsController.getTweetById)
	.put(tweetsController.updateTweetById)
	.delete(tweetsController.deleteTweetById);

export default tweetsRouter;
