import { CustomError } from "./CustomError";
export declare class BadRequestError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializerErrors(): {
        message: string;
    }[];
}
