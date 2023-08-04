import { Request, Response, NextFunction } from "express";
import Course from "../models/Course";

export const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  const coursesType = req.query.type;
  const limit = parseInt(req.query.limit as string);

  const startDate = new Date();
  startDate.setHours(0,0,0,0);

  try {
    let courses;
  
    if (coursesType) {
      courses = await Course.find({ type: coursesType, dateStart: { $gt: startDate } }).limit(limit);
    } else {
      courses = await Course.find().limit(limit);
    }

    res.status(200).json(courses);
  } catch (e) {
    next(e);
  }
};
