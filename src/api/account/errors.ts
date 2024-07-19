import { ApiError, ConflictError, NotFoundError } from "../@shared/errors";

export class EmailAlreadyUsedError extends ConflictError {
    constructor(public readonly message: string = "E-mail already registered") {
        super(message)
    }
}

export class AccountNotFoundError extends NotFoundError {
    constructor(public readonly message: string = "User not registered") {
        super(message)
    }
}