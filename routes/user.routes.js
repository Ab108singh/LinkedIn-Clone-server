const express = require("express");
const { registerUser, loginUser, updateUser, findUsers, findAdmin } = require("../controllers/user.controller");
const {
    registerValidations,
    loginValidations,
} = require("../helpers/validations");
const authMiddleware = require("../middlewares/authmiddleware");

const router = express.Router();
router.get('/',findAdmin)
router.get('/findusers',findUsers )
router.post("/register", registerValidations, registerUser);   
router.post("/login", loginValidations, loginUser);
router.put("/update", authMiddleware, updateUser);

module.exports = router;
