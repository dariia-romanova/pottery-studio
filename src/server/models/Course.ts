import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  complexity: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  lessonsCount: {
    type: Number,
    required: true,
  },
  lessonDuration: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  placesLeft: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String],
  },
});

export default mongoose.model("Course", CourseSchema);