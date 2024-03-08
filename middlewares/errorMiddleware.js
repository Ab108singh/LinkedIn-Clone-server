const multer = require("multer");

module.exports = (err, req, res, next) => {
    // err name
    // err message
    // err stack trace
    // err status code
    // success status - false

    // if (err instanceof multer.MulterError) {
    //     console.log(err.name);
    //     console.log(err.message);
    // }
    // console.log(err.statusCode);
    res.status(err.statusCode || 500).json({
        success: err.success,
        error: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV !== "production" ? err.stack : null,
    });
};
