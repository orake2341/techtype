import express from "express";
import { userMod } from "./models/userModel.js";
import { PORT, mongoDB } from "./config.js";
import JobOrderRouter from "./routes/jobOrder.js";
import mongoose from "mongoose";
import router from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import paymentRouter from "./routes/payment.js";
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(cookieParser());
// Parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "HEAD"],
    credentials: true,
  })
);

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
  try {
    const userId = req.query._id;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const findYou = await userMod.findById(userId);

    // Check if the user was found
    if (!findYou) {
      return res.status(404).json({ message: "User not found" });
    }
    //TODO: GET ALL JO REGARDLESS OF STATUS

    res.status(200).json({ message: findYou.JobOrder });
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
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
