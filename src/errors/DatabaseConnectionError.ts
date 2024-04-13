import { CustomError } from "./CustomError";

export class DatabaseConnectionError extends CustomError{
  statusCode = 500;
  reason = "Error connecting to database.";

  constructor() {
    super("Error connecting to database.");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }


  serializerErrors() {
    return [{ message: this.reason}];
  }
}