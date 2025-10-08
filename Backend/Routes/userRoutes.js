const express = require("express");

const { getuserData } = require("../Controller/userController");
const userAuth = require("../Middleware/userAuth");

const router = express.Router();
router.get('/data',userAuth ,getuserData);
module.exports = router;