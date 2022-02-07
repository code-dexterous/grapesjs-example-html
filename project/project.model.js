const mongoose = require('mongoose');
const { Schema } = mongoose;
const Project = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    description: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Projects', Project);
