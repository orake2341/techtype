import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { JO } from "./JOModel.js";
import validator from "validator";
import { paymentHistoryModel } from "./paymentHistoryModel.js";

//USER SCHEMA
//=========================================
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    // required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  paymentHistory: [paymentHistoryModel.schema],
  JobOrder: [JO.schema],
});

// SIGNUP STATIC METHOD
//=========================================
userSchema.statics.signup = async function (email, password) {
  try {
    //validation
    if (!email || !password) {
      throw Error("All Fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("Password not strong enough");
    }
    const exist = await this.findOne({ email }); // Add await here

    if (exist) {
      throw Error("Email already in use");
    }

    // Hashing
    const salt = await bcrypt.genSalt(10); // Add await here
    const hash = await bcrypt.hash(password, salt); // Add await here

    const user = await this.create({
      email,
      password: hash,
    });
    return user;
  } catch (error) {
    throw error; // Ensure to rethrow the error here so that it's caught in the route handler
  }
};

// STATIC LOGIN METHOD
//=========================================
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All Fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

// Create and export the model
//=========================================
export const userMod = mongoose.model("user", userSchema);
