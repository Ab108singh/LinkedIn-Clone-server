const { validationResult } = require("express-validator");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ApiError = require("../helpers/ApiError");
const apiResponse = require("../helpers/ApiRespone");
const asyncHandler = require("../helpers/asyncHandler");



const updateUser = asyncHandler(async (req, res, next) => {


    throw new Error("Oops! An error occurred while updating user")

    return apiResponse(res, "user updated successfully", 200);
});


const findUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return apiResponse(res, " all users finded", 200,users);
    } catch (error) {
        return next(new ApiError("Error occurred while fetching users", 500));
    }
}

const registerUser = asyncHandler(async function (req, res, next) {
    let data = req.body;
   console.log(data);
    let result = validationResult(req);
    if (!result.isEmpty()) {
        let erros = result.array().map((errObj) => errObj.msg);
        return next(new ApiError(erros[0], 400));
    }

    let existingUser = await User.findOne({
         email: data.email.trim() });

    if (existingUser) {
        return next(new ApiError("User Already registered", 400));
    }

    let hashedPassword = await bcrypt.hash(data.password.trim(), 10);

    let newuser = await new User({
        username: data.username.trim(),
        email: data.email.trim(),
        password: hashedPassword,
    }).save();

    // new query to db

    newuser = newuser.toObject();

    delete newuser.password;

    // let user = await User.findById(newuser._id, {email: true, username : true});
    // let user = await User.findById(newuser._id, "-password");
    // let user = await User.findById(newuser._id).select("username email");

    // let user = await User.findById(newuser._id);

    return apiResponse(res, "User Registered Successfully", 201, newuser);
});

const loginUser = asyncHandler(async function (req, res, next) {
    let data = req.body;

    let result = validationResult(req);
    if (!result.isEmpty()) {
        let erros = result.array().map((errObj) => errObj.msg);
        return next(new ApiError(erros[0], 400));
    }

    let existingUser = await User.findOne({ email: data.email.trim() });

    if (!existingUser) {
        return next(
            new ApiError("User does not exits. Please Register First.", 400)
        );
    }

    let isSamePassword = await bcrypt.compare(
        data.password.trim(),
        existingUser.password
    );

    if (!isSamePassword) {
        return next(new ApiError("Invalid Credentials.", 400));
    }

    existingUser = existingUser.toObject();

    delete existingUser.password;

    // let user = await User.findById(newuser._id, {email: true, username : true});
    // let user = await User.findById(newuser._id, "-password");
    // let user = await User.findById(newuser._id).select("username email");

    // let user = await User.findById(newuser._id);

    // Session based -> server creates a session once the user is logged in and sends a cookie(random string) to the frontend
    // Token based

    const token = jwt.sign(
        { userid: existingUser._id },
        process.env.JWT_SECRET,
        {
            expiresIn: "240h",
        }
    );

    // decode
    // verify

    // payload -> user._id
    // secret -> anyrandomstring
    // options(optional) ->
    return apiResponse(res, "User logged in successfully", 200, {
        user: existingUser,
        token,
    });
});

const findAdmin = async (req, res) => {
    try {
        let header = req.headers["authorization"];

        if (!header) {
            return next(new ApiError("No Auth Header provided!", 401));
        }

        let token = header.split(" ")[1];
        // return res.send(token);

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Verify token with the actual secret key

        const userId = decodedToken.userid; // Corrected accessing userid from decoded token
    //    return res.send(userId);
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    registerUser,
    loginUser,
    updateUser,
    findUsers,
    findAdmin
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NWU2YjIwZTViZjQ5ZGEyN2JhMzEwYzEiLCJpYXQiOjE3MDk3MDA1ODIsImV4cCI6MTcwOTc4Njk4Mn0.9024RhfGogsVJMsKl37_NNCWNkG-dfY5tLX9JlzmHEM

// public -> products, posts, single-post, single-product, get all users
// private -> add new product, add new post, update, delete and add new user

// response standardised
// better error handling
