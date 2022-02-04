import PortalBody from "../../components/Body/PortalBody";
import PortalHeader from "../../components/Header/PortalHeader";
import PortalNavbar from "../../components/Navbar/PortalNavbar";
import PortalSideBar from "../../components/Sidebar/PortalSidebar";
import "./PortalPage.css";

const PortalPage = () => {
    return (
        <div className="portal main_grid">
            <div className="portal_left-grid">
                <div className="portal_content-sidebar_wrapper">
                    <PortalSideBar />
                </div>
            </div>
            <div className="portal-content_grid">
                <div className="portal-content_header_wrapper">
                    <div className="portal_content-header_banner">
                        <PortalHeader />
                    </div>
                    <div className="portal_header-header_navbar">
                        <PortalNavbar />
                    </div>
                </div>
                <div className="portal_content-content_wrapper">
                    <PortalBody />
                </div>
            </div>
        </div>
    )
}

export default PortalPage;