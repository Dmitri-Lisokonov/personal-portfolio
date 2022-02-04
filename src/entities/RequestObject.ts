import { User } from "./User";

export class RequestObject {
    user: User;
    target: string | undefined;

    constructor(user: User, target: string | undefined) {
        this.user = user;
        this.target = target;
    }
}