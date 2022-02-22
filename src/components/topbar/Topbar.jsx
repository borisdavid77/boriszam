import React from "react"
import './topbar.scss';

function Topbar() {
    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                <div className="nav_logo">
                <a href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.92 195.6"><defs><style></style></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><rect className="cls-1" width="192.92" height="192.92" rx="23.05"/><path className="cls-2" d="M70,195.6a26.11,26.11,0,0,1-15.2-4.45A21.46,21.46,0,0,1,46.2,179.3l1.51-2.47v11.51a7.11,7.11,0,0,1-1.78,5.13A6.51,6.51,0,0,1,41,195.32a6.66,6.66,0,0,1-5.07-1.85,7.07,7.07,0,0,1-1.78-5.13v-84.5a7.06,7.06,0,0,1,1.78-5.21A6.87,6.87,0,0,1,41,96.85a7.11,7.11,0,0,1,5.13,1.78A6.93,6.93,0,0,1,48,103.84v38.35H46.34A20.84,20.84,0,0,1,55,130.61,26.48,26.48,0,0,1,70,126.3a27.05,27.05,0,0,1,25.81,16.16q3.63,7.66,3.63,18.49a43.62,43.62,0,0,1-3.63,18.42,27.25,27.25,0,0,1-10.27,12A28.54,28.54,0,0,1,70,195.6Zm-3.42-10.69a18.06,18.06,0,0,0,10-2.73,17.77,17.77,0,0,0,6.58-8.09A32.92,32.92,0,0,0,85.5,161q0-11.77-5.13-17.81t-13.76-6a18.45,18.45,0,0,0-9.93,2.67,17.16,17.16,0,0,0-6.65,8A32.93,32.93,0,0,0,47.71,161q0,11.64,5.2,17.8A17,17,0,0,0,66.61,184.91Z"/><path className="cls-2" d="M116.73,194.36a5.8,5.8,0,0,1-3.56-1,5.06,5.06,0,0,1-1.85-2.74,7.24,7.24,0,0,1,0-3.7,8.61,8.61,0,0,1,2.12-3.77l37.25-48.34v3.42H115.91a5.24,5.24,0,0,1-4-1.43,5.41,5.41,0,0,1-1.37-3.91,4.8,4.8,0,0,1,5.34-5.34h41.36a7.23,7.23,0,0,1,4.18,1.1,5,5,0,0,1,2.05,2.74,7.22,7.22,0,0,1,.07,3.56,7.91,7.91,0,0,1-2.06,3.69l-37.8,48.9v-3.7h36.57q5.47,0,5.48,5.2a5.28,5.28,0,0,1-1.44,3.91,5.5,5.5,0,0,1-4,1.43Z"/></g></g></svg>
                </a>
                </div>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list grid">
                    <li className="nav_item">
                        <a className="nav_link" href='/'>
                            <i className="uil uil-user nav_icon"></i>About me
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link" href='/works'>
                            <i className="uil uil-file-plus-alt nav_icon"></i>Works
                        </a>
                    </li>
                    </ul>
                    <i className="uil uil-times nav_close" id="nav-close"></i>
                </div>
                <div className="nav_btns">
                    <i className="uil uil-moon change-theme nav_toggle" id="theme-button"></i>
                    <div className="nav_toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
                </nav>
            </header>
        </div>
    );
}
export default Topbar;