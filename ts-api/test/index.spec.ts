import * as request from "supertest";

import { app } from "../src/app";

describe("routing", () => {
	it("root", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.body).toBe("hello ts-api world!");
	});
});
