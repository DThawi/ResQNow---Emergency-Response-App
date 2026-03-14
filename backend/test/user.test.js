const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose"); 

describe("User API", () => {

  test("Get all users", async () => {
    const res = await request(app).get("/api/users");

    expect(res.statusCode).toBe(404);
  });

});

afterAll(async () => {
  await mongoose.connection.close();
});
