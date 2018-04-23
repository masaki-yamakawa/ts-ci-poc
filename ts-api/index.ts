import "reflect-metadata";

import { app } from "./src/app";

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`listen on localhost:${port}`);
});
