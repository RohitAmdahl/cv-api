const express = require("express");
const router = express.Router();
const { getAllData, getAllDataTesting } = require("../controllers/index");

router.route("/").get(getAllData);
router.route("/testing").get(getAllDataTesting);

module.exports = router;
