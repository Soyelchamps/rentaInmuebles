import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  message: {
    type: String,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  //property: {
  // type: mongoose.Schema.Types.ObjectId,
  // ref: "Propert",
  //},
  enabled: Boolean,
});

export default mongoose.model("Messages", messagesSchema);
