export class PortalTableModel {
    [key: string]: string;
    code: string;

    constructor(key: string, code: string) {
        this.key = key;
        this.code = code;
    }
}
