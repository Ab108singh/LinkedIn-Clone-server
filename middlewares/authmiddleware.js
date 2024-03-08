const ApiError = require("../helpers/ApiError");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    try {
        let header = req.headers["authorization"];

        if (!header) {
            return next(new ApiError("No Auth Header provided!", 401));
        }

        let token = header.split(" ")[1];

        if (!token) {
            return next(new ApiError("No Token provided!", 401));
        }

        let { userid } = jwt.verify(token, process.env.JWT_SECRET);

        let user = await User.findById(userid);

        if (!user) {
            return next(new ApiError("User not found with the given token.", 401));
        }

        // OPTIONAL
        req.user = user;
        return next();
    } catch (error) {
        return next(new ApiError(error.message, 500));
    }
}

module.exports = authMiddleware;
