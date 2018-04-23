import * as requestPromise from "request-promise-native";
import * as request from "supertest";

import { app } from "../../src/app";

jest.setTimeout(30000);

describe("routing", () => {
	it("should return the value of the say parameter", async () => {
		const response = await request(app).get("/echo?say=say-value");
		expect(response.status).toEqual(200);
		expect(response.body).toEqual({ say: "say-value" });
	});

	it("should be validation error request.query is empty", async () => {
		const response = await request(app).get("/echo");
		expect(response.status).toEqual(400);
		expect(response.body).toEqual({ error: "'say' query param is required" });
	});
});