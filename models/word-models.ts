import mongoose from "mongoose";

const wordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: [true, "word is a required field"],
    },
    learn_words: {
      type: Boolean,
      default: false,
    },
    correct_words: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Words = mongoose.models?.Words || mongoose.model("Words", wordSchema);

export { Words };
