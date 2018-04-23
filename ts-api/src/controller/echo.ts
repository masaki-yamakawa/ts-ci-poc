import * as express from "express";

export const echo: RequestHandler = async (req, res, next) => {
	const query: string = req.query;
	if (query.say === undefined) {
		console.log("'say' query param is required");
		res.status(400).json({ error: "'say' query param is required" });
	} else {
		console.log("query.say:" + query.say);
		res.json({ say: query.say });
	}
	next();
};
