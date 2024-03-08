const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const apiResponse = require("../helpers/ApiRespone");

const getAllPosts = (req, res, next) => {
    try {
        return apiResponse(res, "Post Fetched Successfully", 200);
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
};
const createNewPost = async (req, res, next) => {
    try {
        const user = req.user;
        // Post creating logic ahead

        return apiResponse(res, "Post Created Successfully", 201);
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
};

const updatePost = (req, res, next) => {
    try {
        return apiResponse(res, "Post Updated Successfully", 200);
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
};

module.exports = {
    getAllPosts,
    createNewPost,
    updatePost,
};
