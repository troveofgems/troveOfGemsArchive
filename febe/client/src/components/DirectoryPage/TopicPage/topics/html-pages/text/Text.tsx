import "./text.scss";

export function SideNavigationData() {
    return {
        directory: "html-text",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML/5 Text Elements",
            links: [
                {
                    listOrder: 0,
                    text: "Structural Markup",
                    url: "#htmlDir_1_0",
                    subLinks: [
                        {
                            listOrder: 0,
                            text: "The Headings Elements",
                            url: "#htmlDir_1_0_0"
                        },
                        {
                            listOrder: 1,
                            text: "The Paragraph Element",
                            url: "#htmlDir_1_0_1"
                        },
                        {
                            listOrder: 2,
                            text: "Bold, Italic, Superscript, & Subscript Elements",
                            url: "#htmlDir_1_0_2"
                        },
                        {
                            listOrder: 3,
                            text: "White Space",
                            url: "#htmlDir_1_0_3"
                        },
                        {
                            listOrder: 4,
                            text: "Line Breaks & Horizontal Rules",
                            url: "#htmlDir_1_0_4"
                        },
                    ]
                },
                {
                    listOrder: 1,
                    text: "Semantic Markup",
                    url: "#htmlDir_1_1",
                    subLinks: [
                        {
                            listOrder: 0,
                            text: "Strong & Emphasis",
                            url: "#htmlDir_1_1_0"
                        },
                        {
                            listOrder: 1,
                            text: "Quotations & Citations",
                            url: "#htmlDir_1_1_1"
                        },
                        {
                            listOrder: 2,
                            text: "Abbreviations & Acronyms",
                            url: "#htmlDir_1_1_2"
                        },
                        {
                            listOrder: 3,
                            text: "Definitions",
                            url: "#htmlDir_1_1_3"
                        },
                        {
                            listOrder: 4,
                            text: "Address",
                            url: "#htmlDir_1_1_4"
                        },
                        {
                            listOrder: 5,
                            text: "Content Changes",
                            url: "#htmlDir_1_1_5"
                        }
                    ]
                }
            ]
        }
    };
}

