const apiResponse = (res, message = "", statusCode = 200, data = {}) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

module.exports = apiResponse;
