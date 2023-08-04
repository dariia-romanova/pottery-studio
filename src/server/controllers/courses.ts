import { Request, Response, NextFunction } from "express";
import Course from "../models/Course";

export const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  const newCourse = new Course(req.body);

  try {
    const savedCouese = await newCourse.save();
    res.status(200).json(savedCouese);
  } catch (e) {
    next(e);
  }
};

export const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedCouese = await Course.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body, },
      { new: true, }
    );

    res.status(200).json(updatedCouese);
  } catch (e) {
    next(e);
  }
};

export const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Course.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json('Course has been delated');
  } catch (e) {
    next(e);
  }
};

// export const getCourseById = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const course = await Course.findById(
//       req.params.id
//     );

//     res.status(200).json(course);
//   } catch (e) {
//     next(e);
//   }
// };

export const getCourseBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const course = await Course.findOne({
      slug: req.params.slug,
    });

    res.status(200).json(course);
  } catch (e) {
    next(e);
  }
};

export const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  const coursesType = req.query.type;
  const limit = parseInt(req.query.limit as string);

  try {
    let courses;
  
    if (coursesType) {
      courses = await Course.find({ type: coursesType }).limit(limit);
    } else {
      courses = await Course.find().limit(limit);
    }

    res.status(200).json(courses);
  } catch (e) {
    next(e);
  }
}
