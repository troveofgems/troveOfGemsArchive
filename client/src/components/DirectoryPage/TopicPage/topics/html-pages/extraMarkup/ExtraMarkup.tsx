import "./ExtraMarkup.scss";
import {PElement} from "../../../../../shared/HTML_Elements/PElement/PElement";
import {MainPageHeader} from "../../../../../shared/PageSections/MainPageHeader/MainPageHeader";
import {PageIntroduction} from "../../../../../shared/PageSections/PageIntroduction/PageIntroduction";
import {SectionPageHeader} from "../../../../../shared/PageSections/SectionPageHeader/SectionPageHeader";
import {H3Sectional} from "../../../../../shared/PageSections/H3Sectional/H3Sectional";
import {PreElement} from "../../../../../shared/HTML_Elements/PreElement/PreElement";

import CherimoyaLogoImg from "../../../../../../assets/images/cherimoyaLogo.png";

export function SideNavigationData() {
    return {
        directory: "html-extraMarkup",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML5 Flash, Video, & Audio",
            links: [
                {
                    listOrder: 0,
                    text: "1. The Evolution of HTML",
                    url: "#htmlDir_9_1"
                },
                {
                    listOrder: 1,
                    text: "2. More About DOCTYPE Declarations",
                    url: "#htmlDir_9_2"
                },
                {
                    listOrder: 2,
                    text: "3. Comments In HTML",
                    url: "#htmlDir_9_3"
                },
                {
                    listOrder: 3,
                    text: "4. Global Attributes",
                    url: "#htmlDir_9_4"
                },
                {
                    listOrder: 4,
                    text: "5. Block vs Inline Elements & Grouping",
                    url: "#htmlDir_9_5"
                },
                {
                    listOrder: 5,
                    text: "6. IFrames",
                    url: "#htmlDir_9_6"
                },
                {
                    listOrder: 6,
                    text: "7. The Meta Tag",
                    url: "#htmlDir_9_7"
                },
            ]
        }
    };
}

