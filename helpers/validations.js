const { body } = require("express-validator");

const registerValidations = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username must not be empty"),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email must not be empty")
        .isEmail()
        .withMessage("Email must be a valid email address"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password must not be empty"),
];

const loginValidations = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email must not be empty")
        .isEmail()
        .withMessage("Email must be a valid email address"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password must not be empty"),
];

module.exports = { registerValidations, loginValidations };
