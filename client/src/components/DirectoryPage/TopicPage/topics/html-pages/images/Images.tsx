import "./Images.scss";
import {PreElement} from "../../../../../shared/HTML_Elements/PreElement/PreElement";

export function SideNavigationData() {
    return {
        directory: "html-images",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML/5 Images",
            links: [
                {
                    listOrder: 0,
                    text: "Choosing Images For A Website",
                    url: "#htmlDir_4_0"
                },
                {
                    listOrder: 1,
                    text: "Inserting Images Into A Webpage",
                    url: "#htmlDir_4_1"
                },
                {
                    listOrder: 2,
                    text: "Height &amp; Width of Images",
                    url: "#htmlDir_4_2"
                },
                {
                    listOrder: 3,
                    text: "Image Placement In Code",
                    url: "#htmlDir_4_3"
                },
                {
                    listOrder: 4,
                    text: "Deprecated Align Attribute",
                    url: "#htmlDir_4_4"
                },
                {
                    listOrder: 5,
                    text: "Image Formats",
                    url: "#htmlDir_4_5"
                },
                {
                    listOrder: 6,
                    text: "Image Dimensions",
                    url: "#htmlDir_4_6"
                },
                {
                    listOrder: 7,
                    text: "Image Resolutions",
                    url: "#htmlDir_4_7"
                },
                {
                    listOrder: 8,
                    text: "Vector Images",
                    url: "#htmlDir_4_8"
                },
                {
                    listOrder: 9,
                    text: "Animated Gifs",
                    url: "#htmlDir_4_9"
                },
                {
                    listOrder: 10,
                    text: "Image Transparency",
                    url: "#htmlDir_4_10"
                },
                {
                    listOrder: 11,
                    text: "HTML5 Figure &amp; Figure Caption Elements",
                    url: "#htmlDir_4_11"
                },
            ]
        }
    };
}

