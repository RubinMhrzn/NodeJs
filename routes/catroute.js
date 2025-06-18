const express = require("express");
const { addcategory } = require("../controller/catcontroller");
const router = express.Router();

router.post("/create", addcategory);

module.exports = router;
