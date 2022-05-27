import User from "./../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { createError } from "./../utils/error.js";

export const registerAuth = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json("User has been created");
  } catch (error) {
    next(error);
  }
};

export const loginAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "User does not exist"));
    }
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return next(createError(400, "Incorrect login credentials"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    const { id, username, email } = user;
    const outputUser = { id, username, email };

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(outputUser);
  } catch (error) {
    next(error);
  }
};