export default function Text() {
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
                        <h1 className="text-center m-3 h1Styles">HTML/5 Text Elements</h1>
                        <div id="pagePreambles">
                            <p className="topicPreamble bodyText_2">
                                When developers create a web page, they add tags, also known as <strong><em>markup</em></strong> to
                                the contents of their page.
                                These tags provide extra meaning and allow browsers to show users the appropriate
                                structure for a given page.
                            </p>
                            <p className="topicPreamble bodyText_2">
                                There are two (2) general types of <strong><em>markup</em></strong> to consider:
                            </p>
                            <ol className="olTypesOfMarkup bodyText_3">
                                <li>Structural Markup
                                    <ul>
                                        <li>Markup used to describe elements like headings and paragraphs.</li>
                                    </ul>
                                </li>
                                <li>Semantic Markup
                                    <ul>
                                        <li>Markup used to describe things like emphasis, quotations, the meaning of
                                            acronyms, etc.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div className="structuralMarkupContainer">
                            <span id="htmlDir_1_0"></span>
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Structural Markup</h2>
                                <p className={"bodyText_3"}>
                                    These text elements are intended to affect the structure of webpages.
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="headings">
                                <div id="htmlDir_1_0_0" className="row">
                                    <h3 className="h3Styles">1. The Headings Elements</h3>
                                    <div className="col-sm-12 col-lg-12">
                                        <p className="bodyText_1">
                                            HTML/5 has six (6) levels of headings:
                                        </p>
                                        <div className="row">
                                            <div className="row col-lg-12 col-sm-12 tablePanel1">
                                                <div className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;h1&gt;h1 Header&lt;/h1&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3"}>
                                                        Used for main headings
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                                >
                                                    <h1 className={"h1Styles"}>This is an h1 Heading</h1>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                                >
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;h2&gt;h2 Header&lt;/h2&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3"}>
                                                        Used for headings nested under main headings
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                                >
                                                    <h2 className={"h2Styles"}>This is an h2 Heading</h2>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                                >
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;h3&gt;h3 Header&lt;/h3&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3"}>
                                                        Used for headings nested under h2 headings
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                                >
                                                    <h3  className={"h3Styles"}>This is an h3 Heading</h3>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                                >
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;h4&gt;h4 Header&lt;/h4&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3"}>
                                                        Used for headings nested under h3 headings
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                                >
                                                    <h4  className={"h4Styles"}>This is an h4 Heading</h4>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                                >
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;h5&gt;h5 Header&lt;/h5&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3"}>
                                                        Used for headings nested under h4 headings
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                                >
                                                    <h5  className={"h5Styles"}>This is an h5 Heading</h5>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                                >
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;h6&gt;h6 Header&lt;/h6&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3"}>
                                                        Used for headings nested under h5 headings
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                                >
                                                    <h6 className={"h6Styles"}>This is an h6 Heading</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="paragraphs">
                                <div id="htmlDir_1_0_1" className="row">
                                    <h3 className="h3Styles">2. The Paragraph Element</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <p className="bodyText_1">HTML/5 provides the paragraph tag &lt;p&gt; to set
                                            paragraphs. By default, a browser will show each
                                            paragraph on a new line with space between it and any subsequent
                                            paragraphs.</p>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                        >
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;p&gt;Paragraph Content&lt;/p&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3"}>
                                                Used to hold text content in a paragraph format
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                        >
                                            <p className="example tablePanel3 bodyText_4">
                                                A paragraph consists of one or more sentences that form a self-contained
                                                unit of discourse. The start
                                                of a paragraph is indicated by a new line.
                                            </p>
                                            <p className="example tablePanel3 bodyText_4">
                                                Text is easier to understand when it is split up into units of text. For
                                                example, a book may have
                                                chapters. Chapters can have subheadings. Under each heading there will
                                                be one or more paragraphs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="emphasis">
                                <div id="htmlDir_1_0_2" className="row">
                                    <h3 className="h3Styles">3. Bold, Italic, Superscript, & Subscript Elements</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_2"}>
                                                    <strong>&lt;b&gt;b Tag&lt;/b&gt;</strong>
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    Makes enclosed chars appear in bold. This element can also represent
                                                    a section of text that would
                                                    be presented in a visually different way (keywords in a paragraph)
                                                    although the use of the b
                                                    tag does not imply any additional meaning.
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    Also Review the Semantic: strong Tag &lt;strong&gt;
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <p className="example tablePanel3 bodyText_4">
                                                    <b>I am text using the b tag</b>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_2"}>
                                                    <strong>&lt;em&gt;em Tag&lt;/em&gt;</strong>
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    Makes enclosed chars appear in italic. This element can also
                                                    represent a section of text that would
                                                    be said in a different way from the surrounding content - such as
                                                    technical terms, names of ships,
                                                    foreign words, thoughts, etc.
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    Also Review The Semantic: em Tag &lt;em&gt;
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <p className="example tablePanel3 bodyText_4">
                                                    <em>I am text using the em tag</em>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_2"}>
                                                    <strong>&lt;sup&gt;sup Tag&lt;/sup&gt;</strong>
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    The sup tag is used to contain chars that should be superscript such
                                                    as the suffixes of dates or
                                                    mathematical concepts like raising a number to a power such as
                                                    2<sup>2</sup>.
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <p className="example tablePanel3 bodyText_4">
                                                    <span>Einstein created the famous equation: E=MC<sup>2</sup></span><br/>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_2"}>
                                                    <strong>&lt;sub&gt;sub Tag&lt;/sub&gt;</strong>
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    The sub tag is used to contain chars that should be subscript such
                                                    as declaring footnotes or
                                                    creating or representing chemical equations/formulae like
                                                    H<sub>2</sub>0.
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <p className="example tablePanel3 bodyText_4">
                                                    <span>The amount of CO<sub>2</sub> in the atmosphere grew by 2ppm in 2009<sub>9</sub>.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="whitespace">
                                <div id="htmlDir_1_0_3" className="row">
                                    <h3 className="h3Styles">4. White Space</h3>
                                    <p className={"bodyText_1"}>
                                        In order to make code easier to read, web page authors tend to add extra space
                                        or start elements on new lines.
                                        When the browser comes across two (2) or more spaces next to each other, it only
                                        displays one space.
                                        Similarly, if it comes across a line break, it treats that as a single space as
                                        well. This is known as <strong>white space collapsing</strong>.
                                    </p>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="row col-lg-12 col-sm-12">
                                            <div className="col-lg-2 col-sm-12 p-3">
                                            </div>
                                            <div className="col-lg-5 col-sm-12 p-3 text-center align-content-center">
                                                <p className={"bodyText_5"}>Written Code</p>
                                            </div>
                                            <div className="col-lg-5 col-sm-12 p-3 text-center align-content-center">
                                                <p className={"bodyText_5"}>Rendered</p>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-2 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_5"}>
                                                    <strong>Example #1</strong>
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-5 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <pre>&lt;p&gt;The moon is drifting away from Earth.&lt;/p&gt;</pre>
                                            </div>
                                            <div
                                                className="col-lg-5 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <p className="example tablePanel3 bodyText_4">
                                                    The moon is drifting away from Earth.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-2 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_5"}>
                                                    <strong>Example #2</strong>
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-5 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <pre>&lt;p&gt;The moon is     drifting away from Earth.&lt;/p&gt;</pre>
                                            </div>
                                            <div
                                                className="col-lg-5 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <p className="example tablePanel3">The moon is drifting away from
                                                    Earth.</p>
                                            </div>
                                        </div>
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-2 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_5"}>
                                                    <strong>Example #3</strong>
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-5 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                    <pre>
                      &lt;p&gt;The moon
                      is drifting                         away from Earth.&lt;/p&gt;
                    </pre>
                                            </div>
                                            <div
                                                className="col-lg-5 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                            >
                                                <p className="example tablePanel3">
                                                    The moon
                                                    is drifting away from Earth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="lineBreaksAndHR">
                                <div id="htmlDir_1_5" className="row">
                                    <h3 className="h3Styles">5. Line Breaks & Horizontal Rules</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <p className="bodyText_1">
                                            There are two (2) <strong>self-closing</strong> tags to help with line
                                            breaks and horizontal rules. They are also known as <strong>Empty Elements</strong>.
                                        </p>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                        >
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;br/&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used to add a line break inside the middle of a paragraph or within the
                                                page itself.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                        >
                                            <p className="example tablePanel3 bodyText_4">
                                                The Earth<br/> gets one hundred tons heavier every day<br/>due to
                                                falling space dust.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                        >
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;hr/&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used to create a break between themes - such as a change in topic.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                        >
                                            <div className="tablePanel2">
                                                <p className="example tablePanel3 bodyText_4">
                                                    Venus is the only planet that rotates clockwise.
                                                </p>
                                                <hr/>
                                                <p className="example tablePanel3 bodyText_4">Jupiter is bigger than all the other
                                                    planets combined.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div className="structuralMarkupContainer">
                            <span id="semanticMarkupAnchor"></span>
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Semantic Markup</h2>
                                <p className={"bodyText_3"}>
                                    These text elements are not intended to affect the structure of webpages, but they
                                    do add extra
                                    information to the pages.
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="strongAndEmphasisSection">
                                <div id="htmlDir_1_6" className="row">
                                    <h3 className="h3Styles">1. Strong &amp; Emphasis</h3>
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="row">
                                            <div className="row col-lg-12 col-sm-12">
                                                <div className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;strong&gt;strong Tag&lt;/strong&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3 text-start"}>
                                                        Use of the strong element indicates that its content has strong
                                                        importance.
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2">
                                                    <p className="example tablePanel3 bodyText_4">
                                                        <strong>Beware</strong>: Crocodiles Do Not Swim Here.<br/>
                                                    </p>
                                                    <p className="example tablePanel3 bodyText_4">
                                                        This toy has many small pieces and is <strong>not suitable for
                                                        children under 5 years old.</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row col-lg-12 col-sm-12">
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                                    <p className={"bodyText_2"}>
                                                        <strong>&lt;em&gt;em Tag&lt;/em&gt;</strong>
                                                    </p>
                                                    <p className={"bodyText_3 text-start"}>
                                                        Use of the em element indicates emphasis that subtly changes the
                                                        meaning of a sentence.
                                                    </p>
                                                </div>
                                                <div
                                                    className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2">
                                                    <p className="example tablePanel3 bodyText_4">
                                                        I <em>think</em> Lou was the first.<br/>
                                                    </p>
                                                    <p className="example tablePanel3 bodyText_4">
                                                        I think <em>Lou</em> was the first.<br/>
                                                    </p>
                                                    <p className="example tablePanel3 bodyText_4">
                                                        I think Lou was the <em>first</em>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="quotationsSection">
                                <div id="htmlDir_1_7" className="row">
                                    <h3 className="h3Styles">2. Quotations &amp; Citations</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <p className="bodyText_1">
                                            HTML5 provides three (3) tags:  &lt;blockquote&gt;, &lt;q&gt;,
                                            and &lt;cite&gt;, for citations.
                                        </p>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;blockquote&gt;Citation Content&lt;/blockquote&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used for longer quotes that take up an entire paragraph. p Tags may be
                                                used within blockquote elements.
                                                This element uses the <strong>cite</strong> attribute to indicate where
                                                a quote is from. Its value
                                                should be a URL that will have more information about the source of the
                                                quotation.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2">
                                            <blockquote cite="https://en.wikipedia.org/wiki/Custard_apple">
                                                <p className="example tablePanel3 bodyText_4 text-start">The Annonaceae are a family of
                                                    flowering plants consisting of trees, shrubs, or rarely lianas[3]
                                                    commonly known as the custard apple family[4][3] or soursop family.
                                                    With 108 accepted genera and about 2400 known species,[5] it is the
                                                    largest family in the Magnoliales. Several genera produce edible
                                                    fruit, most notably Annona, Anonidium, Asimina, Rollinia, and
                                                    Uvaria. Its type genus is Annona. The family is concentrated in the
                                                    tropics, with few species found in temperate regions. About 900
                                                    species are Neotropical, 450 are Afrotropical, and the remaining are
                                                    Indomalayan. </p>
                                            </blockquote>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;q&gt;Citation Content&lt;/q&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used for shorter quotes that sit within a paragraph. Browsers are
                                                supposed to put quotes around the
                                                q Tag, however IE did not, so q was usually avoided. This element uses
                                                the <strong>cite</strong>
                                                attribute to indicate where a quote is from. Its value should be a URL
                                                that will have more
                                                information about the source of the quotation.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2">
                                            <p className="example tablePanel3 bodyText_4">
                                                Ursula K Le Guin once said, <q>It is good to have an end to journey
                                                toward; but it is the journey that matters, in the end.</q>
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;cite&gt;Citation Content&lt;/cite&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used for referencing a piece of work such as a book, file, or research
                                                paper. The cite element
                                                can be used to indicate where the citation is from. In HTML5, it is not
                                                recommended that the cite
                                                Tag be used to cite a person's name. It was allowed in HTML4. Browsers
                                                render the content of a cite
                                                Tag in italic.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2">
                                            <p className="example tablePanel3 bodyText_4">
                                                <cite>The Name of the Wind</cite> by Patrick Rothfuss has sold over one
                                                (1) million copies worldwide.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="abbreviationsAndAcronymsSection">
                                <div id="htmlDir_1_8" className="row">
                                    <h3 className="h3Styles">3. Abbreviations &amp; Acronyms</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                                <p className={"bodyText_2"}>
                                                    <strong>&lt;abbr&gt;abbr Tag&lt;/abbr&gt;</strong>
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    Used for abbreviations or acronyms.
                                                    A <strong>title</strong> attribute on the opening tag is used
                                                    to specify the full term.
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    HTML5 deprecated the HTML4 &lt;acronym&gt; Tag: Use &lt;abbr&gt;
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2">
                                                <p className="example tablePanel3 bodyText_4">
                                                    <abbr title="Professor">Prof</abbr> Sprout belongs to Hufflepuff.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="definitionsSection">
                                <div id="htmlDir_1_9" className="row">
                                    <h3 className="h3Styles">4. Definitions</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="row col-lg-12 col-sm-12">
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                            >
                                                <p className={"bodyText_2"}>
                                                    <strong>&lt;dfn&gt;Definition Content&lt;/dfn&gt;</strong>
                                                </p>
                                                <p className={"bodyText_3 text-start"}>
                                                    Used to indicate the defining instance of a new term on a webpage.
                                                </p>
                                            </div>
                                            <div
                                                className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2">
                                                <p className="example tablePanel3 bodyText_4">
                                                    A <dfn>black hole</dfn> is a region of space from which nothing, not
                                                    even light, can escape.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="addressSection">
                                <div id="htmlDir_1_10" className="row">
                                    <h3 className="h3Styles">5. Address</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1">
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;address&gt;Address Details&lt;/address&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Specifically used to contain contact details for the author of the page.
                                                It can contain a physical
                                                address, phone number, or email address. Browsers often display the
                                                content of the &lt;address&gt;
                                                Tag in italic.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2 bodyText_4"
                                        >
                                            <address>
                                                <div className="example tablePanel3">
                                                    <p className="example tablePanel3"><a
                                                        href="mailto:dkgreco@thetroveofgems.tech">dkgreco@thetroveofgems.tech</a>
                                                    </p>
                                                    <p className="example tablePanel3">Chandler, AZ USA</p>
                                                </div>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrStyle"/>
                            <div id="contentChangesSection">
                                <div id="htmlDir_1_11" className="row">
                                    <h3 className="h3Styles">6. Content Changes</h3>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                        >
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;ins&gt;ins Tag&lt;/ins&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used for showing content that has been inserted into a document. Usually
                                                formatted with an underline.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                        >
                                            <p className="example tablePanel3 bodyText_4">
                                                It was the <del>worst</del>
                                                <ins>best</ins>
                                                idea I ever had.
                                            </p>
                                        </div>

                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                        >
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;del&gt;del Tag&lt;/del&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used for showing content that has been deleted from a document. Usually
                                                formatted with strikethrough.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2 bodyText_4"
                                        >
                                            <p className="example tablePanel3">
                                                It was the <del>worst</del>
                                                <ins>best</ins>
                                                idea I ever had.
                                            </p>
                                        </div>

                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel1"
                                        >
                                            <p className={"bodyText_2"}>
                                                <strong>&lt;s&gt;s Tag&lt;/s&gt;</strong>
                                            </p>
                                            <p className={"bodyText_3 text-start"}>
                                                Used to indicate that something is no longer accurate or relevant (but
                                                should also not be deleted from
                                                the document). Usually formatted with strikethrough. Older versions of
                                                HTML have the &lt;u&gt; Tag,
                                                but is being phased out.
                                            </p>
                                        </div>
                                        <div
                                            className="col-lg-6 col-sm-12 p-3 text-center align-content-center tablePanel2"
                                        >
                                            <p className="example tablePanel3 bodyText_4">
                                                Laptop Computer:<br/>
                                                <s>Was $995</s><br/>
                                                Now only $375
                                            </p>
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