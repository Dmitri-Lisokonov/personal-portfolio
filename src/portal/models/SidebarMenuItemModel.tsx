export class SidebarMenuItemModel {
    id: string;
    displayName: string;
    iconUrl: string = ""

    constructor(id: string, displayName: string) {
        this.id = id;
        this.displayName = displayName;
    }
}