const category = require("../model/CategoryModel");
exports.addcategory = async (req, res) => {
  try {
    category_name = req.body.category_name;
    if (!category_name) {
      let categoryadd = new category({
        category_name: category_name,
      });
    }
    let categoryadd = new category({
      name: category_name,
    });
    let category = await categoryadd.save();
    res.status(200).json({
      message: "Category added successfully",
      data: category,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message, detail: "category not found" });
  }
};
