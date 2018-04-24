import "reflect-metadata";
import { utilities } from "ts-lib";

import { app } from "./src/app";

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(utilities.say("Hello ts-lib utilities"));
	console.log(`listen on localhost:${port}`);
});
