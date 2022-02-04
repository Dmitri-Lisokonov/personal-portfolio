import { isTemplateSpan } from "typescript"
import { SidebarMenuItemModel } from "../models/SidebarMenuItemModel"

export const menuItems = [
    new SidebarMenuItemModel(
        "users",
        "Users"
    ),
    new SidebarMenuItemModel(
        "posts",
        "Posts"
    ),
]