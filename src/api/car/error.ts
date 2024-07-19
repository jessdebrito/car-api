
import { ApiError, NotFoundError } from "../@shared/errors";


export class CarNotFoundError extends NotFoundError {
    constructor(public readonly message: string = "Car not found") {
        super(message);
    }
}
export class OwnerNotFoundError extends NotFoundError {
    constructor(public readonly message: string = "You are not the owner of this car") {
        super(message);
    }
}
