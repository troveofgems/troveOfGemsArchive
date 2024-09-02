import "./DirectoryPage.scss";
import SidebarNavigator from "../shared/SidebarNavigator/SidebarNavigator";
import {Link, useParams} from "react-router-dom";

export default function DirectoryPage() {

    const
        params = useParams(),
        directoryList = [
        {
            directory: "html",
            directoryLabel: "HTML/5",
            directoryIntroduction: "",
            linksViewable: !(params.directory === 'html'),
            links: [
                {
                    listOrder: 0,
                    text: "Structure",
                    url: "/site/html/pages/structure"
                },
                {
                    listOrder: 1,
                    text: "Text",
                    url: "/site/html/pages/text"
                },
                {
                    listOrder: 2,
                    text: "Lists",
                    url: "/site/html/pages/lists"
                },
                {
                    listOrder: 3,
                    text: "Links",
                    url: "/site/html/pages/links"
                },
                {
                    listOrder: 4,
                    text: "Images",
                    url: "/site/html/pages/images"
                },
                {
                    listOrder: 5,
                    text: "Tables",
                    url: "/site/html/pages/tables"
                },
                {
                    listOrder: 6,
                    text: "Forms",
                    url: "/site/html/pages/forms"
                },
                {
                    listOrder: 7,
                    text: "HTML5 Layout",
                    url: "/site/html/pages/layout"
                },
                {
                    listOrder: 8,
                    text: "Flash, Video & Audio",
                    url: "/site/html/pages/flash-video-audio"
                },
                {
                    listOrder: 9,
                    text: "Extra Markup",
                    url: "/site/html/pages/extra-markup"
                },
            ]
        },
        {
            directory: "css",
            directoryLabel: "CSS/3",
            directoryIntroduction: "",
            linksViewable: !(params.directory === 'css'),
            links: [
                {
                    listOrder: 0,
                    text: "Basic CSS",
                    url: "/site/css/pages/basic-css"
                },
                {
                    listOrder: 1,
                    text: "Color",
                    url: "/site/css/pages/color"
                },
                {
                    listOrder: 2,
                    text: "Text",
                    url: "/site/css/pages/text"
                },
                {
                    listOrder: 3,
                    text: "Boxes",
                    url: "/site/css/pages/boxes"
                },
                {
                    listOrder: 4,
                    text: "Lists, Tables, & Forms",
                    url: "/site/css/pages/lists-tables-forms"
                },
                {
                    listOrder: 5,
                    text: "Layout",
                    url: "/site/css/pages/layout"
                },
                {
                    listOrder: 6,
                    text: "Images",
                    url: "/site/css/pages/Images"
                },
                {
                    listOrder: 7,
                    text: "Process & Design",
                    url: "/site/css/pages/process-design"
                },
                {
                    listOrder: 8,
                    text: "Animations",
                    url: "/site/css/pages/animations"
                }
            ]
        },
        {
            directory: "data-visualizations",
            directoryLabel: "Data Visualizations",
            directoryIntroduction: "",
            linksViewable: !(params.directory === "data-visualizations"),
            links: [
                {
                    listOrder: 0,
                    text: "Graphing Data",
                    url: "/site/data-visualizations/pages/graphing-data"
                },
                {
                    listOrder: 1,
                    text: "Interactive Charts",
                    url: "/site/data-visualizations/pages/interactive-charts"
                },
                {
                    listOrder: 2,
                    text: "Chart Integrations",
                    url: "/site/data-visualizations/pages/chart-integrations"
                },
                {
                    listOrder: 3,
                    text: "Specialized Graphs",
                    url: "/site/data-visualizations/pages/specialized-graphs"
                },
                {
                    listOrder: 4,
                    text: "Displaying Timelines",
                    url: "/site/data-visualizations/pages/displaying-timelines"
                },
                {
                    listOrder: 5,
                    text: "Visualizing Geographic Data",
                    url: "/site/data-visualizations/pages/geographic-data"
                },
                {
                    listOrder: 6,
                    text: "D3.js",
                    url: "/site/data-visualizations/pages/d3js"
                },
                {
                    listOrder: 7,
                    text: "Managing Browser Data",
                    url: "/site/data-visualizations/pages/managing-browser-data"
                },
                {
                    listOrder: 8,
                    text: "Data Driven Apps",
                    url: "/site/data-visualizations/pages/data-driven-apps"
                }
            ]
        },
        {
            directory: "accessibility",
            directoryLabel: "Accessibility",
            directoryIntroduction: "",
            linksViewable: !(params.directory === "accessibility"),
            links: [
                {
                    listOrder: 0,
                    text: "Semantic HTML",
                    url: "/site/accessibility/pages/semantic-html"
                },
                {
                    listOrder: 1,
                    text: "Color Accessibility",
                    url: "/site/accessibility/pages/color-accessibility"
                },
                {
                    listOrder: 2,
                    text: "ARIA Attributes",
                    url: "/site/accessibility/pages/aria-attributes"
                },
                {
                    listOrder: 3,
                    text: "Images",
                    url: "/site/accessibility/pages/images"
                },
                {
                    listOrder: 4,
                    text: "The Outline Property",
                    url: "/site/accessibility/pages/outline-property"
                },
                {
                    listOrder: 5,
                    text: "Tab Indexing",
                    url: "/site/accessibility/pages/tab-indexing"
                },
                {
                    listOrder: 6,
                    text: "Bypassing Blocks",
                    url: "/site/accessibility/pages/bypassing-blocks"
                },
                {
                    listOrder: 7,
                    text: "Video & Audio",
                    url: "/site/accessibility/pages/video-and-audio"
                },
                {
                    listOrder: 8,
                    text: "Navigation",
                    url: "/site/accessibility/pages/desktop-and-mobile-nav"
                },
                {
                    listOrder: 9,
                    text: "IFrames",
                    url: "/site/accessibility/pages/iframes"
                },
                {
                    listOrder: 10,
                    text: "Forms",
                    url: "/site/accessibility/pages/forms"
                },
                {
                    listOrder: 11,
                    text: "Icons",
                    url: "/site/accessibility/pages/icons"
                },
                {
                    listOrder: 12,
                    text: "Links",
                    url: "/site/accessibility/pages/links"
                },
                {
                    listOrder: 13,
                    text: "Testing Applications",
                    url: "/site/accessibility/pages/testing-applications"
                },
                {
                    listOrder: 14,
                    text: "Accessible Web App Example",
                    url: "/site/accessibility/pages/web-app-example"
                }
            ]
        },
        {
            directory: "owasp",
            directoryLabel: "Web App Security",
            directoryIntroduction: "",
            linksViewable: !(params.directory === "owasp"),
            links: [
                {
                    listOrder: 0,
                    text: "Getting Started With Security",
                    url: "/site/owasp/pages/getting-started"
                },
                {
                    listOrder: 1,
                    text: "Secure SDLC",
                    url: "/site/owasp/pages/ssdlc"
                },
                {
                    listOrder: 2,
                    text: "OWASP Top 10",
                    url: "/site/owasp/pages/top-ten"
                },
                {
                    listOrder: 3,
                    text: "Risk Management",
                    url: "/site/owasp/pages/risk-management"
                },
                {
                    listOrder: 4,
                    text: "Threat Modeling",
                    url: "/site/owasp/pages/threat-modeling"
                },
                {
                    listOrder: 5,
                    text: "Authentication & Authorization",
                    url: "/site/owasp/pages/authentication-and-authorization"
                },
                {
                    listOrder: 6,
                    text: "Session Management",
                    url: "/site/owasp/pages/session-management"
                },
                {
                    listOrder: 7,
                    text: "Security Architecture",
                    url: "/site/owasp/pages/security-architecture"
                },
                {
                    listOrder: 8,
                    text: "Input Validation & Data Sanitization",
                    url: "/site/owasp/pages/data-validation-and-sanitization"
                },
                {
                    listOrder: 9,
                    text: "AJAX Security",
                    url: "/site/owasp/pages/ajax-security"
                },
                {
                    listOrder: 10,
                    text: "Insecurity Code Discovery & Mitigation",
                    url: "/site/owasp/pages/insecurity-and-mitigation-discovery"
                },
                {
                    listOrder: 11,
                    text: "Application Mapping",
                    url: "/site/owasp/pages/app-mapping"
                },
                {
                    listOrder: 12,
                    text: "Cryptography",
                    url: "/site/owasp/pages/cryptography"
                },
                {
                    listOrder: 13,
                    text: "Testing Methodologies",
                    url: "/site/owasp/pages/testing-methodologies"
                }
            ]
        },
    ];

    const directoryData = directoryList.find((item, index) => item.directory === params.directory);
    console.log("directoryData: ", directoryData);

    return (
        <main className="mainSubSection">
            <SidebarNavigator directoryList={directoryList} />

            <div className="container-fluid pageContent">
                <div className="row col-lg-12 col-sm-12 rowContainer">
                    <div className="col-lg-3 col-sm-12 menuTogglerContainer">
                        <div className="col-lg-12">
                            <div id="menuToggler">
                                <button className="btn expandMenuBtn" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvas">
                                    Menu <span className="material-symbols-outlined">subdirectory_arrow_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="tableRest" className="col-lg-9 col-sm-12">
                        <div className="row navigationContent col-lg-12 col-md-12 col-sm-12">
                            <div className="col-lg-6 col-md-6 pagePanel_1"
                            >
                                <h2 className="page__h2">
                                    {directoryData.directoryLabel} Directory
                                </h2>
                                <p className="lead page__intro_1">
                                    {directoryData.directoryIntroduction}
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 pagePanel_2"
                            >
                                <p className="lead page__intro_2 text-center">
                                    Table of Contents
                                </p>
                                <ol id="linksDirectory">
                                    {
                                        directoryData.links.map((item, index) => (
                                            <li className="linkToPage">
                                                <Link to={item.url} key={index}>{item.text}</Link>
                                            </li>
                                        ))
                                    }
                                </ol>
                                <p className="book__footer">
                                    Visit Each Section For More Details!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};