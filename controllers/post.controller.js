const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const apiResponse = require("../helpers/ApiRespone");
const Post = require("../models/post.models");
const asyncHandler = require("../helpers/asyncHandler");
const { uploadToCloudinary } = require("../helpers/cloudinary-image");

const getAllPosts = (req, res, next) => {
    try {
        return apiResponse(res, "Post Fetched Successfully", 200);
    } catch (error) {
        next(new ApiError(error.message, 500));
    }
};
const createNewPost = asyncHandler(async (req, res, next) => {
    let data = req.body;

    if (req.files.length > 3) {
        return next(new Error("Only 3 files are allowed!"));
    }

    let filePaths = req.files.map((file) => file.path);

    let postPromises = filePaths.map((filepath) => {
        return uploadToCloudinary(filepath, "posts");
    });

    let results = await Promise.all(postPromises);
    console.log(results);

    // let result = await uploadToCloudinary(req.file.path, "posts");
    // console.log(result);

    const newpost = await new Post({
        content: data.content || "",
        attachments: results,
        userid: req.user._id,
    }).save();

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
