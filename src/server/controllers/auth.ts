import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { createError } from "../utils/error";
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      email: req.body.email,
      password: hash,
    })

    await newUser.save();
    res.status(201).send("User has been created")
  } catch (e) {
    next(e);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next (createError(404, 'User not found'))
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

    if (!isPasswordCorrect) {
      return next (
        createError(400, 'Wrond password or username')
      );
    }
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT || '')
    const { password, isAdmin, ...other} = user._doc;

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  } catch (e) {
    next(e);
  }
}