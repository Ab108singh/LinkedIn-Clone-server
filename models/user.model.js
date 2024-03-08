const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            minLength: 8,
            maxLength: 40,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        profilePic: {
            type: String,
            default: "",
        },
        bio: {
            type: String,
            default: "",
        },
        connections: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        gender: {
            type: String,
            default: "",
        },
        skills: [
            {
                type: String,
            },
        ],
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
