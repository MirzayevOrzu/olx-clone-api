const express = require("express");
const { getHello } = require("./_controllers");

const router = express.Router();

router.get("/", getHello);

module.exports = router;