export default function Images() {
    const
        example_0 = "<img \n\tsrc=\"../../img/custard-apple.jpg\"\n\t src=\"../../img/custard-apple.jpg\"\n\t alt=\"Eight Custard Apples in a Wicker Bowl\"\n/>";
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
                        <h1 className="text-center m-3">HTML5 Images</h1>
                        <div id="pagePreambles">
                            <p className="pagePreamble_1">
                                Webpages that include images provide a richer content experience for the user or visitor
                                of a page.
                                There are many reasons why a developer might want to add images to a webpage:
                            </p>
                            <ul>
                                <li>Branding a site with logos</li>
                                <li>Adding gallery photos</li>
                                <li>Adding background illustrations, diagrams or charts</li>
                            </ul>
                            <p className="pagePreamble_1">
                                There are several things to consider when selecting and preparing images for a site. It
                                is worth the time
                                to get them right as it will make the site look more professional and attractive. Some
                                questions about
                                images might include:
                            </p>
                            <ul>
                                <li>What formats should be used?</li>
                                <li>How does a developer show an image at the right size?</li>
                                <li>What goes into optimizing an image for use on the web to make pages load faster?
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_1" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Choosing Images For A Website</h2>
                                <p>
                                    "A Picture Is Worth a 1000 Words"
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="choosingImages">
                                <h3>The Importance of Images</h3>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                Images are used to set the tone for a site in less time than it takes to read a description.
                                                If there are a lot of images on a page, putting them on a simple, consistent background helps them look
                                                better as a group. Some companies will also sell <strong>stock images</strong>; these are images that
                                                require payment to use. It should be remembered that all images are subject to copyright, and you can
                                                get in trouble for simply taking photographs from another website.
                                            </p>
                                            <p className="textEntry_1">
                                                As a website grows, keeping images in a separate folder helps provide clarity on how the site is organized.
                                                Generally, images are stored in a directory hierarchy beginning with a parent directory labeled <strong>images</strong>
                                                or <strong>img</strong>.
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="hrStyle" />
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-4">
                                            <h6>Images Should...</h6>
                                            <ul>
                                                <li>
                                                    Be relevant
                                                </li>
                                                <li>
                                                    Convey Information
                                                </li>
                                                <li>
                                                    Convey Correct Mood
                                                </li>
                                                <li>
                                                    Be Instantly Recognizable
                                                </li>
                                                <li>
                                                    Fit the Site's Color Palette
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6>3 Rules For Creating Images</h6>
                                            <ol>
                                                <li>
                                                    Save Images In The Right Format
                                                </li>
                                                <li>
                                                    Save Images At The Right Size
                                                </li>
                                                <li>
                                                    Measure Images In Pixels
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6>Stock Photo Resources</h6>
                                            <ul className={"image_refs"}>
                                                <li>
                                                    <a href="https://www.istockphoto.com">iStock Photo</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.gettyimages.com">Getty Images</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.veer.com">Veer</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.sxc.hu">SXC</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.fotolia.com">Fotolia</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6>Image Editing Tools</h6>
                                            <ul className={"image_refs"}>
                                                <li>
                                                    <a href="https://www.pixlr.com">Pixlr</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.splashup.com">Splash Up</a>
                                                </li>
                                                <li>
                                                    <a href="https://www.ipiccy.com">Ipiccy</a>
                                                </li>
                                                <li>
                                                    <strong className={"colorShiftComplementary3"}>Avoid Photoshop At All Costs.</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_2" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Inserting Images Into A Webpage</h2>
                                <p>
                                    The &lt;img&gt; Tag
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="insertingImages">
                                <h3>Inserting Images Using the &lt;img&gt; Tag</h3>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                To add an image into a page, the &lt;img&gt; Tag is used. This is an empty element (which means there is
                                                no closing tag). The &lt;img&gt; Tag must specify values for two (2) attributes: <strong>src</strong>
                                                and <strong>alt</strong>.
                                            </p>
                                            <p className="textEntry_1">
                                                The <strong>src</strong> attribute tells the browser where it can find the image file. This will usually
                                                be a relative URL pointing to the image within the site's image or img directory.
                                            </p>
                                            <p className="textEntry_1">
                                                The <strong>alt</strong> attribute provides a text description of the image which describes the image
                                                if the site cannot load the image file appropriately or a screen reader (For the visually impaired; ie.
                                                accessibility) is being used on the site. The text used in the <strong>alt</strong> attribute is often
                                                referred to as <strong>alt text</strong>. It should give an accurate description of the image content so
                                                that it can be understood by screen reader software and search engines (SEO). If an image is just to make
                                                a page look more attractive (and it has no meaning such as a graphic dividing line), then the
                                                <strong>alt</strong> attribute should still be used but the quotes should be left empty.
                                            </p>
                                            <p className="textEntry_1 pb-3">
                                                The optional <strong>title</strong> attribute provides additional information about the image. Most
                                                browsers will display the content of this attribute in a tooltip when the user hovers over the image.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="tablePanel2 tablePanelOverride2">
                                                <div className="example p-3 text-center">
                                                    <p className="example text-center">Example 1: Without the title attribute<br/>(No Hover Effect)</p>
                                                    <img src="../../../../../img/custard-apple.jpg" alt="Eight Custard Apples in a Wicker Bowl" />
                                                </div>
                                                <div className="example p-3 text-center">
                                                    <p className="example text-center">Example 2: With the <strong>title</strong> attribute<br/>(Hover Over Image)</p>
                                                    <img src="../../../../../img/custard-apple.jpg"
                                                         alt="Eight Custard Apples in a Wicker Bowl"
                                                         title="Custard Apples - Species Cherimoya"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="col-lg-12">
                                                <ul className="nav nav-pills mb-3" id="pills-tab-1" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="pills-olListExample1-tab" data-bs-toggle="pill" data-bs-target="#pills-olListExample1" type="button" role="tab" aria-controls="pills-olListExample1" aria-selected="true">Example 1</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="pills-olListExample2-tab" data-bs-toggle="pill" data-bs-target="#pills-olListExample2" type="button" role="tab" aria-controls="pills-olListExample2" aria-selected="false">Example 2</button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content example1-container" id="pills-tabContent-1">
                                                    <div className="tab-pane fade show active tablePanel3 p-3" id="pills-olListExample1" role="tabpanel" aria-labelledby="pills-olListExample1-tab">
                                                        {PreElement(example_0)}
                                                    </div>
                                                    <div className="tab-pane fade tablePanel3 p-3" id="pills-olListExample2" role="tabpanel" aria-labelledby="pills-olListExample2-tab">
                        <pre>
&lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  title="Custard Apples - Species Cherimoya"
/&gt;
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

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_3" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Height &amp; Width of Images</h2>
                                <p>
                                    Specifying Image Sizes
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="imgHeightAndWidth">
                                <h3>The <strong>height</strong> and <strong>width</strong> Attributes</h3>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                The &lt;img/&gt; Tag has two (2) other attributes that are used to control an image's height and width
                                                rendered to the browser. Generally, the two attributes should be set, as images often take longer to load than the HTML
                                                code that makes up the rest of the page. By specifying values for the two attributes, the browser is able
                                                to render the rest of the text on the page while leaving the right amount of space for the image that is
                                                still loading. It is ultimately better to control image height and width via CSS rather than HTML.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tablePanel2 tablePanelOverride1">
                                            <div className="example p-3 text-center">
                                                <img src="../../../../../img/custard-apple.jpg" alt="Eight Custard Apples in a Wicker Bowl" width="235" height="307" />
                                            </div>
                                            <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;img
    src="../../img/custard-apple.jpg"
    alt="Eight Custard Apples in a Wicker Bowl"
    height="307"
    width="235"
  /&gt;
</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_4" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Image Placement In Code</h2>
                                <p>
                                    Where should an image be placed?
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="imgPlacement">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                Where an image is placed in the code will affect how it is displayed. Below are three (3) basic examples
                                                of image placement that produce different results:
                                            </p>
                                            <ol>
                                                <li>Before a paragraph</li>
                                                <li>Inside the start of a paragraph</li>
                                                <li>In the middle of a paragraph</li>
                                            </ol>
                                            <p className="textEntry_1">
                                                Where an image is placed in code is important because browsers show HTML elements in one of two ways:
                                            </p>
                                            <ol>
                                                <li>
                                                    Block Elements
                                                    <strong>Always appear on a new line</strong> - Examples: h1, p Tags
                                                </li>
                                                <li>
                                                    Inline Elements
                                                    <strong>Sit within a block level element and do not start on a new line.</strong> - Examples: b, em Tags
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center">
                                                    <img  src="../../../../../img/custard-apple.jpg"
                                                          alt="Eight Custard Apples in a Wicker Bowl"
                                                          height="100"
                                                          width="100"
                                                    />
                                                    <p className="text-start">
                                                        The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                        edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                        closely related sweetsop and soursop.
                                                    </p>
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
/&gt;
    &lt;p&gt;The cherimoya, also...&lt;/p&gt;
</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center">
                                                    <p className="text-start">
                                                        <img  src="../../../../../img/custard-apple.jpg"
                                                              alt="Eight Custard Apples in a Wicker Bowl"
                                                              height="100"
                                                              width="100"
                                                        />
                                                        The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                        edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                        closely related sweetsop and soursop.
                                                    </p>
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;p&gt;
    &lt;img
   src="../../img/custard-apple.jpg"
   alt="Eight Custard Apples in a Wicker Bowl"
   height="100"
   width="100"
  /&gt;
    The cherimoya, also...
    &lt;/p&gt;
</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center">
                                                    <p className="text-start">
                                                        The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                        edible fruit-bearing plant in the genus Annona <img  src="../../../../../img/custard-apple.jpg"
                                                                                                             alt="Eight Custard Apples in a Wicker Bowl"
                                                                                                             height="100"
                                                                                                             width="100"
                                                    />, from the family Annonaceae, which includes the
                                                        closely related sweetsop and soursop.
                                                    </p>
                                                </div>
                                                <div className="example p-3">
<pre className={""}>
&lt;p&gt;
    The cherimoya, also...
    &lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
/&gt;...
    &lt;/p&gt;
</pre>
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
                        <div id="htmlDir_4_5" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Deprecated Align Attribute</h2>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="deprecatedAlign">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                In older code the deprecated <strong>align</strong> attribute might be present.
                                                The align attribute was commonly used to indicate how the other parts of a page should
                                                flow around an image. It has been removed from HTML5 and new websites should use CSS to control the
                                                alignment of images.
                                            </p>
                                            <hr className="hrStyle" />
                                            <h4>Aligning Images Horizontally - Deprecated!</h4>
                                            <p className="textEntry_1">
                                                When aligning horizontally the <strong>align</strong> attribute can take two (2) possible values:
                                            </p>
                                            <ol>
                                                <li>
                                                    left - aligns the image to the left (allowing text to flow around its right-hand side).
                                                </li>
                                                <li>
                                                    right - aligns the image to the right (allowing text to flow around its left-hand side).
                                                </li>
                                            </ol>
                                            <div className="row col-sm-12 col-lg-12">
                                                <div className="col-lg-6 col-sm-12">
                                                    <div className="tablePanel2 tablePanelOverride1">
                                                        <h6 className="p-3">Example - Horizontal Left</h6>
                                                        <div className="example p-3 text-center">
                                                            <p className="text-start">
                                                                <img  src="../../../../../img/custard-apple.jpg"
                                                                      alt="Eight Custard Apples in a Wicker Bowl"
                                                                      height="100"
                                                                      width="100"
                                                                      className={"imgPadRight"}
                                                                />
                                                                The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                                edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                                closely related sweetsop and soursop.
                                                            </p>
                                                        </div>
                                                        <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;p&gt;
    &lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
  align="left"
/&gt;
    The cherimoya, also...
    &lt;/p&gt;
</pre>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 mb-5">
                                                    <div className="tablePanel2 tablePanelOverride1">
                                                        <h6 className="p-3">Example - Horizontal Right</h6>
                                                        <div className="example p-3 text-center">
                                                            <p className="text-start">
                                                                <img  src="../../../../../img/custard-apple.jpg"
                                                                      alt="Eight Custard Apples in a Wicker Bowl"
                                                                      height="100"
                                                                      width="100"
                                                                />
                                                                The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                                edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                                closely related sweetsop and soursop.
                                                            </p>
                                                        </div>
                                                        <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;p&gt;
    &lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
  align="right"
/&gt;
    The cherimoya, also...
    &lt;/p&gt;
</pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="hrStyle" />
                                        <div className="col-lg-12">
                                            <h4>Aligning Images Vertically - Deprecated!</h4>
                                            <p className="textEntry_1">
                                                When aligning vertically, the <strong>align</strong> attribute can take three (3) possible values:
                                            </p>
                                            <ol>
                                                <li>
                                                    top - aligns the first line of surrounding text with the top of the image.
                                                </li>
                                                <li>
                                                    middle - aligns the first line of the surrounding text with the middle of the image.
                                                </li>
                                                <li>
                                                    bottom - aligns the first line of the surrounding text with the bottom of the image.
                                                </li>
                                            </ol>
                                            <div className="row col-sm-12 col-lg-12">
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="tablePanel2 tablePanelOverride1">
                                                        <div className="example p-3 text-start">
                                                            <p>
                                                                <img  src="../../../../../img/custard-apple.jpg"
                                                                      alt="Eight Custard Apples in a Wicker Bowl"
                                                                      height="100"
                                                                      width="100"
                                                                />
                                                                The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                                edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                                closely related sweetsop and soursop.
                                                            </p>
                                                        </div>
                                                        <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;p&gt;
    &lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
  align="top"
/&gt;
    The cherimoya, also...
    &lt;/p&gt;
</pre>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="tablePanel2 tablePanelOverride1">
                                                        <div className="example p-3 text-start">
                                                            <p>
                                                                <img  src="../../../../../img/custard-apple.jpg"
                                                                      alt="Eight Custard Apples in a Wicker Bowl"
                                                                      height="100"
                                                                      width="100"
                                                                />
                                                                The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                                edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                                closely related sweetsop and soursop.
                                                            </p>
                                                        </div>
                                                        <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;p&gt;
    &lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
  align="middle"
/&gt;
    The cherimoya, also...
    &lt;/p&gt;
</pre>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="tablePanel2 tablePanelOverride1">
                                                        <div className="example p-3">
                                                            <p>
                                                                <img  src="../../../../../img/custard-apple.jpg"
                                                                      alt="Eight Custard Apples in a Wicker Bowl"
                                                                      height="100"
                                                                      width="100"
                                                                />
                                                                The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                                edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                                closely related sweetsop and soursop.
                                                            </p>
                                                        </div>
                                                        <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;p&gt;
    &lt;img
  src="../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
  align="bottom"
/&gt;
    The cherimoya, also...
    &lt;/p&gt;
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

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_6" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Image Formats</h2>
                                <p>
                                    When To Use A Specific Format
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="imgFormats">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <ul>
                                                <li>Use <strong>JPEG</strong>: Whenever a photo has many different colors.</li>
                                                <li>
                                                    Use <strong>GIF</strong> or <strong>PNG</strong>: Whenever images utilize few or flat colors. Logos, illustrations, and diagrams often use
                                                    flat colors.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center">
                                                    <h6>Example - JPEG</h6>
                                                    <p>
                                                        Rich Color Contrast
                                                    </p>
                                                    <img  src="../../../../../img/custard-apple.jpg"
                                                          alt="Eight Custard Apples in a Wicker Bowl"
                                                          height="100"
                                                          width="100"
                                                    />
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;h6&gt;Example - JPEG&lt;/h6&gt;
    &lt;p&gt;
    Rich Color Contrast
    &lt;/p&gt;
    &lt;img  src="../../../../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
/&gt;
</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center">
                                                    <h6>Example - PNG</h6>
                                                    <p>
                                                        Three flat colors (Green, Black, White). No color contrast.
                                                    </p>
                                                    <img  src="../../../../../img/cherimoyaLogo.png"
                                                          alt="Logo Of A Cherimoya Fruit With A Clock Face"
                                                          height="100"
                                                          width="100"
                                                    />
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;h6&gt;Example - PNG&lt;/h6&gt;
    &lt;p&gt;
    Three flat colors (Green, Black, White). No color contrast.
    &lt;/p&gt;
    &lt;img  src="../../../../../img/cherimoyaLogo.png"
  alt="Logo Of A Cherimoya Fruit With A Clock Face"
  height="100"
  width="100"
/&gt;
</pre>
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
                        <div id="htmlDir_4_7" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Image Dimensions</h2>
                                <p>
                                    When To Use A Specific Format
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="imgDimensions">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <h3>How to Determine An Image's Dimensions</h3>
                                            <p className="textEntry_1">
                                                The images that must be used on a website should be saved at the same width and height that is needed
                                                for them to appear on the page.
                                            </p>
                                            <p className="textEntry_1">
                                                Images should be considered for whether they best present in landscape or portrait mode. Another example:
                                                An image of a giraffe would be best suited to appearing in portrait mode. An image of an elephant would
                                                be better suited to appearing in landscape mode. Cropping either images would
                                                result in losing the head and feet of a giraffe (landscape mode), and losing the trunk and hidequarters
                                                of the elephant (portrait mode). Extra space on either image would result in a background that is not
                                                continued either horizontally or vertically.
                                            </p>
                                            <p className="textEntry_1">
                                                For example, if a page is designed to include an image that is 300px wide by 150px tall, the image used
                                                should be 300 x 150 pixels. The use of image editing tools to resize and/or crop an image can help with
                                                achieving that goal.
                                            </p>
                                            <p className="textEntry_1">
                                                When the dimensions of an image (example: 300 x 150) are altered, the following effects occur:
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Reducing Image Size</strong>
                                                    <ul>
                                                        <li>
                                                            If the dimensions of a loaded image were reduced by 50%, this would create an image that is
                                                            <em>faster</em> to load.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <strong>Increasing Image Size</strong>
                                                    <ul>
                                                        <li>
                                                            If the dimensions of a loaded image were increased by 300%, this would create an image that is
                                                            <em>blurry or blocked</em>.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <strong>Changing Image Shape</strong>
                                                    <ul>
                                                        <li>
                                                            If the image is cropped, it is possible to lose valuable information.
                                                            Only some images can be cropped and still make sense.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center">
                                                    <h6 className={"h6Override1"}>Reducing Image Size By 50%</h6>
                                                    <p>
                                                        Original Size: 470x614 - Reduced Size: 235x307
                                                    </p>
                                                    <img  src="../../../../../img/custard-apple.jpg"
                                                          alt="Eight Custard Apples in a Wicker Bowl"
                                                          height="307"
                                                          width="235"
                                                    />
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;h6&gt;Example - JPEG&lt;/h6&gt;
    &lt;p&gt;
    Rich Color Contrast
    &lt;/p&gt;
    &lt;img  src="../../../../../img/custard-apple.jpg"
  alt="Eight Custard Apples in a Wicker Bowl"
  height="100"
  width="100"
/&gt;
</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center noOverflowOverride">
                                                    <h6>Increasing Image Size By 115%</h6>
                                                    <p className={"noOverflowOverride"}>
                                                        Image can become blurred and disproportionate.
                                                    </p>
                                                    <img  src="../../../../../img/custard-apple.jpg"
                                                          alt="Logo Of A Cherimoya Fruit With A Clock Face"
                                                          height="1842"
                                                          width="1410"
                                                          className={"customImgSize noOverflowOverride"}
                                                    />
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;h6&gt;Increasing Image Size By 115%&lt;/h6&gt;
    &lt;p style="overflow: hidden;"&gt;
    Image can become blurred and disproportionate.
    &lt;/p&gt;
    &lt;img  src="../../../../../img/custard-apple.jpg"
  alt="Logo Of A Cherimoya Fruit With A Clock Face"
  height="1842"
  width="1410"
  style="width: 115%; height: 115%;"
/&gt;
</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center">
                                                    <h6>Bad Cropping</h6>
                                                    <p className={"noOverflowOverride"}>
                                                        Hard to tell what this would be
                                                    </p>
                                                    <img  src="../../../../../img/croppedCherimoyaLogo.png"
                                                          alt="Cropped Logo Of A Cherimoya Fruit With A Clock Face"
                                                          height="104"
                                                          width="272"
                                                          className={"customImgSize_1"}
                                                    />
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;h6&gt;Bad Cropping&lt;/h6&gt;
    &lt;p style="overflow: hidden;"&gt;
    Hard to tell what this would be
    &lt;/p&gt;
    &lt;img  src="../../../../../img/croppedCherimoyaLogo.png"
  alt="Cropped Logo Of A Cherimoya Fruit With A Clock Face"
  height="104"
  width="272"
  style="width: 272px; height: 104px"
/&gt;
</pre>
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
                        <div id="htmlDir_4_8" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Image Resolutions</h2>
                                <p>
                                    How to Determine An Image's Resolution
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="imgResolutions">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                When image sizes are set for use on the screen, they should always be set dimensions of the image in
                                                terms of pixels. Not centimeters or inches.
                                            </p>
                                            <p className="textEntry_1">
                                                Images are made up of tiny squares of color on a monitor which are known as pixels. The <strong>resolution</strong>
                                                of the screen is the number of pixels represented on it and most computers can increase or decrease this
                                                number.
                                            </p>
                                            <p className="textEntry_1">
                                                If a screen's resolution is set at 640x480, and it is then increased to 1024x768 pixels, the images
                                                and text will appear smaller because the screen is showing a lot more pixels within the same amount of space.
                                                (There are more pixels per inch.) When creating images for print, it is best to save them at a resolution
                                                of 300 dots per inch (DPI) or higher to ensure sharpness.
                                            </p>
                                            <p className="textEntry_1">
                                                On the web however, the resolution of an image is irrelevant. The only important aspect of an image
                                                is the size in terms of its <strong>dimensions</strong> in pixels. It is recommended that images for the
                                                web should be 72 pixels per inch. But users can change the resolution of the screen itself (affecting
                                                the number of pixels shown per inch of the screen). Screens therefore determine the size of an image
                                                based solely on its width and height in pixels.
                                            </p>
                                            <p className="textEntry_1">
                                                On a screen, an image that is 300x300 pixels at 72ppi looks exactly the same as an image that is 300x300
                                                pixels at 500ppi. The resolution of the image only matters when the image is printed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_9" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Vector Images</h2>
                                <p>
                                    What Are Vector Images?
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="vectorImages">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                Vector images differ from bitmap images and are resolution-independent. Vector images are commonly created
                                                in programs such as Sketch or CoreIDRAW.
                                            </p>
                                            <p className="textEntry_1">
                                                When an image is a line drawing (such as a logo, illustration, or diagram), designers will often create
                                                it in a vector format. Vector formatted images are created by placing points on a grid, and drawing lines
                                                between those points. A color can then be added to "fill in" the lines that have been created. The
                                                advantage of creating line drawings is that the dimensions may be increased without affecting the quality
                                                of it.
                                            </p>
                                            <p className="textEntry_1">
                                                The current method of using vector images for display on websites involves saving a bitmap version of the
                                                original vector image and using that.
                                            </p>
                                            <p className="textEntry_1">
                                                The Scalable Vector Graphics (<strong>SVG</strong>) format is relatively new and used to display vector
                                                images directly on the web (eliminating the need to create bitmap versions of them), however its use
                                                is not yet widespread.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_10" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Animated Gifs</h2>
                                <p>
                                    Using Gifs In Webpages
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="animatedGifs">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                Animated GIFs show several frames of an image in sequence and therefore can be used to create simple
                                                animations. It's possible to create your own GIFs using specialized software.
                                            </p>
                                            <p className="textEntry_1">
                                                When using an animated GIF, it is important to remember that: each extra frame of the image increases
                                                the size of the file, and can add to the time it takes for an image to download (and web users do not
                                                like to wait a long time for images to download).
                                            </p>
                                            <p className="textEntry_1">
                                                Because GIFs are not an ideal format for displaying photographs, they are really only suitable for simple
                                                illustrations.
                                            </p>
                                            <p className="textEntry_1">
                                                Overuse of animated GIFs on a site can be seen as an amateur web design by other devs. But it is okay
                                                to use them where they make sense.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_11" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>Image Transparency</h2>
                                <p>
                                    Adding Transparency To Images
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="transparency">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                Creating an image that is partially transparent (or "see-through") for the web involves selecting
                                                1 (one) of 2 (two) formats:
                                            </p>
                                            <ol>
                                                <li>
                                                    Transparent GIF
                                                    <ul>
                                                        <li>
                                                            If the transparent part of the image has straight edges and is 100% transparent (that is, not
                                                            semi-opaque), save the image as a GIF (with the transparency option selected).
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    PNG
                                                    <ul>
                                                        <li>
                                                            If the transparent part of the image has a diagonal or rounded edges or if you want a semi-opaque
                                                            transparency or drop-shadow, then save it as a PNG.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                            <p className="example">Note: Transparent PNGs were not supported back when IE6 existed...Not sure if this is still a use case today.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_4_12" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2>HTML5 Figure And Figure Caption Elements</h2>
                                <p>
                                    Setting a New Standard
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="html5FigAndCap">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <ul>
                                                <li>
                                                    <strong>&lt;figure&gt;</strong> Tag: Images often come with captions. HTML5 introduced a new <strong>&lt;figure&gt;</strong>
                                                    element to contain images and their caption so that the two are more closely associated. There can
                                                    be more than one image inside the figure element so long as they call share the same caption. Some
                                                    browsers may indent the contents of the <strong>&lt;figure&gt;</strong> element.
                                                </li>
                                                <li>
                                                    <strong>&lt;figcaption&gt;</strong> Tag: The <strong>&lt;figcaption&gt;</strong> element has been added
                                                    to HTML5 in order to allow the web page authors to add a caption to an image. Before these elements
                                                    were created there was no way to associate an <strong>&lt;img&gt;</strong> Tag with its caption.
                                                    Older browsers that do not understand HTML5 elements will ignore the new elements and display the
                                                    content of them.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="tablePanel2 tablePanelOverride1">
                                                <div className="example p-3 text-center noOverflowOverride">
                                                    <h6>Using <span className={"spanRed"}>Figure</span> and <span className={"spanBlue"}>FigCaption</span></h6>
                                                    <figure className="text-center p-3 redBorder">
                                                        <img  src="../../../../../img/custard-apple.jpg"
                                                              alt="Eight Custard Apples in a Wicker Bowl"
                                                              height="100"
                                                              width="100"
                                                              className="p-3"
                                                        />
                                                        <figcaption className="blueBorder p-3">
                                                            The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
                                                            edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
                                                            closely related sweetsop and soursop.
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                <div className="example p-3">
<pre className={"preFontStyler"}>
&lt;h6&gt;Using &lt;span style="color: red;"&gt;Figure&lt;/span&gt; and &lt;span style="color: blue;"&gt;FigCaption&lt;/span&gt;&lt;/h6&gt;
    &lt;figure className="text-center p-3" style="border: 1px solid red;"&gt;
    &lt;img  src="../../../../../img/custard-apple.jpg"
    alt="Eight Custard Apples in a Wicker Bowl"
    height="100"
    width="100"
    className="p-3"
  /&gt;
    &lt;figcaption style="border: 1px solid blue;" className="p-3"&gt;
    The cherimoya, also spelled chirimoya and called chirimuya by the Inca people, is a species of
    edible fruit-bearing plant in the genus Annona, from the family Annonaceae, which includes the
    closely related sweetsop and soursop.
    &lt;/figcaption&gt;
    &lt;/figure&gt;
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
        </>
    );
}