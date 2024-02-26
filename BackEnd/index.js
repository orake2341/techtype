import express from "express";
import { userMod } from "./models/userModel.js";
import { PORT, mongoDB } from "./config.js";
import JobOrderRouter from "./routes/jobOrder.js";
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
app.use("/joborder", JobOrderRouter);

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
  //TODO: ADD ERROR HANDLING
  //CONNECT PROPERLY
  const userId = "65d8cc4c11e26b678c43a99b";
  const findYou = await userMod.findById(userId);

  // Check if the user was found
  if (!findYou) {
    return res.status(404).json({ message: "User not found" });
  }
  //TODO: GET ALL JO REGARDLESS OF STATUS
  const hasPendingJobOrder = findYou.JobOrder.filter(
    (jobOrder) => jobOrder.JOStatus === "Pending"
  );

  res.status(200).json({ message: hasPendingJobOrder });
});

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
