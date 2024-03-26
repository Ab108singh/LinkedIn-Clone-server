class ApiError extends Error {
    constructor(message, statusCode, success) {
        super(message);
        this.statusCode = statusCode;
        this.success = success || false;
    }
}

module.exports = ApiError;
