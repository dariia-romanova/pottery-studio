import { Request, Response, NextFunction } from "express";
import User from "../models/User";

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body, },
      { new: true, }
    );

    res.status(200).json(updatedUser);
  } catch (e) {
    next(e);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await User.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json('User has been delated');
  } catch (e) {
    next(e);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(
      req.params.id
    );

    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};
