import mongoose, { Date, Document, Schema, Model } from "mongoose";

interface User extends Document {
  password: string;
  email: string;
  isAdmin: boolean;
}

const UserSchema: Schema = new Schema<User, Model<User>>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true});

export default mongoose.model("User", UserSchema);