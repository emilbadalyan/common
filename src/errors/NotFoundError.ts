import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(){
    super("Route Not Found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializerErrors() {
    return [{ message: "Route Not Found"}];
  }
}