class ErrorHandler extends Error {
    constructor(statusCode, message = "Error is there") {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
    }
}

export default ErrorHandler;