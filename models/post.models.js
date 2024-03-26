const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            default: "",
            trim: true,
        },
        attachments: [
            {
                secure_url: String,
                public_id: String,
            },
        ],
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
