export const Header = () => {
    return (
        <div className="u-clearfix u-header u-header" id="sec-742e">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <a href="https://nicepage.com" className="u-image u-logo u-image-1">
                    <img src="images/default-logo.png" className="u-logo-image u-logo-image-1" />
                </a>
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                    <div className="menu-collapse">
                        <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                            href="#">
                            <svg className="u-svg-link" viewBox="0 0 24 24">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink"></use>
                            </svg>
                            <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px"
                                xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <rect y="1" width="16" height="2"></rect>
                                    <rect y="7" width="16" height="2"></rect>
                                    <rect y="13" width="16" height="2"></rect>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                        <ul className="u-nav u-unstyled u-nav-1">
                            <li className="u-nav-item"><a
                                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                href="Home.html" >Home</a>
                            </li>
                            <li className="u-nav-item"><a
                                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                href="About.html">About</a>
                            </li>
                            <li className="u-nav-item"><a
                                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                href="Contact.html">Contact</a>
                            </li>
                            <li className="u-nav-item"><a
                                className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                href="Page-1.html">Page 1</a>
                            </li>
                        </ul>
                    </div>
                    <div className="u-custom-menu u-nav-container-collapse">
                        <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                            <div className="u-inner-container-layout u-sidenav-overflow">
                                <div className="u-menu-close"></div>
                                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Home.html">Home</a>
                                    </li>
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="About.html"
                                    >About</a>
                                    </li>
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Contact.html">Contact</a>
                                    </li>
                                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Page-1.html">Page 1</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                    </div>
                </nav>
            </div>
        </div>
    )
}