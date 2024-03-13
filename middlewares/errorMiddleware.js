module.exports = (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: err.success,
        error: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV !== "production" ? err.stack : null,
    });
};


