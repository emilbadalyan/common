import { CustomError } from "./CustomError";
export declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializerErrors(): {
        message: string;
    }[];
}
