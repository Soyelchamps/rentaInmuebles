import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  transmitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  comment: String,
  rating: Number,
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  enabled: Boolean,
});

export default mongoose.model("Messages", messagesSchema);
