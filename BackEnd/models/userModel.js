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
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
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
    required: true,
  },
  paymentHistory: [paymentHistoryModel.schema],
  JobOrder: [JO.schema],
});

// SIGNUP STATIC METHOD
//=========================================
userSchema.statics.signup = async function (
  email,
  firstname,
  lastname,
  username,
  password2,
  number,
  password
) {
  try {
    // Validation
    if (
      !email ||
      !password ||
      !firstname ||
      !lastname ||
      !username ||
      !number
    ) {
      throw new Error("All fields must be filled");
    }
    if (password !== password2) {
      throw new Error("Password must be the same");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw new Error("Password is not strong enough");
    }

    const exist = await this.findOne({ email });
    if (exist) {
      throw new Error("Email already in use");
    }

    // Hashing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
      firstname,
      lastname,
      username,
      email,
      number,
      password: hash,
    });
    return user;
  } catch (error) {
    throw new Error(error.message); // Rethrow with a proper message
  }
};

// STATIC LOGIN METHOD
//=========================================
userSchema.statics.login = async function (email, password) {
  try {
    if (!email || !password) {
      throw new Error("All fields must be filled");
    }

    const user = await this.findOne({ email });
    if (!user) {
      throw new Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Incorrect password");
    }

    return user;
  } catch (error) {
    throw new Error(error.message); // Rethrow with a proper message
  }
};

export const userMod = mongoose.model("user", userSchema);
