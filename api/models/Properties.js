import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
  Street: {
    type: String,
  },
  No: {
    type: Number,
  },
  intNo: {
    type: Number,
  },
  zipCode: {
    type: Number,
  },
  city: {
    type: String,
  },
  contry: {
    type: String,
  },
  town: {
    type: String,
  },
  offer: {
    type: String,
    enum: ["rent", "sale"],
    required: true,
    default: "rent",
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  rooomNumber: {
    type: Number,
  },
  pictures: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isDeleted: {
    type: Boolean,
  },
});

export default mongoose.model("Properties", propertiesSchema);
