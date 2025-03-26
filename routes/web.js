const express = require("express");
const { sample2, sample1 } = require("../controller/TestController");
const router = express();

router.get(`/`, sample1);

router.get(`/home`, sample2);

module.exports = router;
