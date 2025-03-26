const mongooes = require("mongoose");
const categorySchema = new mongooes.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongooes.model("Category", categorySchema);
