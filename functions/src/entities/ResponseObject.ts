export class ResponseObject {
    status: string;
    message: any;

    constructor(status: string, message: any) {
        this.status = status;
        this.message = message;
    }
}