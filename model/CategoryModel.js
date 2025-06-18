const mongooes = require("mongoose");
const categorySchema = new mongooes.Schema(
  {
    category_name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongooes.model("Category", categorySchema);
