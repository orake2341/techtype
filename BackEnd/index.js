import express from "express";
import { userMod } from "./models/userModel.js";
import { PORT, mongoDB } from "./config.js";
import JobOrderRouter from "./routes/jobOrder.js";
import mongoose from "mongoose";
import router from "./routes/user.js";
import cors from "cors";
import bodyParser from "body-parser";
import paymentRouter from "./routes/payment.js";
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
app.use("/payment", paymentRouter);

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
  const userId = "65df0aff7ebd20d58ee773ac";
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

app.get("/users", async (req, res) => {
  try {
    const allUsers = await userMod.find().populate({
      path: "email",
      path: "JobOrder",
      populate: {
        path: "services",
        model: "service",
      },
    });

    if (!allUsers || allUsers.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const usersWithEmailInJobOrders = allUsers
      .map((user) => {
        return user.JobOrder.map((jobOrder) => {
          return {
            ...jobOrder.toObject(),
            email: user.email,
            _userid: user._id,
          };
        });
      })
      .flat();

    res.status(200).json({ users: usersWithEmailInJobOrders });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
