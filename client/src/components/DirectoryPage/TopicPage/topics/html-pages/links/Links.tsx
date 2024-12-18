import "./Links.scss";

export function SideNavigationData() {
    return {
        directory: "html-links",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML/5 Links",
            links: [
                {
                    listOrder: 0,
                    text: "Linking",
                    url: "#htmlDir_3_0"
                },
                {
                    listOrder: 1,
                    text: "Absolute vs Relative Paths",
                    url: "#htmlDir_3_1"
                },
                {
                    listOrder: 2,
                    text: "Understanding Relative Paths",
                    url: "#htmlDir_3_2"
                },
                {
                    listOrder: 3,
                    text: "Other Link Types & Behavior",
                    url: "#htmlDir_3_3"
                }
            ]
        }
    };
}

export default function Links() {
    return (
        <>
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
                        <h1 className="text-center m-3 h1Styles">HTML/5 Links</h1>
                        <div id="pagePreambles">
                            <p className="pagePreamble_1 bodyText_2">
                                Links are the defining feature of the web because they allow someone to move from one
                                place to another - browsing across pages and accessing content.
                                Here are just a few common link examples:
                            </p>
                            <ul className={"bodyText_3"}>
                                <li>Links going from one website to another</li>
                                <li>Links from one page on a website to another page on the same website</li>
                                <li>Links from one part of a web page to another part of the same page</li>
                                <li>Links that open in a new browser window</li>
                                <li>Links that start up your email program and address a new email to someone</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_3_1" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Linking</h2>
                                <p className={"bodyText_3"}>
                                    Moving Around the Web
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="createALink">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3 text-start">
                                                To create a link, the &lt;a&gt; Tag is used. The content that sits
                                                between the &lt;a&gt; Tag is known as <strong><em>Link Text</em></strong>.
                                            </p>
                                            <p className="bodyText_3 text-start">
                                                Link destinations are specified by using
                                                the <strong>href</strong> attribute.
                                            </p>
                                            <ol className={"createALinkExample bodyText_3 text-start"}>
                                                <li>
                                                    a Tag &lt;a&gt;
                                                    <ul>
                                                        <li className={"bodyText_4"}>
                                                            Used to create linkable text. Users can click on anything
                                                            that appears between the opening and closing
                                                            &lt;a&gt; Tags and will be taken to the page specified in
                                                            the href attr. When a link to a different website
                                                            is created, the value of the href attr will be an absolute
                                                            path to the full web address for the site.
                                                            Browsers show links in blue with an underline by default.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="col-lg-12 mb-4">
                                            <ul className="nav nav-pills mb-3" id="pills-tab-1" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="pills-olListExample1-tab"
                                                            data-bs-toggle="pill" data-bs-target="#pills-olListExample1"
                                                            type="button" role="tab"
                                                            aria-controls="pills-olListExample1"
                                                            aria-selected="true">Example 1
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="pills-olListExample2-tab"
                                                            data-bs-toggle="pill" data-bs-target="#pills-olListExample2"
                                                            type="button" role="tab"
                                                            aria-controls="pills-olListExample2"
                                                            aria-selected="false">Example 2
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content example1-container" id="pills-tabContent-1">
                                                <div className="tab-pane fade show active tablePanel3 p-3"
                                                     id="pills-olListExample1" role="tabpanel"
                                                     aria-labelledby="pills-olListExample1-tab">
                                                    <code>
                                                        &lt;p&gt;Linking to other sites - Absolute URLs&lt;/p&gt;
                                                        &lt;p&gt;&lt;strong&gt;Movie Reviews&lt;/strong&gt;&lt;/p&gt;
                                                            &lt;ul style="margin-top: 0; padding-top: 0;"&gt;
                                                            &lt;li&gt;
                                                            &lt;a
                                                            href="https://www.empireonline.com"&gt;Empire&lt;/a&gt;
                                                            &lt;/li&gt;
                                                            &lt;li&gt;
                                                            &lt;a
                                                            href="https://www.metacritic.com"&gt;Metacritic&lt;/a&gt;
                                                            &lt;/li&gt;
                                                            &lt;li&gt;
                                                            &lt;a href="https://www.rottentomatoes.com"&gt;Rotten
                                                            Tomatoes&lt;/a&gt;
                                                            &lt;/li&gt;
                                                            &lt;li&gt;
                                                            &lt;a href="https://www.variety.com"&gt;Variety&lt;/a&gt;
                                                            &lt;/li&gt;
                                                            &lt;/ul&gt;
                                                    </code>
                                                </div>
                                                <div className="tab-pane fade tablePanel3 p-3" id="pills-olListExample2"
                                                     role="tabpanel" aria-labelledby="pills-olListExample2-tab">
                        <code>
                            &lt;p&gt;Linking to other pages on the same site - Relative URLs&lt;/p&gt;
                            &lt;p&gt;&lt;strong&gt;Site Table Of Contents&lt;/strong&gt;&lt;/p&gt;
                            &lt;ul&gt;
                            &lt;li&gt;
                            &lt;a href="../../../../../index.html"&gt;Landing Page&lt;/a&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                            &lt;a href="../structure/structure.html"&gt;Text&lt;/a&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                            &lt;a href="../text/text.html"&gt;Text&lt;/a&gt;
                            &lt;/li&gt;
                            &lt;li&gt;
                            &lt;a href="../lists/lists.html"&gt;Lists&lt;/a&gt;
                            &lt;/li&gt;
                            &lt;/ul&gt;
                        </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tablePanel2">
                                            <div className="example p-3">
                                                <p className={"bodyText_4 pb-0 mb-0"}>
                                                    Linking to other sites - Absolute URLs
                                                </p>
                                                <p className={"bodyText_5 pb-0 mb-0"}>
                                                    <strong>Movie Reviews</strong>
                                                </p>
                                                <ul className={"bodyText_5"}>
                                                    <li>
                                                        <a href="https://www.empireonline.com">Empire</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.metacritic.com">Metacritic</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.rottentomatoes.com">Rotten Tomatoes</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.variety.com">Variety</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="example p-3">
                                                <p className={"bodyText_4 pb-0 mb-0"}>
                                                    Linking to other pages on the same site - Relative URLs
                                                </p>
                                                <p className={"bodyText_5 pb-0 mb-0"}>
                                                    <strong>Site Table Of Contents</strong>
                                                </p>
                                                <ul className={"bodyText_5"}>
                                                    <li>
                                                        <a href="../../../../../index.html">Landing Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="../../../../../../../../archive/structure.html">Text</a>
                                                    </li>
                                                    <li>
                                                        <a href="../../../../../../../../archive/text.html">Text</a>
                                                    </li>
                                                    <li>
                                                        <a href="../../../../../../../../archive/lists.html">Lists</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_3_2" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Absolute vs Relative Paths</h2>
                                <p className={"bodyText_3"}>
                                    Specifying the Location of Resources
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="absoluteVsRelative">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <p className="text-start bodyText_3">
                                                URL stands for <strong>Uniform Resource Locator</strong>. Every web page has its own URL.
                                                This is the web address that
                                                would normally be typed into the address bar of a browser to visit that
                                                specific page.
                                            </p>
                                            <p className="text-start bodyText_3">
                                                An absolute URL starts with the domain name of the site, and can be
                                                followed by the path to a specific
                                                page. If no page is specified, the site will display the homepage.
                                            </p>
                                            <p className="text-start bodyText_3">
                                                A relative URL can be used when linking to pages within the same site. A
                                                domain name is not needed.
                                                Relative URLs are also helpful when building a site on the computer
                                                because links can be created between
                                                pages without having to set up a domain name or hosting.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tablePanel2">
                                            <div className="example p-3">
                                                <p className={"bodyText_3 pb-0 mb-0"}>Absolute URLs</p>
                                                <ul className={"bodyText_4"}>
                                                    <li>https://www.empireonline.com</li>
                                                    <li>https://www.metacritic.com</li>
                                                    <li>https://www.rottentomatoes.com</li>
                                                    <li>https://www.variety.com</li>
                                                </ul>
                                            </div>
                                            <div className="example p-3">
                                                <p className={"bodyText_3 pb-0 mb-0"}>Relative URLs</p>
                                                <ul className={"bodyText_4"}>
                                                    <li>"../../index.html"</li>
                                                    <li>"../structure/structure.html"</li>
                                                    <li>"../text/text.html"</li>
                                                    <li>"../lists/lists.html"</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_3_3" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Relative Path Relationships</h2>
                                <p className={"bodyText_3"}>
                                    Understanding Relative Paths
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="relativePathRelationships">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="text-start bodyText_3">
                                                Relative URLs can be used when linking to pages within the same website.
                                                They provide a shorthand way of
                                                telling the browser where to find specific files. If all the files in
                                                your site are in one folder, the
                                                filename for that page is simply referenced. If a site is organized into
                                                separate folders or directories,
                                                the browser will need to be told how to reach those pages <em>from the
                                                current page</em>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-12">
                                        <table>
                                            <tr>
                                                <th>Relative Link Type</th>
                                                <th>Examples</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="tableRowInfo">Same Folder</p>
                                                    <p className="relativePathSubText">
                                                        To link to a file in the same folder, just use the filename.
                                                    </p>
                                                </td>
                                                <td className="example-w50">
                                                    &lt;a <strong>href="reviews.html"</strong>&gt;Reviews&lt;/a&gt;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="tableRowInfo">Child Folder</p>
                                                    <p className="relativePathSubText">
                                                        For a child folder, use the name of the child folder, followed
                                                        by a forward slash, then the
                                                        filename.
                                                    </p>
                                                </td>
                                                <td className="example-w50">
                                                    &lt;a <strong>href="music/listings.html"</strong>&gt;Listings&lt;/a&gt;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="tableRowInfo">Grandchild Folder</p>
                                                    <p className="relativePathSubText">
                                                        Use the name of the child folder, followed by a forward slash,
                                                        then the name of the grandchild
                                                        folder, followed by another forward slash, then the filename.
                                                    </p>
                                                </td>
                                                <td className="example-w50">
                                                    &lt;a <strong>href="movies/dvd/reviews.html"</strong>&gt;DVD
                                                    Reviews&lt;/a&gt;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="tableRowInfo">Parent Folder</p>
                                                    <p className="relativePathSubText">
                                                        Use ../ to indicate the folder above the current one, then
                                                        follow it with the filename.
                                                    </p>
                                                </td>
                                                <td className="example-w50">
                                                    &lt;a <strong>href="../index.html"</strong>&gt;Home&lt;/a&gt;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="tableRowInfo">Grandparent Folder</p>
                                                    <p className="relativePathSubText">
                                                        <p className="relativePathSubText">
                                                            Repeat ../ as needed to indicate going up X folder(s) above
                                                            the current one,
                                                            then follow it with the filename.
                                                        </p>
                                                    </p>
                                                </td>
                                                <td className="example-w50">
                                                    &lt;a <strong>href="../../index.html"</strong>&gt;Home&lt;/a&gt;
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_3_4" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Other Link Types &amp; Behavior</h2>
                                <p className={"bodyText_3"}>
                                    Exploring Links Further
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="otherLinkTypesAndBehavior">
                                <div className="row">
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <h4 className={"h4Styles"}>Other Link Types</h4>
                                            <p className="bodyText_4 text-start">
                                                Links can also be created to manage other functionality such as starting
                                                up a user's email program while
                                                addressing the email to a specified email address, or, prompting the
                                                computer or a phone to make an
                                                outbound phone call to a specified telephone number.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="tablePanel2">
                                                <div className="example p-3">
                                                    <p className={"bodyText_3 pb-0 mb-0"}>Other Link Types</p>
                                                    <ul className="bodyText_4">
                                                        <li>
                                                            <a href="mailto:dkgreco@thetroveofgems.tech">Email Me!</a>
                                                        </li>
                                                        <li>
                                                            <a href="tel:+14802279551">Call Me!</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:alert('You Clicked Me!')">Execute
                                                                JavaScript!</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <h4 className={"h4Styles"}>Other Link Behaviors</h4>
                                            <p className="bodyText_4 text-start">
                                                A link can open a new window when redirecting.
                                                The <strong>target</strong> attribute is used on the
                                                opening &lt;a&gt; Tag and setting it to "_blank". Generally it is
                                                recommended to avoid opening links
                                                in a new window, but if implemented it is considered good practice to
                                                inform users that the link
                                                will open a new window before they proceed with a redirect.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="tablePanel2">
                                                <div className="example p-3">
                                                    <p className={"bodyText_3 pb-0 mb-0"}>Link Behavioral Changes</p>
                                                    <ul className={"bodyText_4"}>
                                                        <li>
                                                            <a href="https://en.wikipedia.org/wiki/Elvish_languages_of_Middle-earth"
                                                               target="_blank">
                                                                Wikipedia's <cite>Elvish Languages Of Middle
                                                                Earth</cite>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:confirmOpenNewWindow(false)">
                                                                Wikipedia's <cite>Elvish Languages Of Middle
                                                                Earth</cite> - Best Practice
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <h4 className={"h4Styles"}>Linking To Specific Sections Of The Same Page</h4>
                                            <p className="text-start bodyText_4">
                                                When pages begin to become longer, it may be nice to add a table of
                                                contents that links to each specific
                                                section so that it is easier for the reader to reach. Or perhaps it
                                                might be nice to place a link at the
                                                bottom of a long page that allows a user to scroll all the way back to
                                                the top without actually requiring
                                                the user to manually scroll once they've reached the bottom of the page.
                                            </p>
                                            <p className="text-start bodyText_4">
                                                To link to an element that uses an <strong>id</strong> attribute use
                                                the  &lt;a&gt; Tag. The value for the
                                                <strong>href</strong> attribute starts with
                                                the <strong>#</strong> symbol followed by the value of the
                                                <strong>id</strong> attribute of the element that needs to be linked to.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="tablePanel2">
                                                <div className="example p-3">
                                                    <p className={"bodyText_3 pb-0 mb-0"}>Linking To Page Sections</p>
                                                    <ul className={"bodyText_4"}>
                                                        <li>
                                                            <a href="#linking" target="_blank">
                                                                Linking
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#absoluteVsRelative">
                                                                Absolute vs Relative URL Paths
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#relativePathRelationships">
                                                                Relative Path Relationships
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#otherLinkTypes">
                                                                Other Link Types & Behavior
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <h4 className={"h4Styles"}>Linking To Specific Sections Of Another Page</h4>
                                            <p className="text-start bodyText_4">
                                                When a developer wants to link to a specific part of a different page
                                                (whether on the same site or another
                                                site) a similar technique can be used. As long as the page being linked
                                                to has <strong>id</strong> attributes that identify specific parts of
                                                the page, add the same syntax to the end of the link for that page.
                                            </p>
                                            <p className="text-start bodyText_4">
                                                Therefore, the <strong>href</strong> attribute will contain the address
                                                for the page (either an absolute
                                                or relative url), followed by a <strong>#</strong> symbol, followed by
                                                the value of the <strong>id</strong> attribute that is used on the
                                                element being linked to.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="tablePanel2">
                                                <div className="example p-3">
                                                    <p className={"bodyText_3 pb-0 mb-0"}>
                                                        Linking To Specific Sections Of Another Page
                                                    </p>
                                                    <ul className={"bodyText_5"}>
                                                        <li>
                                                            <a href="../../../../../../../../archive/lists.html#nestedLists">
                                                                Lists - Nested Lists
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:confirmOpenNewWindow(true)">
                                                                Wikipedia's <cite>Elvish Languages Of Middle Earth -
                                                                Elvish Scripts</cite>
                                                            </a>
                                                        </li>
                                                    </ul>
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