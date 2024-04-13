import { CustomError } from "./CustomError";
export declare class NotFoundError extends CustomError {
    statusCode: number;
    constructor();
    serializerErrors(): {
        message: string;
    }[];
}
