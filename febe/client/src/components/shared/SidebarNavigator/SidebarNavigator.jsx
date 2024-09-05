import "./SidebarNavigator.scss"
import {Link} from "react-router-dom";

export default function SidebarNavigator({directoryList}) {
    return (
        <div id="offcanvas" className="offcanvas offcanvas-start bg-dark canvasWidth" tabIndex="-1"
             data-bs-keyboard="false" data-bs-backdrop="false">
            <div className="offcanvas-header mb-0 pb-0">
                <h6 className="offcanvas-title overflow-hidden sideBarHeader">Main Navigation</h6>
                <button type="button" className="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
            </div>
            <div className="offcanvas-body px-0 pt-0">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="main-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-truncate">
                            <i className="fs-5 bi-house"></i><span
                            className="d-sm-inline navItemLabel">Home</span>
                        </Link>
                    </li>
                    {
                        directoryList.map((item, index) => item.linksViewable ? (
                            <li className="nav-item" key={item.directory + `_${index}`}>
                                <a href={"#submenu-" + item.directory} data-bs-toggle="collapse" className="nav-link">
                                    <span className="d-sm-inline navItemLabel">{item.directoryLabel}</span>
                                </a>
                                <ul className="collapse nav flex-column ms-1" id={"submenu-" + item.directory}
                                    data-bs-parent={"#submenu-" + item.directory}
                                >
                                    {
                                        item.links.map((item_2, index_2) => (
                                            <li key={index_2} className="nav-item">
                                                <Link to={item_2.url} className="nav-link nav-sub-link">
                                                    - <span className="d-sm-inline subLink">{item_2.text}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ) : <></>)
                    }
                </ul>
            </div>
            <footer>
                <p className="sidebarFooter mb-0">
                    <a className="linkToMainWebsite"
                       href="https://thegemtrove.herokuapp.com/">ToG
                    </a> - DKGreco
                </p>
                <small className={"version"}>Version 1.0</small>
            </footer>
        </div>
    );
}