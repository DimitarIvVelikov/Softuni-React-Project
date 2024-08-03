const mongoose = require("mongoose");
const User = require("./User");

const trainingProgramSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },
    difficulty: {
      type: String,
      required: [true, "Difficulty is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image Url is required"],
      match: [
        /^https?:\/\//,
        "Image Url should start with Http:// or Https://",
      ],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    signUpList: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: { createdAt: "created_at" } }
);

const TrainingProgram = mongoose.model(
  "TrainingProgram",
  trainingProgramSchema
);

module.exports = TrainingProgram;
