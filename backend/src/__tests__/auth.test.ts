import mongoose from "mongoose";
import request from "supertest";
import app from "../app";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || "", {
    dbName: "test-db",
  });
});

describe("POST /api/auth/login", () => {
  it("should return token on valid credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "admin@example.com",
      password: "admin123",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user.email).toBe("admin@example.com");
  });

  it("should fail on wrong credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "admin@example.com",
      password: "admn123",
    });

    expect(res.statusCode).toBe(401);
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
