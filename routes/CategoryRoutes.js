const express = require("express");
const {
  index,
  create,
  store,
  update,
  destory,
} = require("../controller/CategoryController");
const router = express();

router.get(`/index`, index);
router.get(`/create`, create);
router.post(`/store`, store);
router.post(`/update`, update);
router.delete(`/delete`, destory);

module.exports = router;
