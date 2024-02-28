import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { userMod } from "../models/userModel.js";
import { SECRET } from "../config.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET);

      req.user = await userMod.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

export { protect };
