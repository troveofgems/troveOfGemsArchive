import Html5Logo from "../../components/Landing/img/bookIcons/html5.png";
import CSS3Logo from "../../components/Landing/img/bookIcons/css3Logo.png";
import DataVisualizationLogo from "../../components/Landing/img/bookIcons/dataVisualization.gif";
import AccessibilityLogo from "../../components/Landing/img/bookIcons/accessibility.png";
import OWASPLogo from "../../components/Landing/img/bookIcons/owasp.png";

export default function BookListData() {
    return [
        {
            bookKey: "html",
            bookStamp: {
                title: "Book 1 - HTML/5",
                bookId: 1
            },
            bookTitle: {
                title: "HTML/5"
            },
            linkingPanel: {
                logoSrc: Html5Logo,
                hrefLink: "/site/html"
            },
            bookEntry: {
                p1: "HTML is the backbone of all web pages and content!",
                p2: "Learn the essentials & basics of HTML by vising the directory contained within this book."
            }
        },
        {
            bookKey: "css",
            bookStamp: {
                title: "Book 2 - CSS/3",
                bookId: 2
            },
            bookTitle: {
                title: "CSS/3"
            },
            linkingPanel: {
                logoSrc: CSS3Logo,
                hrefLink: "/site/css"
            },
            bookEntry: {
                p1: "Work with CSS/3 to design and style beautiful and cogent web pages.",
                p2: "The directory contained within touches on CSS/3 topics, providing code examples and explanations " +
                    "for specific topics."
            }
        },
        {
            bookKey: "data-viz",
            bookStamp: {
                title: "Book 3 - Data Visualizations",
                bookId: 3
            },
            bookTitle: {
                title: "Data Visualizations"
            },
            linkingPanel: {
                logoSrc: DataVisualizationLogo,
                hrefLink: "/site/data-visualizations"
            },
            bookEntry: {
                p1: "Create Charts & Graphs for websites and help users analyze and understand data!",
                p2: "Unleash the power of Flotr2 and explore Data Visualization topics, provided code examples and explanations."
            }
        },
        {
            bookKey: "accessibility",
            bookStamp: {
                title: "Book 4 - Accessibility",
                bookId: 4
            },
            bookTitle: {
                title: "Accessibility"
            },
            linkingPanel: {
                logoSrc: AccessibilityLogo,
                hrefLink: "/site/accessibility"
            },
            bookEntry: {
                p1: "Implement empathy in your apps and sites to expand your audience and ensure people with disabilities can view your content!",
                p2: "It may be the law!"
            }
        },
        {
            bookKey: "owasp",
            bookStamp: {
                title: "Book 5 - Web App Security",
                bookId: 5
            },
            bookTitle: {
                title: "Web App Security"
            },
            linkingPanel: {
                logoSrc: OWASPLogo,
                hrefLink: "/site/owasp"
            },
            bookEntry: {
                p1: "Learn how to secure your NodeJS/ExpressJS Apps and about OWASP principles.",
                p2: "The directory contained within touches on Web App Security topics and providing code examples " +
                    "or explanations."
            }
        }
    ];
}