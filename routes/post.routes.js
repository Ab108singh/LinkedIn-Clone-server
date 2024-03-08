const express = require("express");
const {
    getAllPosts,
    createNewPost,
    updatePost,
} = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/authmiddleware");
const upload = require("../middlewares/upload");

const router = express.Router();

/**
 * @public
 * @description Route For getting all the posts
 * @method GET
 * @param http://localhost:8000/api/v1/posts
 */
router.get("/", getAllPosts);

/**
 * @private
 * @description Route For creating a single post
 * @method POST
 * @param http://localhost:8000/api/v1/posts
 */
router.post("/", authMiddleware, upload.array("attachments", 3), createNewPost);

/**
 * @private
 * @description Route For updating a single post
 * @method PUT
 * @param http://localhost:8000/api/v1/posts/update
 */
router.put("/update", authMiddleware, updatePost);

module.exports = router;
