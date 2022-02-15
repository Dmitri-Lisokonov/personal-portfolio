import "./PortalSidebar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const PortalSideBar = () => {
    return (
        <div className="portal-sidebar">

            <div className="portal-sidebar__header">
                <div className="portal-sidebar__logo-text">
                    <span className="portal-sidebar__logo">
                        <LogoDevIcon />
                    </span>

                    <div className="portal-sidebar__text portal-sidebar__logo-title">
                        <span className="portal-sidebar__logo-name">Morpheus</span>
                        <span className="portal-sidebar__logo-subtext">Admin Portal</span>
                    </div>
                </div>

                <i className='toggle'></i>
            </div>

            <div className="portal-sidebar__menu-bar">
                <div className="portal-sidebar__menu">

                    <li className="portal-sidebar__search-box">
                        <i className='portal-sidebar__menu-icon'></i>
                        <input type="text" placeholder="Search..." />
                    </li>

                    <ul className="portal-sidebar__menu-links">
                        <li className="portal-sidebar__nav-link">
                            <a href="#">
                                <i className='portal-sidebar__menu-icon' ><DashboardIcon /></i>
                                <span className="portal-sidebar__text portal-sidebar__nav-text">Dashboard</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="portal-sidebar__bottom-content">
                    <li className="">
                        <a href="#">
                            <i className='portal-sidebar__menu-icon' ><LogoutIcon /></i>
                            <span className="portal-sidebar__text portal-sidebar__nav-text">Logout</span>
                        </a>
                    </li>
                </div>
            </div>

        </div>
    )
}

export default PortalSideBar;