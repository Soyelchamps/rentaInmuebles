import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: [
    {
      type: String,
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
    default: "user",
  },
  userName: {
    type: String,
    required: false,
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("User", userSchema);
