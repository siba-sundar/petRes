const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required:true,
    },
    breed: {
      type: String,
      required:true,
    },
    imageLabel: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
    },
    additionalImages: [{ type: String }],
    adoptionStatus: {
      type: String,
      enum: ["open", "pending", "closed"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Pet = mongoose.model("Pet", PetSchema);