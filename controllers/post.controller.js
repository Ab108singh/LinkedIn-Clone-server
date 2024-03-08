const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const apiResponse = require("../helpers/ApiRespone");
const Post = require("../models/post.models");
const asyncHandler = require("../helpers/asyncHandler");

const getAllPosts = (req, res, next) => {
    try {
        return apiResponse(res, "Post Fetched Successfully", 200);
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
};
const createNewPost = asyncHandler(async (req, res, next) => {
    let data = req.body;
    console.log(req.files);

    const filenames = req.files.map((file) => file.filename);
    console.log(filenames);

    // const newpost = await new Post({
    //     content: data.content || "",
    //     attachments: filenames,
    //     userid: req.user._id,
    // }).save();

    return apiResponse(res, "Post Created Successfully", 201, {});
});

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
