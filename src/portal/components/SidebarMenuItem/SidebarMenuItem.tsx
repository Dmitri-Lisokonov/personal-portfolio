import { FC } from "react";
import { SidebarMenuItemModel } from "../../models/SidebarMenuItemModel";
import "./SidebarMenuItem.css";

const SidebarMenuItem: FC<{ model: SidebarMenuItemModel }> = ({ children, model }) => {
    return (
        <div className="portal_sidebar-item">
            <div className="portal_sidebar-item-icon">

            </div>
            <div className="portal_sidebar-item-display_name">
                {model.displayName}
            </div>
        </div>
    )
}

export default SidebarMenuItem;