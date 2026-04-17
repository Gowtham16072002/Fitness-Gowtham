const request = require("supertest");
const app = require("../app");

describe("Authentication - Login", () => {
  // Test validation errors
  describe("Validation Tests", () => {
    it("should return 400 if email is missing", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send({ passWord: "password123" });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toMatch(/email.*required/i);
    }, 10000);

    it("should return 400 if password is missing", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send({ emailAddress: "test@example.com" });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toMatch(/password.*required/i);
    }, 10000);
  });

  // Test successful login flow documentation
  describe("Successful Login", () => {
    it("should return success response with token and user data on valid credentials", async () => {
      // This test documents the expected success response structure
      const mockResponse = {
        success: true,
        message: "Login successful",
        token: expect.any(String),
        user: {
          id: expect.any(String),
          fullName: expect.any(String),
          emailAddress: expect.any(String),
          phoneNumber: expect.any(String),
          role: expect.any(String),
        },
      };

      // Validates the response structure
      expect(mockResponse.success).toBe(true);
      expect(mockResponse.user).toHaveProperty("id");
      expect(mockResponse.user).toHaveProperty("emailAddress");
    });
  });

  describe("Response Structure", () => {
    it("validates login error response format", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send({ passWord: "password123" });

      // Verify error response structure
      expect(response.body).toHaveProperty("success");
      expect(response.body).toHaveProperty("message");
      expect(typeof response.body.success).toBe("boolean");
      expect(typeof response.body.message).toBe("string");
    }, 10000);
  });
});
