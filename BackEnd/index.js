import express from "express";
import { userMod } from "./models/userModel.js";
import { PORT, mongoDB } from "./config.js";
import { JO, addSubCollection } from "./models/JOModel.js";
import mongoose from "mongoose";
import router from "./routes/user.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(express.json()); // Add middleware to parse JSON bodies

// Parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

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
app.use("/user", router);

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

app.get("/", async (req, res) => {
  const findYou = await userMod.countDocuments({
    "JobOrder.JOStatus": "Pending",
  }); //only count user that have jo
  res.status(201).json(findYou);
});

app.post("/Create", async (req, res) => {
  try {
    await addSubCollection("65cf03a57996b7138851bb01", req.body);
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