export default function ExtraMarkup() {
    const
        pageTitle = "HTML/5 Extra Markup",
        pageIntroduction = (
            <>
                <h5 className={"mt-3"}>
                    <em>
                        Since the web was first created, there have been several different versions of HTML.
                    </em>
                </h5>
                {PElement(
                    <>
                        Each new version has been designed to be an improvement on the last (with new elements/tags and
                        attributes added, while older code pruned).
                    </>
                )}
                {PElement(
                    <>
                        There have also been several versions of each browser used to view web pages, each of which implements
                        new code. Not all web users, however, have the latest browsers installed on their computers, which means
                        not all the latest features or markup may be rendered correctly or appropriately.
                    </>
                )}
            </>
        );

    return (<>
        <div className="container-fluid pageContent">
            <div className="row col-lg-12 col-sm-12 rowContainer">
                <div className="col-lg-3 col-sm-12 menuTogglerContainer">
                    <div className="col-lg-12">
                        <div id="menuToggler">
                            <button className="btn expandMenuBtn" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvas" role="button">
                                Menu <span className="material-symbols-outlined">subdirectory_arrow_right</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 topicContents">
                    {MainPageHeader(pageTitle)}
                    {PageIntroduction(pageIntroduction)}
                </div>

                <div className="col-lg-3"></div>
                <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                    <div id="htmlDir_9_1">
                        {SectionPageHeader("The Evolution Of HTML", "")}
                        <div id="evolutionOfHTML">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <h3>
                                        HTML4 - <em>released 1997</em>
                                    </h3>
                                    <p className="bodyText_3">
                                        Except for a few elements added in HTML5, the elements used on these pages have
                                        been available
                                        to HTML4.
                                    </p>
                                    <p className="bodyText_3">
                                        Although HTML4 had some presentational elements to control the appearance of
                                        pages, authors are not
                                        recommended to use them any more. Examples include
                                        the &lt;center&gt;, &lt;font&gt;, &lt;strike&gt;,
                                        et al. elements. All of these elements should be deprecated in favor of using
                                        CSS to control the
                                        page presentation.
                                    </p>
                                    <hr/>
                                    <h3>
                                        XHTML 1.0 - <em>released 2000</em>
                                    </h3>
                                    <p className="bodyText_3">
                                        In 1998, a language called <strong>XML</strong> was published. Its purpose was
                                        to allow people to
                                        write new markup languages. Since HTML was the most widely used markup language
                                        around, it was decided
                                        that HTML4 should be reformulated to follow the rules of XML and it was thus
                                        renamed XHTML. This meant
                                        authors had to follow new, more strict rules about writing markup, for example:
                                    </p>
                                    <ul className={"introductionList__outerList"}>
                                        <li className={"pb-3 bulletItem"}>
                                            Every element or tag needed a closing tag: Exceptions were empty tags.
                                        </li>
                                        <li className={"pb-3 bulletItem"}>
                                            Attribute names had to be in lowercase
                                        </li>
                                        <li className={"pb-3 bulletItem"}>
                                            All attributes required a value, and all values were required to be placed
                                            in double quotes
                                        </li>
                                        <li className={"pb-3 bulletItem"}>
                                            Deprecated elements or tags were to be pruned from active code
                                        </li>
                                        <li className={"pb-3 bulletItem"}>
                                            Every element or tag that was opened inside another element or tag should be
                                            closed inside the same
                                            element
                                        </li>
                                    </ul>
                                    <p className="bodyText_3">
                                        I have tried my best to follow the above XML rules across all of this site's
                                        pages.
                                    </p>
                                    <p className="bodyText_3">
                                        One of the key benefits of these changes was that XHTML works seamlessly with
                                        other programs that are
                                        written to create and process XML documents.
                                    </p>
                                    <p className="bodyText_3">
                                        It could also be used with other data formats such as Scalable Vector Graphics
                                        (SVGs) - a graphical language
                                        written in XML, MathML (used to mark up mathematical formulae), and CML (used to
                                        mark up chemical
                                        formulae).
                                    </p>
                                    <p className="bodyText_3">
                                        In order to help web page authors move to the new syntax, two (2) main flavors
                                        of XHTML1.0 were created:
                                    </p>
                                    <ol className={"introductionList__outerList"}>
                                        <li className={"pb-3 bulletItem"}>
                                            Strict XHTML 1.0
                                            <ul className={"introductionList__innerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    Authors had to follow the rules to the letter.
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={"pb-3 bulletItem"}>
                                            Transitional XHTML 1.0
                                            <ul className={"introductionList__innerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    Authors could still use presentational elements (such as center or
                                                    font). The transitional version
                                                    of XHTML was created because it allowed authors to continue to
                                                    follow older practices (with a less
                                                    strict syntax) and use some of the elements and attributes that were
                                                    planned for removal in future
                                                    versions of HTML.
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={"pb-3 bulletItem"}>
                                            XHTML 1.0 Frameset
                                            <ul className={"introductionList__innerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    Worth mentioning, this was a third version of XHTML 1.0, which
                                                    allowed authors to partition a
                                                    browser window into several "frames", each which would hold a
                                                    different HTML page. These days
                                                    frames are very rarely used and are actively being phased out.
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <hr/>
                                    <h3>
                                        HTML 5 - <em>Work In Progress?</em>
                                    </h3>
                                    <ul className={"introductionList__outerList"}>
                                        <li className={"pb-3 bulletItem"}>
                                            In HTML5, authors do not need to close all tags, and new elements and
                                            attributes have been introduced.
                                            I'm not sure if the HTML5 specification has been completed as of today.
                                            Browsers have been making updates
                                            to support HTML5 but not all features are available across all browsers.
                                            Despite that, it should be a
                                            safe bet to take advantage of many of the new HTML5 features offered.
                                            Everything should be tested,
                                            but there is no reason not to make the move towards HTML5. Some extra
                                            features may not be visible to users
                                            on outdated browsers, but they should still be able to view most of a site's
                                            pages.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>
                <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                    <div id="htmlDir_9_2">
                        {SectionPageHeader("More About DOCTYPE Declarations", "")}
                        <div id="doctypeDeclarationsSection">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <p className="bodyText_3">
                                        Because there have been several versions of HTML, each web page should begin
                                        with a DOCTYPE declaration
                                        to tell a browser which version of HTML the page is using (although browsers
                                        usually display the page even
                                        if it is not included).
                                    </p>
                                    <p className="bodyText_3">
                                        Proper DOCTYPE Usage is also important to the browser to appropriately render a
                                        page correctly.
                                    </p>
                                    <p className="bodyText_3">
                                        Because XHMTL was written in XML, you will sometimes see pages that use XHTML
                                        strict DOCTYPE start
                                        with the optional XML declaration. Where-ever this is used, it should be the
                                        first thing in the document.
                                        There must be nothing before it, not even a whitespace.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <ul className="nav nav-tabs" id="doctypesExamplesTabber" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="html5-tab" data-bs-toggle="tab"
                                                data-bs-target="#html5-tab-pane" type="button" role="tab"
                                                aria-controls="html5-tab-pane" aria-selected="true">HTML5
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="html4-tab" data-bs-toggle="tab"
                                                data-bs-target="#html4-tab-pane" type="button" role="tab"
                                                aria-controls="html4-tab-pane" aria-selected="false">HTML4
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="txhtml1-tab" data-bs-toggle="tab"
                                                data-bs-target="#txhtml1-tab-pane" type="button" role="tab"
                                                aria-controls="txhtml1-tab-pane" aria-selected="false">Transitional
                                            XHTML 1.0
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="sxhtml1-tab" data-bs-toggle="tab"
                                                data-bs-target="#sxhtml1-tab-pane" type="button" role="tab"
                                                aria-controls="sxhtml1-tab-pane" aria-selected="false">Strict XHTML 1.0
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="xml-tab" data-bs-toggle="tab"
                                                data-bs-target="#xml-tab-pane" type="button" role="tab"
                                                aria-controls="#xml-tab-pane" aria-selected="false">XML
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="doctypesExamplesTabberContent">
                                    <div className="tab-pane fade show active" id="html5-tab-pane" role="tabpanel"
                                         aria-labelledby="html5-tab" tabIndex={0}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h6 className="mt-3"><em className="text-decoration-underline">Code</em>
                                                </h6>
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;!DOCTYPE html&gt;</div>
                                                </>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="html4-tab-pane" role="tabpanel"
                                         aria-labelledby="html4-tab" tabIndex={1}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h6 className="mt-3"><em className="text-decoration-underline">Code</em>
                                                </h6>
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;!DOCTYPE html PUBLIC</div>
                                                    <div className={"preStyleSet"}>  "-//SOMESERVER//DTD HTML 4.01 Transitional//EN"</div>
                                                    <div className={"preStyleSet"}>  "http://www.w3.org/TR/html4/loose.dtd"</div>
                                                    <div className={"preStyleSet"}>&gt;</div>
                                                </>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="txhtml1-tab-pane" role="tabpanel"
                                         aria-labelledby="txhtml1-tab" tabIndex={2}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h6 className="mt-3"><em className="text-decoration-underline">Code</em>
                                                </h6>
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;!DOCTYPE html PUBLIC</div>
                                                    <div className={"preStyleSet"}>  "-//SOMESERVER//DTD XHTML 1.0 Transitional//EN"</div>
                                                    <div className={"preStyleSet"}>  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"</div>
                                                    <div className={"preStyleSet"}>&gt;</div>
                                                </>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="sxhtml1-tab-pane" role="tabpanel"
                                         aria-labelledby="sxhtml1-tab" tabIndex={3}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h6 className="mt-3"><em className="text-decoration-underline">Code</em>
                                                </h6>
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;!DOCTYPE html PUBLIC</div>
                                                    <div className={"preStyleSet"}>  "-//SOMESERVER//DTD XHTML 1.0 Strict//EN"</div>
                                                    <div className={"preStyleSet"}>  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"</div>
                                                    <div className={"preStyleSet"}>&gt;</div>
                                                </>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="xml-tab-pane" role="tabpanel"
                                         aria-labelledby="xml-tab" tabIndex={4}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h6 className="mt-3"><em className="text-decoration-underline">Code</em>
                                                </h6>
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;?xml version="1.0" ?&gt;</div>
                                                </>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>
                <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                    <div id="htmlDir_9_3">
                        {SectionPageHeader("Comments In HTML", "Notating HTML Code")}
                        <div id="commentsInHTML">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <h5>Comments are created with the
                                        Syntax: <strong>&lt;!&#45;&#45; COMMENT &#45;&#45;&gt;</strong></h5>
                                    <p className="bodyText_3">
                                        Comments are not visible in the user's browser. It is a good idea to comment
                                        code because no matter
                                        how familiar you are with the page at the time of writing it, when you come back
                                        to it later (or if
                                        someone else modifies or looks at the code), comments will make it much easier
                                        to understand.
                                    </p>
                                    <p className="bodyText_3">
                                        Although comments are not visible to users in the main browser window, they can
                                        be viewed by anyone
                                        looking at the source code behind the page.
                                    </p>
                                    <p className="bodyText_3">
                                        It's common to see comments on long pages that separate the start and end of
                                        sections contained within
                                        the page.
                                    </p>
                                    <p className="bodyText_3">
                                        Comments can also be used to remove content from the browser window.
                                    </p>
                                </div>
                                <div className="row col-sm-12 col-lg-12">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="example p-3 tablePanel2">
                                            <h6><em className="text-decoration-underline">Implementation</em></h6>
                                            <div id="commentExample">
                                                {/*<!-- Start Of Introduction -->*/}
                                                <h1>Current Tours</h1>
                                                <h2>TroveOfGems Excursions</h2>
                                                {/*<!--End of Introduction -->*/}
                                                {/*<!-- Start Of Main Text -->*/}
                                                <p>
                                                    Vietnam is a country of contrasts with a wonderful mix of natural
                                                    gems and vibrant urban
                                                    jungles. Experience city life, where thousands of motorbikes cross
                                                    the roads and bustling
                                                    street markets are full of locals bent over a steaming bowl of pho.
                                                    Then, explore the
                                                    breathtaking scenery as you make your way through winding mountain
                                                    passes, rising limestone
                                                    karsts, and verdant rice paddies in beautiful shades of green.
                                                    Combine all this with a rich
                                                    history and incredible street food, and you have a must-visit
                                                    destination! Here are all the
                                                    best things to do in Vietnam.
                                                </p>
                                                {/*<!--End Of Main Text -->*/}
                                                {/*<!-- <a href="mailto:dkgreco@troveofgems.tech">Contact-->*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="example p-3 tablePanel2">
                                            {PreElement(<>
                                                <div className={"preStyleSet"}>&lt;div id="commentExample"&gt;</div>
                                                <div className={"preStyleSet"}>    &lt;!-- Start Of Introduction --&gt;</div>
                                                <div className={"preStyleSet"}>    &lt;h1&gt;Current Tours&lt;/h1&gt;</div>
                                                <div className={"preStyleSet"}>    &lt;h2&gt;TroveOfGems Excursions&lt;/h2&gt;</div>
                                                <div className={"preStyleSet"}>    &lt;!-- End of Introduction --&gt;</div>
                                                <div className={"preStyleSet"}>    &lt;!-- Start Of Main Text --&gt;</div>
                                                <div className={"preStyleSet"}>    &lt;p&gt;</div>
                                                <div className={"preStyleSet"}>       Vietnam is a country of contrasts with a wonderful mix of natural gems and vibrant urban
                                                    jungles. Experience city life, where thousands of motorbikes cross the roads and bustling
                                                    street markets are full of locals bent over a steaming bowl of pho. Then, explore the
                                                    breathtaking scenery as you make your way through winding mountain passes, rising limestone
                                                    karsts, and verdant rice paddies in beautiful shades of green. Combine all this with a rich
                                                    history and incredible street food, and you have a must-visit destination! Here are all the
                                                    best things to do in Vietnam.</div>
                                                <div className={"preStyleSet"}>    &lt;/p&gt;</div>
                                                <div className={"preStyleSet"}>&lt;!-- End Of Main Text --&gt;</div>
                                                <div className={"preStyleSet"}>&lt;!-- Disable Contact - Moving Servers - &lt;a href="mailto:dkgreco@troveofgems.tech"&gt;Contact--&gt;</div>
                                                <div className={"preStyleSet"}>&lt;/div&gt;</div>
                                            </>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>
                <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                    <div id="htmlDir_9_4">
                        {SectionPageHeader("Global Attributes", "Attributes that may be used on any HTML Element")}
                        <div id="globalAttributes">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <ul className="nav nav-tabs" id="globalAttributesExamplesTabber" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="globalId-tab" data-bs-toggle="tab"
                                                    data-bs-target="#globalId-tab-pane" type="button" role="tab"
                                                    aria-controls="globalId-tab-pane" aria-selected="true">id
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="globalClass-tab" data-bs-toggle="tab"
                                                    data-bs-target="#globalClass-tab-pane" type="button" role="tab"
                                                    aria-controls="globalClass-tab-pane" aria-selected="false">class
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="globalAttributesExamplesTabberContent">
                                        <div className="tab-pane fade show active" id="globalId-tab-pane"
                                             role="tabpanel" aria-labelledby="globalId-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <h3 className="w-100 text-center">The <strong>id</strong> Attribute
                                                    </h3>
                                                    <p className="bodyText_3">
                                                        Every HTML element can carry the id attribute. It is used to
                                                        uniquely identify that element from
                                                        other elements on the page.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Its value should start with a letter or underscore (not a number
                                                        or any other character). It is
                                                        important that no two elements on the same page have the same
                                                        value for their <strong>id</strong>
                                                        attribute.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        The <strong>id</strong> attribute is used for styling, allowing
                                                        the DOM to hook into the element
                                                        to make changes, etc.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6 setBookCoverBorder">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <p className="bodyText_3">
                                                        Water and air. So very commonplace are these substances, they
                                                        hardly attract attention -
                                                        and yet they vouchsafe our very existence.
                                                    </p>
                                                    <p id="pullquote" className="bodyText_3">
                                                        Every time I view the sea I feel a calming sense of security, as
                                                        if visiting my ancestral
                                                        home: I embark on a voyage of seeing.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Mystery of mysteries, water and air are right there before us in
                                                        the sea.
                                                    </p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;p&gt;</div>
                                                        <div className={"preStyleSet"}>  Water and air. So very commonplace are these substances, they hardly attract attention - and yet they vouchsafe our very existence.</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;p id="pullquote"&gt;</div>
                                                        <div className={"preStyleSet"}>  Every time I view the sea I feel a calming sense of security, as if visiting my ancestral home: I embark on a voyage of seeing.</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;p&gt;</div>
                                                        <div className={"preStyleSet"}>  Mystery of mysteries, water and  air are right there before us in the sea.</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="globalClass-tab-pane" role="tabpanel"
                                             aria-labelledby="globalClass-tab" tabIndex={1}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <h3 className="text-center">The <strong>class</strong> Attribute
                                                    </h3>
                                                    <p className="bodyText_3">
                                                        Every HTML element can also carry a class attribute. Rather than
                                                        uniquely identifying
                                                        one element within a document, the class attribute allows the
                                                        identification of several elements
                                                        as being different from the other elements on the page.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        The <strong>class</strong> attribute on any element can share
                                                        the same value. Class attribute
                                                        values are separated by a space.
                                                    </p>
                                                </div>
                                                <div className="col-lg-5 setGreyRightBorder">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <p className="bodyText_3 important">
                                                        For a one-year period from November 2010, the Marugame
                                                        Geniciro-Inokumo Museum of Contemporary
                                                        Art (MIMOCA) hosted a cycle of four Hiroshi Sugimoto
                                                        exhibitions.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Each exhibition showcased works by the artist thematically
                                                        contextualized under the headings
                                                        "Science", "Architecture", "History", and "Religion" to present
                                                        a comprehensive
                                                        panorama of the artist's oeuvre.
                                                    </p>
                                                    <p className="bodyText_3 important admittance">
                                                        Hours: 1000-1800<br/> No Admittance After 1730
                                                    </p>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;p class="important"&gt;</div>
                                                        <div className={"preStyleSet"}>  For a one-year period from November 2010, the Marugame Geniciro-Inokumo Museum of Contemporary Art (MIMOCA) hosted a cycle of four Hiroshi Sugimoto exhibitions.</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;p&gt;</div>
                                                        <div className={"preStyleSet"}>  Each exhibition showcased works by the artist thematically contextualized under the headings "Science", "Architecture", "History", and "Religion" to present a comprehensive panorama of the artist's oeuvre.</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;p class="important admittance"&gt;</div>
                                                        <div className={"preStyleSet"}>  Hours: 1000-1800&lt;br/&gt; No Admittance After 1730</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>
                <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                    <div id="htmlDir_9_5">
                        {SectionPageHeader("Block vs Inline Elements & Grouping", " Block, Inline, Div, & Span")}
                        <div id="blockVsInlineAndGroups">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <ul className="nav nav-tabs" id="blockAndInlineExamplesTabber" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="blockElements-tab"
                                                    data-bs-toggle="tab" data-bs-target="#blockElements-tab-pane"
                                                    type="button" role="tab" aria-controls="blockElements-tab-pane"
                                                    aria-selected="true">Block Elements
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="inlineElements-tab" data-bs-toggle="tab"
                                                    data-bs-target="#inlineElements-tab-pane" type="button" role="tab"
                                                    aria-controls="inlineElements-tab-pane" aria-selected="false">Inline
                                                Elements
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="blockDiv-tab" data-bs-toggle="tab"
                                                    data-bs-target="#blockDiv-tab-pane" type="button" role="tab"
                                                    aria-controls="blockDiv-tab-pane" aria-selected="false">Div
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="inlineSpan-tab" data-bs-toggle="tab"
                                                    data-bs-target="#inlineSpan-tab-pane" type="button" role="tab"
                                                    aria-controls="inlineSpan-tab-pane" aria-selected="false">Span
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="blockVsInlineExamplesTabberContent">
                                        <div className="tab-pane fade show active" id="blockElements-tab-pane"
                                             role="tabpanel" aria-labelledby="blockElements-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center mt-3"}>
                                                        {H3Sectional("Block Elements")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        Some elements will always appear to start on a new line in the
                                                        browser window. These are known
                                                        as block level elements.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Examples of block elements include: h1, p, ul, and li.
                                                    </p>
                                                </div>
                                                <div className="col-lg-5 setGreyRightBorder">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <h1>Hiroshi Sugimoto</h1>
                                                    <p className="bodyText_3">The dates for the ORIGIN OF ART
                                                        Exhibition are as follows:</p>
                                                    <ul>
                                                        <li>Science: 21 Nov - 20 Feb 2025</li>
                                                        <li>Architecture: 6 Mar - 15 May 2025</li>
                                                        <li>History: 29 May - 21 Aug 2025</li>
                                                        <li>Religion: 28 Aug - 6 Nov 2025</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;h1&gt;Hiroshi Sugimoto&lt;/h1&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;p&gt;The dates for the ORIGIN OF ART Exhibition are as follows:&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;ul&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;li&gt;Science: 21 Nov - 20 Feb 2025&lt;/li&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;li&gt;Architecture: 6 Mar - 15 May 2025&lt;/li&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;li&gt;History: 29 May - 21 Aug 2025&lt;/li&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;li&gt;Religion: 28 Aug - 6 Nov 2025&lt;/li&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;/ul&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="inlineElements-tab-pane" role="tabpanel"
                                             aria-labelledby="inlineElements-tab" tabIndex={1}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center mt-3"}>
                                                        {H3Sectional("Inline Elements")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        Some elements will always appear to continue on the same line as
                                                        their neighboring elements.
                                                        These are known as inline elements.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Examples of inline elements include: a, b, em, and img
                                                    </p>
                                                </div>
                                                <div className="col-lg-5 setGreyRightBorder">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <p className="bodyText_3">
                                                        Timed to a single revolution of the planet around the sun at a
                                                        23.4-degree tilt that plays out of
                                                        rhythm of the seasons, this <em>ORIGINS OF ART</em> cycle is
                                                        organized around four themes: <b>science, architecture, history</b> and <em>religion</em>.
                                                    </p>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;p&gt;</div>
                                                        <div className={"preStyleSet"}>    Timed to a single revolution of the planet around the sun at a 23.4-degree tilt that plays out of rhythm of the seasons, this</div>
                                                        <div className={"preStyleSet"}>     &lt;em&gt;ORIGINS OF ART&lt;/em&gt; cycle is organized around four themes:</div>
                                                        <div className={"preStyleSet"}>     &lt;b&gt;science, architecture, history&lt;/b&gt;</div>
                                                        <div className={"preStyleSet"}>     and &lt;em&gt;religion&lt;/em&gt;.</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="blockDiv-tab-pane" role="tabpanel"
                                             aria-labelledby="blockDiv-tab" tabIndex={1}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center mt-3"}>
                                                        {H3Sectional("The Div Tag")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        The &lt;div&gt; Tag allows a developer to group a set of
                                                        elements together in a single block box.
                                                        Divs can represent full headers or sections of page content like
                                                        customer reviews.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        In a browser, the contents of a &lt;div&gt; Tag will start on a
                                                        new line, but other than this, will
                                                        make no difference to the presentation.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Using an id or class attribute on the &lt;div&gt; Tag means that
                                                        CSS style rules can be applied
                                                        to indicate how much space the div element should occupy on the
                                                        screen and change the appearance of
                                                        all the elements contained within it.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Divs also make it easier to follow code, especially if the divs
                                                        have been given names that mirror
                                                        the content contained within the div on the id or class
                                                        attributes.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Since there may be several other elements inside
                                                        a &lt;div&gt; Tag, it can be helpful to add a comment
                                                        after the closing &lt;div&gt; Tag.
                                                    </p>
                                                </div>
                                                <div className="col-lg-5 setGreyRightBorder">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <div id="header">
                                                        <img src={`${CherimoyaLogoImg}`}
                                                             alt="Cherimoya Logo"/>
                                                        <ul>
                                                            <li>
                                                                <a href="https://thetroveofgems.tech/">Trove Of
                                                                    Gems Homepage</a>
                                                            </li>
                                                            <li>
                                                                <a href="https://atease.io/">At-ease Traveler
                                                                    Homepage</a>
                                                            </li>
                                                            <li>
                                                                <a href="https://host.atease.io/">At-ease Host
                                                                    Homepage</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;div id="header"&gt;</div>
                                                        <div className={"preStyleSet"}>    &lt;img src="../img/cherimoyaLogo.png" alt="Cherimoya Logo" /&gt;</div>
                                                        <div className={"preStyleSet"}>    &lt;ul&gt;</div>
                                                        <div className={"preStyleSet"}>      &lt;li&gt;</div>
                                                        <div className={"preStyleSet"}>        &lt;a href="https://thegemtrove.herokuapp.com/"&gt;Trove Of Gems Homepage&lt;/a&gt;</div>
                                                        <div className={"preStyleSet"}>      &lt;/li&gt;</div>
                                                        <div className={"preStyleSet"}>      &lt;li&gt;</div>
                                                        <div className={"preStyleSet"}>        &lt;a href="https://atease.io/"&gt;At-ease Traveler Homepage&lt;/a&gt;</div>
                                                        <div className={"preStyleSet"}>      &lt;/li&gt;</div>
                                                        <div className={"preStyleSet"}>      &lt;li&gt;</div>
                                                        <div className={"preStyleSet"}>        &lt;a href="https://host.atease.io/"&gt;At-ease Host Homepage&lt;/a&gt;</div>
                                                        <div className={"preStyleSet"}>      &lt;/li&gt;</div>
                                                        <div className={"preStyleSet"}>    &lt;/ul&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;/div&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="inlineSpan-tab-pane" role="tabpanel"
                                             aria-labelledby="inlineSpan-tab" tabIndex={1}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center mt-3"}>
                                                        {H3Sectional("The Span Tag")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        The &lt;span&gt; Tag acts like an inline equivalent of
                                                        the &lt;div&gt; Tag.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Spans are used to:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Contain a section of text where there is no other suitable
                                                            element to differentiate it from its
                                                            surrounding text.
                                                        </li>
                                                        <li>
                                                            Contain a number of inline elements
                                                        </li>
                                                    </ul>
                                                    <p className="bodyText_3">
                                                        The most common use of spans is to control the presentation of
                                                        the content of the content using CSS.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Proper ids and class values should be used with spans:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            To explain the purpose of the span element.
                                                        </li>
                                                        <li>
                                                            So that CSS styles can be applied to elements that have
                                                            specific values for these attributes.
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-5 setGreyRightBorder">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <p className="bodyText_3">
                                                        Ursula K. Le Guin <span id="natalDesc">(born October 21, 1929 in Berkeley CA USA - died January 22, 2018 in Portland OR USA) </span>
                                                        was an American writer best known for tales of science fiction
                                                        and fantasy
                                                        imbued with concern for character development and language.
                                                    </p>
                                                </div>
                                                <div className="col-lg-7">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;p&gt;</div>
                                                        <div className={"preStyleSet"}>    Ursula K. Le Guin &lt;span id="natalDesc"&gt;</div>
                                                        <div className={"preStyleSet"}>        (born October 21, 1929 in Berkeley CA USA - died January 22, 2018 in Portland OR USA)</div>
                                                        <div className={"preStyleSet"}>    &lt;/span&gt;</div>
                                                        <div className={"preStyleSet"}>    was an American writer best known for tales of science fiction and fantasy imbued with concern for character development and language.</div>
                                                        <div className={"preStyleSet"}>&lt;/p&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>
                <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                    <div id="htmlDir_9_6">
                        {SectionPageHeader("IFrames", "Implementing IFrames")}
                        <div id="iframeSection">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <p className="bodyText_3">
                                        An iframe is like a little window that has been cut into a webpage - and in that
                                        window is another page.
                                        The term <em>iframe</em> is an abbreviation of "inline-frame".
                                    </p>
                                    <p className="bodyText_3">
                                        A common usage of iframes is to embed a map into a page. The content of the
                                        iframe can be any html
                                        page (either on the same server or anywhere else on the web).
                                    </p>
                                    <p className="bodyText_3">
                                        An iframe is created by specifying opening and closing &lt;iframe&gt; Tags.
                                    </p>
                                    <p className="bodyText_3">
                                        The following attributes exist for managing iframes:
                                    </p>
                                    <p className="d-inline-flex gap-1 flex-wrap">
                                        <button className="btn btn-primary exploreMore" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseIFrameSrc"
                                                aria-expanded="false" aria-controls="collapseIFrameSrc">
                                            src
                                        </button>
                                        <button className="btn btn-primary exploreMore" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseIFrameHeight"
                                                aria-expanded="false" aria-controls="collapseIFrameHeight">
                                            height
                                        </button>
                                        <button className="btn btn-primary exploreMore" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseIFrameWidth"
                                                aria-expanded="false" aria-controls="collapseIFrameWidth">
                                            width
                                        </button>
                                        <button className="btn btn-primary exploreMore" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseIFrameScrolling"
                                                aria-expanded="false" aria-controls="collapseIFrameScrolling">
                                            scrolling
                                        </button>
                                        <button className="btn btn-primary exploreMore" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseIFrameBorder"
                                                aria-expanded="false" aria-controls="collapseIFrameBorder">
                                            frameborder
                                        </button>
                                        <button className="btn btn-primary exploreMore" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseIFrameSeamless"
                                                aria-expanded="false" aria-controls="collapseIFrameSeamless">
                                            seamless
                                        </button>
                                    </p>
                                    <div className="collapse" id="collapseIFrameSrc">
                                        <div className="card card-body tablePanel2">
                                            <h5>The <strong>src</strong> Attribute</h5>
                                            <p>
                                                The src attribute specifies the URL of the page to show in the frame.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseIFrameHeight">
                                        <div className="card card-body tablePanel2">
                                            <h5>The <strong>height</strong> Attribute</h5>
                                            <p>
                                                The height attribute specifies the height of the iframe in pixels.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseIFrameWidth">
                                        <div className="card card-body tablePanel2">
                                            <h5>The <strong>width</strong> Attribute</h5>
                                            <p>
                                                The width attribute specifies the width of the iframe in pixels.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseIFrameScrolling">
                                        <div className="card card-body tablePanel2">
                                            <h5>The <strong>scrolling</strong> Attribute</h5>
                                            <p>
                                                <span>The scrolling attribute will not be supported in HTML5</span>.
                                                In HTML4 and
                                                XHTML, it indicates whether the iframe should have scrollbars or not.
                                                This is not important if the page
                                                inside the iframe is larger than the space provided to it by the height
                                                and width attributes.
                                                Scrollbars allow the user to move around the frame to see more of the
                                                content. It can take one of
                                                three values: yes (show scrollbars), no (hide scrollbars), and auto
                                                (only show scrollbars if needed).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseIFrameBorder">
                                        <div className="card card-body tablePanel2">
                                            <h5>The <strong>frameborder</strong> Attribute</h5>
                                            <p>
                                                <span>The frameborder attribute will not be supported in HTML5</span>.
                                                In HTML4
                                                and XHTML, it indicates whether the frame should have a border or not. A
                                                value of 0 indicates
                                                that no border should be shown. A value of 1 indicates a border should
                                                be shown.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapseIFrameSeamless">
                                        <div className="card card-body tablePanel2">
                                            <h5>The <strong>seamless</strong> Attribute</h5>
                                            <p>
                                                In HTML5, a new attribute called <em>seamless</em> can be applied to an
                                                iframe where scrollbars are
                                                not desired. The <strong>seamless</strong> attribute does not need a
                                                value, but developers may
                                                give it a value of "seamless". Older browsers do not support
                                                the <strong>seamless</strong>
                                                attribute.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-sm-12 col-lg-12">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="example p-3 tablePanel2">
                                        <h6><em className="text-decoration-underline">Implementation</em></h6>
                                        <iframe
                                            width="525"
                                            height="400"
                                            src="https://en.wikipedia.org/wiki/Myst_(series)#/media/File:D'ni_Letters_Vs_Numerals.svg"
                                            seamless={true}
                                        >
                                        </iframe>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="example p-3 tablePanel2">
                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                        {PreElement(<>
                                            <div className={"preStyleSet"}>&lt;iframe</div>
                                            <div className={"preStyleSet"}>  width="450" height="350"</div>
                                            <div className={"preStyleSet"}>  src="https://en.wikipedia.org/wiki/Myst_(series)#/media/File:D'ni_Letters_Vs_Numerals.svg"</div>
                                            <div className={"preStyleSet"}>  seamless=true</div>
                                            <div className={"preStyleSet"}>/iframe&gt;</div>
                                        </>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3"></div>
                <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                    <div id="htmlDir_9_7">
                        {SectionPageHeader("The Meta Tag", "Utilizing The Meta Tag")}
                        <div id="theMetaTag">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <p className="bodyText_3">
                                        The &lt;meta&gt; Tag lives inside the &lt;head&gt; Tag and contains information
                                        bout that webpage.
                                    </p>
                                    <p className="bodyText_3">
                                        It is not visible to users but fulfills a number of purposes such as telling
                                        search engines about the
                                        page, who created it, and whether it is time sensitive (If the page is time
                                        sensitive, it can be se to
                                        expire).
                                    </p>
                                    <p className="bodyText_3">
                                        The &lt;meta&gt; Tag is an empty element so it does not have a closing tag. It
                                        uses attributes to carry
                                        the information held.
                                    </p>
                                    <p className="bodyText_3">
                                        The most common attributes are the name and content attributes, which tend to be
                                        used together.
                                        These attributes specify properties of the entire page. The value of the name
                                        attribute is the property
                                        that is being set and the value of the content attribute is the value that the
                                        property should hold.
                                    </p>
                                    <p className="bodyText_3">
                                        It is also possible to use the http-equiv and content attributes in pairs.
                                    </p>
                                </div>
                                <div className="row col-sm-12 col-lg-12">
                                    <ul className="nav nav-tabs" id="metaTagExamplesTabber" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="metaDescription-tab"
                                                    data-bs-toggle="tab" data-bs-target="#metaDescription-tab-pane"
                                                    type="button" role="tab" aria-controls="metaDescription-tab-pane"
                                                    aria-selected="true">Description
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="metaKeywords-tab" data-bs-toggle="tab"
                                                    data-bs-target="#metaKeywords-tab-pane" type="button" role="tab"
                                                    aria-controls="metaKeywords-tab-pane" aria-selected="true">Keywords
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="metaRobots-tab" data-bs-toggle="tab"
                                                    data-bs-target="#metaRobots-tab-pane" type="button" role="tab"
                                                    aria-controls="metaRobots-tab-pane" aria-selected="true">Robots
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="metaAuthor-tab" data-bs-toggle="tab"
                                                    data-bs-target="#metaAuthor-tab-pane" type="button" role="tab"
                                                    aria-controls="metaAuthor-tab-pane" aria-selected="true">Author
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="metaPragma-tab" data-bs-toggle="tab"
                                                    data-bs-target="#metaPragma-tab-pane" type="button" role="tab"
                                                    aria-controls="metaPragma-tab-pane" aria-selected="true">Pragma
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="metaExpires-tab" data-bs-toggle="tab"
                                                    data-bs-target="#metaExpires-tab-pane" type="button" role="tab"
                                                    aria-controls="metaExpires-tab-pane" aria-selected="true">Expires
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="metaTagExamplesTabberContent">
                                        <div className="tab-pane fade show active" id="metaDescription-tab-pane"
                                             role="tabpanel" aria-labelledby="metaDescription-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"mt-3"}>
                                                        {H3Sectional("Description")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        This contains a description of the page. The description is
                                                        commonly used by search engines to
                                                        understand what the page is about and should be a maximum of 155
                                                        characters. It is also displayed
                                                        in the search engine results.
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;meta</div>
                                                        <div className={"preStyleSet"}>  name="description"</div>
                                                        <div className={"preStyleSet"}>  content="Meta Content Description Here"</div>
                                                        <div className={"preStyleSet"}>/&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show" id="metaKeywords-tab-pane" role="tabpanel"
                                             aria-labelledby="metaKeywords-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"mt-3"}>
                                                        {H3Sectional("Keywords")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        This contains a list of comma-separated words that user might
                                                        search on to find the page.
                                                        In practice this no longer has any noticeable effect on how
                                                        search engines index a site.
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;meta</div>
                                                        <div className={"preStyleSet"}>  name="keywords"</div>
                                                        <div className={"preStyleSet"}>  content="HTML5, guide, Extra Markup"</div>
                                                        <div className={"preStyleSet"}>/&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show" id="metaRobots-tab-pane" role="tabpanel"
                                             aria-labelledby="metaRobots-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"mt-3"}>
                                                        {H3Sectional("Robots")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        This indicates whether search engines should add this page to
                                                        their search results or not. A value
                                                        of noindex can be used if the page should not be added. A value
                                                        of nofollow can be used if search
                                                        engines should add the page in its results, but not any pages
                                                        that it may link to.
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;meta</div>
                                                        <div className={"preStyleSet"}>  name="robots"</div>
                                                        <div className={"preStyleSet"}>  content="index,follow"</div>
                                                        <div className={"preStyleSet"}>/&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show" id="metaAuthor-tab-pane" role="tabpanel"
                                             aria-labelledby="metaAuthor-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"mt-3"}>
                                                        {H3Sectional("Author")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        This defines the author of a webpage.
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;meta</div>
                                                        <div className={"preStyleSet"}>  name="author"</div>
                                                        <div className={"preStyleSet"}>  content="Dustin K Greco"</div>
                                                        <div className={"preStyleSet"}>/&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show" id="metaPragma-tab-pane" role="tabpanel"
                                             aria-labelledby="metaPragma-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"mt-3"}>
                                                        {H3Sectional("Pragma")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        This prevents the browser from caching the page (That is locally
                                                        storing it to save time downloading
                                                        it on subsequent visits).
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;meta</div>
                                                        <div className={"preStyleSet"}>  name="pragma"</div>
                                                        <div className={"preStyleSet"}>  content="no-cache"</div>
                                                        <div className={"preStyleSet"}>/&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show" id="metaExpires-tab-pane" role="tabpanel"
                                             aria-labelledby="metaExpires-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto">
                                                    <div className={"mt-3"}>
                                                        {H3Sectional("Expires")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        Because browsers often cache the content of a page, the expires
                                                        option can be used to indicate when
                                                        the page should expire (and no longer be cached). The value must
                                                        follow a date format of:
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Fri, 04 Aug 2024 23:59:59 GMT
                                                    </p>
                                                </div>
                                                <div className="col-lg-12">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;meta</div>
                                                        <div className={"preStyleSet"}>  name="expires"</div>
                                                        <div className={"preStyleSet"}>  content="Fri, 04 Aug 2024 23:59:59 GMT"</div>
                                                        <div className={"preStyleSet"}>/&gt;</div>
                                                    </>)}
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
    </>);
}