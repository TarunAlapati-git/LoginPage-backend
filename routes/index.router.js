const express = require("express")
const router = express.Router()

const ctrlUser = require("../controllers/user.controller")
const jwtHelper = require("../config/jwtHelper")

router.post("/register",ctrlUser.register)
router.post("/authenticate",ctrlUser.authenticate)
router.post("/userProfile", jwtHelper.verifyJwtToken, ctrlUser.userProfile)


module.exports = router