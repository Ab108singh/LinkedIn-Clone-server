const ApiError = require("./ApiError");

module.exports = (func) => {
    return async function (req, res, next) {
        return Promise.resolve(func(req, res, next)).catch((err) =>
            next(new ApiError(err.message, 500))
        );
    };
};
