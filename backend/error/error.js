import { response } from "express";

class ErrorHandler {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;
