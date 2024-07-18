export class ApiError extends Error {
    constructor( public message: string, statusCode: number = 500) {
        super();
    }
}