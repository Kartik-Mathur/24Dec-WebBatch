class ErrorHandler extends Error {
    constructor(statusCode, message = "Error is there", errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.message = message;
        this.success = false;
    }
}

export default ErrorHandler;