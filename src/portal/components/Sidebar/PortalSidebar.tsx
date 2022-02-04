import "./PortalSidebar.css";
import { menuItems } from "../../config/sidebarconfig"
import SidebarMenuItem from "../SidebarMenuItem/SidebarMenuItem";
import AbcIcon from '@mui/icons-material/Abc';

const PortalSideBar = () => {
    return (
        <div className="portal_sidebar">
            <div className="portal_sidebar-logo">
                Logo
            </div>
            <div className="portal_sidebar-items">
                {
                    menuItems.map((item) => {
                        return (
                            <SidebarMenuItem model={item} />
                        )
                    })
                }
            </div>
        </div >
    )
}

export default PortalSideBar;