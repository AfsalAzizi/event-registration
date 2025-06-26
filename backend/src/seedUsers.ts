import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserModel } from "./models/UserModel";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

const seedUsers = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    await UserModel.deleteMany();

    const users = [
      {
        email: "admin@example.com",
        password: "admin123",
        role: "admin",
      },
      {
        email: "user1@example.com",
        password: "user123",
        role: "user",
      },
      {
        email: "user2@example.com",
        password: "user123",
        role: "user",
      },
    ];

    for (const user of users) {
      const newUser = new UserModel(user);
      await newUser.save();
    }

    console.log("✅ Seed users inserted successfully");

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed users:", error);
    process.exit(1);
  }
};

seedUsers();
