import { CustomError } from "./CustomError";
export declare class NotAuthorizedError extends CustomError {
    statusCode: number;
    constructor();
    serializerErrors(): {
        message: string;
    }[];
}
