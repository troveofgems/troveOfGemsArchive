import "./Structure.scss";

export function SideNavigationData() {
    return {
        directory: "html-structure",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML Structure",
            links: [
                {
                    listOrder: 0,
                    text: "Enforcing Structure with HTML5",
                    url: "#pageTop"
                },
                {
                    listOrder: 1,
                    text: "Elements, Attributes, & Values",
                    url: "#htmlDir_0_1"
                },
                {
                    listOrder: 2,
                    text: "Basic Page Structure",
                    url: "#htmlDir_0_2"
                },
                {
                    listOrder: 3,
                    text: "Code Example",
                    url: "#htmlDir_0_3"
                }]
        }
    };
}

export default function Structure() {
    return (
        <>
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
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <h1 id={"pageTop"} className="text-center m-3 mb-0 h1Styles">Enforcing Structure with HTML/5</h1>
                        <div id="pagePreambles">
                            <p className="topicPreamble bodyText_2">
                                Consider the differences between a newspaper, an online article, and an insurance form.
                                The modes of delivery and presentation are all very different, but all follow structures
                                that organize the
                                content being presented to the user. Much like the table of contents on this project's
                                landing page.
                                Newspapers will often tell a story by providing a header for the story, the text body
                                content of the story,
                                who authored the story, and there might be images included. An online article might
                                follow a similar format
                                as a newspaper, but by presenting a story online, a new structure is introduced when we
                                add videos or
                                linkable content. An insurance form on the other hand is unlikely to include images, and
                                instead is more
                                geared towards getting feedback from a user by way of checkboxes, radio options,
                                text-boxes, etc.
                            </p>
                            <p className="topicPreamble bodyText_2">
                                When we structure word documents, we may reach for headings and subheadings to reflect a
                                hierarchy of
                                information. A document might start with a large heading, followed by an introduction or
                                the most important
                                information. It can be further broken down under subheadings and paragraphs for each new
                                topic or section
                                of material.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_0_1" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Elements, Attributes, &amp; Values</h2>
                                <p className={"bodyText_3"}>
                                    Markup is defined by the singular or combined use of elements, attributes, and
                                    values.
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="htmlBasics" className="contentContainer">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="row">
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-center align-content-center tablePanel1 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_5"}>
                                                        What are HTML <strong>Elements</strong>?
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 p-3 text-start tablePanel2 tablePanelOverride">
                                                    <p className={"bodyText_6"}>
                                                        HTML <strong>Elements</strong> are usually made from two tags:
                                                        an
                                                        <span className={"spanColorComplimentary_2"}> opening</span> and
                                                        a
                                                        <span className={"spanColorComplimentary_3"}> closing</span> tag.
                                                    </p>
                                                    <p className={"bodyText_6"}>
                                                        Each <strong>Element</strong> tells the browser something about
                                                        the information being presented
                                                        between its opening and closing tags:
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-start align-content-center tablePanel3 tablePanelOverride">
                                                    <p className={"bodyText_6"}>
                                                        <span className={"spanColorComplimentaryAndBold_2"}>&lt;a&gt;</span><span
                                                        className={"spanColorBlack"}>Link Descriptor Content</span><span
                                                        className={"spanColorComplimentaryAndBold_3"}>&lt;/a&gt;</span>
                                                    </p>
                                                    <p className={"bodyText_6"}>
                                                        <span
                                                            className={"spanColorComplimentaryAndBold_2"}>&lt;h1&gt;</span>
                                                        <span className={"spanColorBlack"}>Header Content</span><span
                                                        className={"spanColorComplimentaryAndBold_3"}>&lt;/h1&gt;</span>
                                                    </p>
                                                    <p className={"bodyText_6"}>
                                                        <span
                                                            className={"spanColorComplimentaryAndBold_2"}>&lt;q&gt;</span><span
                                                        className={"spanColorBlack"}>Quoted Content</span><span
                                                        className={"spanColorComplimentaryAndBold_3"}>&lt;/q&gt;</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-center align-content-center tablePanel1 tablePanelOverride"
                                                >
                                                    <p className={"bodyText_5"}>
                                                        What are HTML <strong>Attributes</strong>?
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 p-3 text-start tablePanel2 tablePanelOverride"
                                                     >
                                                    <p className={"bodyText_6"}>
                                                        HTML <strong>Attributes</strong> provide additional information
                                                        about the contents of an element.
                                                        They appear on the opening tag of an element are made up of two
                                                        parts: a <span
                                                        className={"spanColorComplimentary_2"}>name</span> and
                                                        a <span
                                                        className={"spanColorComplimentary_3"}>value</span>.
                                                    </p>
                                                    <p className={"bodyText_6"}>
                                                        Each <strong>Attribute</strong> name indicates what kind of
                                                        extra information you are supplying
                                                        about the element's content. The majority of attributes can only
                                                        be used on certain elements and
                                                        either follow a pre-defined or stipulated format, although a few
                                                        attributes (such as lang) can
                                                        appear on any element.
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-start align-content-center tablePanel3 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_6"}>
                                                        &lt;p <span
                                                        className="spanColorComplimentaryAndBold_2">lang=</span><span
                                                        className="spanColorComplimentaryAndBold_3">"en"</span>&gt;Paragraph
                                                        in English&lt;/p&gt;
                                                    </p>
                                                    <p className={"bodyText_6"}>
                                                        &lt;p <span
                                                        className="spanColorComplimentaryAndBold_2">lang=</span><span
                                                        className="spanColorComplimentaryAndBold_3">"cz"</span>&gt;Odstavec
                                                        v češtině&lt;/p&gt;
                                                    </p>
                                                    <p className={"bodyText_6"}>
                                                        &lt;a <span
                                                        className="cspanColorComplimentaryAndBold_2">href=</span><span
                                                        className="spanColorComplimentaryAndBold_3">"/some/fileOrUrlPath"</span>&gt;
                                                        <br/>
                                                        <span className="mx-3"> Link Descriptor Content</span><br/>
                                                        &lt;/a&gt;
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-center align-content-center tablePanel1 tablePanelOverride"
                                                >
                                                    <p className={"bodyText_5"}>
                                                        What are HTML <strong>Values</strong>?
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 p-3 text-start tablePanel2 tablePanelOverride"
                                                >
                                                    <p className={"bodyText_6"}>
                                                        HTML <strong>Values</strong> are usually static strings of text
                                                        that can either represent
                                                        content on the page, or values provided to attributes or
                                                        application functions.
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-start align-content-center tablePanel3 tablePanelOverride"
                                                   >
                                                    <p className={"bodyText_6"}>
                                                        <span>&lt;a href=</span><span
                                                        className="">"/some/fileOrUrlPath"</span>&gt;
                                                        <br/>
                                                        <span
                                                            className="mx-3 spanColorComplimentaryAndBold_2"
                                                        >Link Descriptor Content</span><br/>
                                                        &lt;/a&gt;
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_0_2" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Basic Page Structure</h2>
                                <p className={"bodyText_3"}>
                                    DOCTYPE Declaration, HTML, Head, Body Tags
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="basicPageStructure" className="contentContainer">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="row">
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-center align-content-center tablePanel1 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_5"}>
                                                        DOCTYPE Declaration Tag
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 p-3 text-start tablePanel2 tablePanelOverride"
                                                     >
                                                    <p className={"bodyText_6"}>
                                                        This element is required as the very first line of an HTML
                                                        document and serves as an instruction
                                                        to the web browser about the type of document to expect and
                                                        which version of HTML is being used.
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-start align-content-center tablePanel3 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_6"}>
                                                        &lt;!DOCTYPE html&gt;
                                                    </p>
                                                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Doctype"
                                                       className="card-link">
                                                        MDN Web Docs
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-center align-content-center tablePanel1 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_5"}>
                                                        HTML Tag
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 p-3 text-start tablePanel2 tablePanelOverride"
                                                     >
                                                    <p className={"bodyText_6"}>This tag indicates that anything between it and the closing tag
                                                        is HTML code.</p>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-start align-content-center tablePanel3 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_6"}>
                                                        &lt;html lang="en"&gt;&lt;/html&gt;
                                                    </p>
                                                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"
                                                       className="card-link">
                                                        MDN Web Docs
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-center align-content-center tablePanel1 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_5"}>
                                                        Head Tag
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 p-3 text-start tablePanel2 tablePanelOverride"
                                                     >
                                                    <p className={"bodyText_6"}>
                                                        This tag is placed before the body element. This tag should
                                                        contain information <i>about</i> the
                                                        page, rather than information that is shown within the main part
                                                        of the browser window. Common
                                                        tags included in the head tag are title, meta, and script tags.
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-start align-content-center tablePanel3 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_6"}>
                                                        &lt;head&gt;&lt;/head&gt;
                                                    </p>
                                                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
                                                       className="card-link">
                                                        MDN Web Docs
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-center align-content-center tablePanel1 tablePanelOverride"
                                                    >
                                                    <p className={"bodyText_5"}>
                                                        Body Tag
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 p-3 text-start tablePanel2 tablePanelOverride"
                                                     >
                                                    <p className={"bodyText_6"}>
                                                        This tag indicates that anything between it and the closing tag
                                                        should be shown inside the main
                                                        browser window.
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-4 col-sm-12 p-3 text-start align-content-center tablePanel3 tablePanelOverride"
                                                >
                                                    <p className={"bodyText_6"}>
                                                        &lt;body&gt;&lt;/body&gt;
                                                    </p>
                                                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"
                                                       className="card-link">
                                                        MDN Web Docs
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_0_3" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Code Example</h2>
                                <p className={"bodyText_3"}>
                                    Putting It All Together
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="htmlStructureCodeExample" className="contentContainer">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="row">
                                            <div className="row col-lg-12 col-sm-12">
                                                <div className="col-lg-12 col-sm-12 p-3">
                                                    <div className="container">
                                                        <fieldset className="fieldsetBGColor">
                                                            <div
                                                                className="fieldsetContent">
                                                                <label><span className="exampleText htmlElements">HTML Elements</span></label>
                                                                <label><span
                                                                    className="exampleText htmlAttributes">HTML Attributes</span></label>
                                                                <label><span className="exampleText htmlValues">HTML Values</span></label>
                                                            </div>
                                                        </fieldset>
                                                        <pre>&lt;!DOCTYPE html&gt;</pre>
                                                        <pre>&lt;html <span className="htmlAttributes">lang=</span><span
                                                            className="htmlValues">"en"</span>&gt;</pre>
                                                        <pre> &lt;head&gt;</pre>
                                                        <pre>   &lt;meta <span
                                                            className="htmlAttributes">charset=</span><span
                                                            className="htmlValues">"utf-8"</span>&gt;</pre>
                                                        <pre>   &lt;title&gt;<span
                                                            className="htmlValues">HTML5 Structure</span>&lt;/title&gt;</pre>
                                                        <pre>   &lt;link <span
                                                            className="htmlAttributes">rel=</span><span
                                                            className="htmlValues">"icon"</span> <span
                                                            className="htmlAttributes">href=</span><span
                                                            className="htmlValues">"/favicon.ico"</span> <span
                                                            className="htmlAttributes">sizes=</span><span
                                                            className="htmlValues">"any"</span>&gt;</pre>
                                                        <pre> &lt;/head&gt;</pre>
                                                        <pre> &lt;body&gt;</pre>
                                                        <pre>  &lt;h1&gt;<span
                                                            className="htmlValues">Header Content</span>&lt;/h1&gt;</pre>
                                                        <pre className={"htmlComment"}>  &lt;!-- Import 3rd Party Library Popper.js From Bootstrap --&gt;</pre>
                                                        <pre>  &lt;script</pre>
                                                        <pre>
                                                            <span className="htmlAttributes">       src=</span>
                                                            <span className="htmlValues">
                                                                "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                                                            </span>
                                                        </pre>
                                                        <pre>
                                                            <span className="htmlAttributes">       integrity=</span>
                                                            <span className="htmlValues">
                                                                "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                                                            </span>
                                                        </pre>
                                                        <pre>
                                                            <span className="htmlAttributes">       crossorigin=</span><span
                                                            className="htmlValues">"anonymous"</span>&gt;&lt;/script&gt;
                                                        </pre>
                                                        <pre
                                                            className="fieldsetBGColor htmlElements"> &lt;/body&gt;
                                                        </pre>
                                                        <pre
                                                            className="fieldsetBGColor htmlElements">&lt;/html&gt;
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}