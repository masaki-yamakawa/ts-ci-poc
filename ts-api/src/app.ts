import * as bodyParser from "body-parser";
import * as express from "express";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import { asyncMiddleware as asyncMw } from "./controller/asyncHandler";
import { echo } from "./controller/echo";

export const app: express.Application = express();
app.disable("x-powered-by");
app.use(bodyParser.json());
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.json("hello ts-api world!");
});

app.get("/echo", asyncMw(echo));
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	console.log(err);
	res.status(500).send(err.stack);
};
app.use(errorHandler);
