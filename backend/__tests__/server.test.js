const request = require("supertest");
const app = require("../app");

describe("Backend smoke tests", () => {
  it("should return the running message from /", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/Fitness backend is running/i);
  });
});
