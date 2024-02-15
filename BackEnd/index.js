import express from "express";
import { userMod } from "./models/userModel.js";
import { PORT, mongoDB } from "./config.js";
import { JO, addSubCollection } from "./models/JOModel.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json()); // Add middleware to parse JSON bodies

// Connect to DB
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// MIDDLEWARE

// ROUTING
app.post("/crt", async (req, res) => {
  try {
    const newUser = new userMod(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/sub", async (req, res) => {
  try {
    const newColl = new JO(req.body);
    await addSubCollection("65ce21e03097dc398595bfd1", newColl);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
  res.status(200).json({ message: "ADDED" });
});

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
