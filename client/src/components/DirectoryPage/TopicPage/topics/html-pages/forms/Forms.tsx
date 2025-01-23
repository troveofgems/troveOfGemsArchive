import "./Forms.scss";
import {PElement} from "../../../../../shared/HTML_Elements/PElement/PElement";
import {MainPageHeader} from "../../../../../shared/PageSections/MainPageHeader/MainPageHeader";
import {PageIntroduction} from "../../../../../shared/PageSections/PageIntroduction/PageIntroduction";
import {SectionPageHeader} from "../../../../../shared/PageSections/SectionPageHeader/SectionPageHeader";
import {H3Sectional} from "../../../../../shared/PageSections/H3Sectional/H3Sectional";
import {PreElement} from "../../../../../shared/HTML_Elements/PreElement/PreElement";

export function SideNavigationData() {
    return {
        directory: "html-forms",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML/5 Forms",
            links: [
                {
                    listOrder: 0,
                    text: "1. Form Controls",
                    url: "#htmlDir_6_1"
                },
                {
                    listOrder: 1,
                    text: "2. How Forms Work",
                    url: "#htmlDir_6_2"
                },
                {
                    listOrder: 2,
                    text: "3. Form Text",
                    url: "#htmlDir_6_3"
                },
                {
                    listOrder: 3,
                    text: "4. Common Inputs",
                    url: "#htmlDir_6_4"
                },
                {
                    listOrder: 4,
                    text: "5. Text Area Inputs",
                    url: "#htmlDir_6_5"
                },
                {
                    listOrder: 5,
                    text: "6. Radio Buttons &amp; Checkboxes",
                    url: "#htmlDir_6_6"
                },
                {
                    listOrder: 6,
                    text: "7. Multi-Selects &amp; Dropdowns",
                    url: "#htmlDir_6_7"
                },
                {
                    listOrder: 7,
                    text: "8. File I/O",
                    url: "#htmlDir_6_8"
                },
                {
                    listOrder: 8,
                    text: "9. Date/Time Inputs",
                    url: "#htmlDir_6_9"
                },
                {
                    listOrder: 9,
                    text: "10. Buttons & Hidden Controls",
                    url: "#htmlDir_6_10"
                },
                {
                    listOrder: 10,
                    text: "11. Labelling & Grouping Form Controls",
                    url: "#htmlDir_6_11"
                },
                {
                    listOrder: 11,
                    text: "12. Form Validation",
                    url: "#htmlDir_6_12"
                }
            ]
        }
    };
}

export default function Forms() {
    const
        pageTitle = "HTML/5 Forms",
        pageIntroduction = (
            <>
                {PElement(
                    <>
                        Traditionally, the term 'form' has referred to a printed document that contains spaces for someone to fill
                        in information. HTML borrows the concept of a form to refer to different elements that allows the manager of
                        a site to collect information from visitors. A form can be something as simple as a search box, or, as
                        complex as an insurance application form. The purpose of HTML5 Forms is to provide a set of elements that
                        facilitates collecting data from users.
                    </>
                )}
                {PElement(
                    <>
                        The best known form on the web is probably the search box that sits right in the middle of Google's homepage.
                        In addition to enabling users to search, forms also allow users to perform other functions online such as
                        user registration, checkout purchasing, adding oneself to a newsletter, etc.
                    </>
                )}
            </>
        );

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
                        {MainPageHeader(pageTitle)}
                        {PageIntroduction(pageIntroduction)}
                    </div>
                    
                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_1">
                            {SectionPageHeader("Form Controls", "Available Types")}
                            <div id="formControls">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3">
                                                There are several types of form controls that you can use to collect
                                                information from visitors to a site.
                                                Inputs are created using the input Tag &lt;input&gt; and specifying
                                                the <strong>type</strong> attribute.
                                            </p>
                                            <ol className={"introductionList__outerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;input&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used to create an input field to collect some form of data.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    Type Attribute
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used to indicate the type of field that should be rendered
                                                            by the browser. The <strong>type</strong> attribute can hold one of the following values:
                                                            <ul className={"introductionList__innerList pt-3"}>
                                                                <li className={"pb-3 bulletItem"}>text - default value</li>
                                                                <li className={"pb-3 bulletItem"}>button</li>
                                                                <li className={"pb-3 bulletItem"}>checkbox</li>
                                                                <li className={"pb-3 bulletItem"}>color</li>
                                                                <li className={"pb-3 bulletItem"}>date</li>
                                                                <li className={"pb-3 bulletItem"}>datetime-local</li>
                                                                <li className={"pb-3 bulletItem"}>email</li>
                                                                <li className={"pb-3 bulletItem"}>file</li>
                                                                <li className={"pb-3 bulletItem"}>hidden</li>
                                                                <li className={"pb-3 bulletItem"}>image</li>
                                                                <li className={"pb-3 bulletItem"}>month</li>
                                                                <li className={"pb-3 bulletItem"}>number</li>
                                                                <li className={"pb-3 bulletItem"}>password</li>
                                                                <li className={"pb-3 bulletItem"}>radio</li>
                                                                <li className={"pb-3 bulletItem"}>range</li>
                                                                <li className={"pb-3 bulletItem"}>reset</li>
                                                                <li className={"pb-3 bulletItem"}>search</li>
                                                                <li className={"pb-3 bulletItem"}>submit</li>
                                                                <li className={"pb-3 bulletItem"}>tel</li>
                                                                <li className={"pb-3 bulletItem"}>time</li>
                                                                <li className={"pb-3 bulletItem"}>url</li>
                                                                <li className={"pb-3 bulletItem"}>week</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div className="example p-3">
                                                <form>
                                                    <small>Accepting Text</small>
                                                    <div>
                                                        <input type="text" placeholder="Text Input"/>
                                                        <input type="password" placeholder="Password Input"/>
                                                    </div>
                                                    <div className={"addPaddingTop"}>
                                                        <textarea placeholder="Multiline Input" rows={2}></textarea>
                                                    </div>
                                                    <div className={"addMarginTop"}>
                                                        <small>Making Choices</small>
                                                        <div>
                                                            <input type="radio" name="genre" value="Fantasy"/> <span
                                                            className={"addMarginRight"}>Fantasy</span>
                                                            <input type="radio" name="genre" value="Non-Fiction"/> <span
                                                            className={"addMarginRight"}>Non-Fiction</span>
                                                            <input type="radio" name="genre" value="Horror"/> <span
                                                            className={"addMarginRight"}>Horror</span>
                                                        </div>
                                                        <div className={"addMarginTopAndBottom"}>
                                                            <input type="checkbox" name="acceptSiteControl"
                                                                   value="newsletter"/> <span
                                                            className={"addMarginRight"}>Sign Up For Newsletter</span>
                                                            <input type="checkbox" name="acceptSiteControl"
                                                                   value="cookies"/> <span className={"addMarginRight"}>Accept Site Cookies</span>
                                                            <input type="checkbox" name="acceptSiteControl"
                                                                   value="browserInfo"/> <span
                                                            className={"addMarginRight"}>Accept Browser Data Scrape</span>
                                                        </div>
                                                        <div className={"addMarginTopAndBottom"}>
                                                            <select name="osPreference">
                                                                <option value="linux">Linux</option>
                                                                <option value="macos">MacOS</option>
                                                                <option value="windows">Windows</option>
                                                            </select>
                                                        </div>
                                                        <div className={"addMarginTopAndBottom"}>
                                                            <select name="woodwinds" size={3} multiple={true}>
                                                                <option value="clarinet">Clarinet</option>
                                                                <option value="flute">Flute</option>
                                                                <option value="saxophone">Saxophone</option>
                                                                <option value="oboe">Oboe</option>
                                                                <option value="bassoon" selected={true}>Bassoon
                                                                </option>
                                                                <option value="bassClarinet"
                                                                        className={"addPaddingRight"}>Bass Clarinet
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className={"addMarginTop"}>
                                                        <small>File Uploads/Downloads</small>
                                                        <div>
                                                            <input type="file" name="userAvatar" className="mb-2"/>
                                                            <br/>
                                                            <input type="submit" value="Upload"/>
                                                        </div>
                                                    </div>
                                                    <div className={"addMarginTop"}>
                                                        <small>Form Buttons</small>
                                                        <div>
                                                            <input type="submit" name="subscribe" value="Subscribe"/>
                                                            <br/>
                                                            <input type="image" src="../../../../../img/orangeBtn.jpg"
                                                                   width="50" height="50"/>
                                                        </div>
                                                        <div>
                                                            <button>
                                                                <img src="../../../../../img/addBtn.png" alt="add"
                                                                     width="50" height="50"/>
                                                                Add
                                                            </button>
                                                            <input type="hidden" name="bookmark" value="pageId"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_2">
                            {SectionPageHeader("How Forms Work", "Name & Value Pairs")}
                            <div id="howFormsWork">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <h3>Form Processing</h3>
                                            <p className="bodyText_3">
                                                A form may have several form controls, each gathering different
                                                information. The server needs to know
                                                which piece of inputted data corresponds with which form element.
                                            </p>
                                            <p className="bodyText_3">
                                                To differentiate between various pieces of inputted data, information is
                                                sent from the browser to the
                                                server using the name/value pairs.
                                            </p>
                                            <p className="bodyText_3">
                                                The processing flow is:
                                            </p>
                                            <ol className={"introductionList__outerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    A user begins by filling out a form and then presses a button to
                                                    submit the information to a server.
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    The name of each form control is sent to the server along with the
                                                    value the user enters or selects.
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    The server processes the information using a programming language
                                                    such as NodeJS, PHP, C#, VB.net,
                                                    or Java. It may also store processed information to a database.
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    The server returns a response based on the information received and
                                                    processed.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div className="example p-3">
                                                <div className={"addFullMargins"}>
                                                    <span className={"setToComplimentary2"}>name</span>=<span
                                                    className={"setToComplimentary3"}>value</span>
                                                    <br/>
                                                    <span
                                                        className={"setToComplimentary2"}>username</span>=<span
                                                    className={"setToComplimentary3"}>Dustin</span>
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
                        <div id="htmlDir_6_3">
                            {SectionPageHeader("Form Text", "Creating a Form")}
                            <div id="formStructure">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3">
                                                Form controls live inside a &lt;form&gt; Tag. This element should always
                                                carry the <strong>action</strong>
                                                attribute and will usually have
                                                a <strong>method</strong> and <strong>id</strong> attribute set.
                                            </p>
                                            <ul>
                                                <li className={"pb-3 bulletItem"}>
                                                    The <strong>action</strong> Attribute
                                                    <ul>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Every &lt;form&gt; element requires an action attribute. Its
                                                            value is the URL for the page on the server
                                                            that will receive the information in the form when it is
                                                            submitted.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    The <strong>method</strong> Attribute
                                                    <ul>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Forms can be sent using one of two
                                                            methods: <strong>GET</strong> or <strong>POST</strong>.
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            With the <strong>GET</strong> Method, the values from the
                                                            form are added to the end of the URL
                                                            specified in the action attribute.
                                                            The <strong>GET</strong> method is ideal for:
                                                            <ul>
                                                                <li className={"pb-3 bulletItem"}>Short Forms (Such as search boxes)</li>
                                                                <li className={"pb-3 bulletItem"}>When the client is retrieving data from the web
                                                                    server. (Not adding or deleting data from the
                                                                    system.)
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            With the <strong>POST</strong> Method, the values from the
                                                            form are sent in what are known as HTTP
                                                            headers. As a rule of thumb,
                                                            The <strong>POST</strong> method is ideal for:
                                                            <ul>
                                                                <li className={"pb-3 bulletItem"}>Forms that allow users to upload a file</li>
                                                                <li className={"pb-3 bulletItem"}>Long Forms</li>
                                                                <li className={"pb-3 bulletItem"}>Contains sensitive values</li>
                                                                <li className={"pb-3 bulletItem"}>Adds information to, or deletes information from a
                                                                    database
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    The <strong>id</strong> Attribute
                                                    <ul>
                                                        <li className={"pb-3 bulletItem"}>
                                                            The <strong>id</strong> attribute is used to identify the
                                                            form distinctly from other elements
                                                            that might exist on the page. It is often used by scripts -
                                                            such as those that validation form
                                                            field values entered in by the user.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    The <strong>DEPRECATED size</strong> Attribute
                                                    <ul>
                                                        <li className={"pb-3 bulletItem"}>
                                                            The <strong>size</strong> attribute was used on
                                                            an &lt;input&gt; Tag to define the width of the text
                                                            input (measured by the number of characters that would be
                                                            seen). A value of three (3) would create
                                                            a box wide enough to display three characters (though a user
                                                            could enter more than three (3)
                                                            characters). This attribute should not be used in newer
                                                            versions of code. CSS should be used to control
                                                            the width of form elements.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <p className="bodyText_3">
                                                If a form is not sent with a <strong>method</strong> attribute, the form
                                                will be sent as <strong>GET</strong>
                                                by default.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <small>Form #1 Example</small>
                                                <form id="form1" className="tablePanel3"
                                                      action="http://localhost:8080/processForm" method="get">
                                                    <p className="text-center overrideFontTo5">
                                                        This is where form controls would appear.
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                    <pre className={"overrideFontTo5"}>
&lt;form
    id="form1"
    action="http://localhost:8080/processForm"
    method="get"
    style="margin: 1rem; padding: 1rem; border: 1px solid black;"
                        &gt;
                        &lt;p&gt;This is where form controls would appear.&lt;/p&gt;
                        &lt;/form&gt;
                    </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_4">
                            {SectionPageHeader("Common Inputs", "Accepting Common User Input")}
                            <div id="commonInputs">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs" id="commonInputExamplesTabber" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="slText-tab" data-bs-toggle="tab"
                                                        data-bs-target="#slText-tab-pane" type="button" role="tab"
                                                        aria-controls="slText-tab-pane" aria-selected="true">Single-Line
                                                    Text
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="number-tab" data-bs-toggle="tab"
                                                        data-bs-target="#number-tab-pane" type="button" role="tab"
                                                        aria-controls="number-tab-pane" aria-selected="false">Number
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nr-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nr-tab-pane" type="button" role="tab"
                                                        aria-controls="nr-tab-pane" aria-selected="false">Numerical
                                                    Range
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="email-tab" data-bs-toggle="tab"
                                                        data-bs-target="#email-tab-pane" type="button" role="tab"
                                                        aria-controls="email-tab-pane" aria-selected="false">Email
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="password-tab" data-bs-toggle="tab"
                                                        data-bs-target="#password-tab-pane" type="button" role="tab"
                                                        aria-controls="#password-tab-pane"
                                                        aria-selected="false">Password
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="tel-tab" data-bs-toggle="tab"
                                                        data-bs-target="#tel-tab-pane" type="button" role="tab"
                                                        aria-controls="#tel-tab-pane" aria-selected="false">Tel
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="url-tab" data-bs-toggle="tab"
                                                        data-bs-target="#url-tab-pane" type="button" role="tab"
                                                        aria-controls="#url-tab-pane" aria-selected="false">URL
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="colorPicker-tab" data-bs-toggle="tab"
                                                        data-bs-target="#colorPicker-tab-pane" type="button" role="tab"
                                                        aria-controls="#colorPicker-tab-pane"
                                                        aria-selected="false">Color Picker
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="commonInputExamplesTabberContent">
                                            <div className="tab-pane fade show active" id="slText-tab-pane"
                                                 role="tabpanel" aria-labelledby="slText-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="text"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>text</em> it
                                                            creates a text box that acts just like a
                                                            single-line input field.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-4 setBookCoverBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className="tablePanel3 p-3">
                                                                <p>No Char Limit Field</p>
                                                                <label htmlFor="username">
                                                                    Username
                                                                    <input type="text" id="username"
                                                                           placeholder="dkgreco"/>
                                                                </label>
                                                                <div className="mt-5"></div>
                                                                <p>Char Limited Field: 7</p>
                                                                <label htmlFor="usernameLimited">
                                                                    Username
                                                                    <input type="text" id="usernameLimited"
                                                                           placeholder="dkgreco" maxLength={7}/>
                                                                </label>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#"&gt;
                                                                &lt;p&gt;No Char Limit Field&lt;/p&gt;
                                                                &lt;label for="username"&gt;
                                                                Username
    <span className={"setToComplimentary2 overrideFontTo4"}>&lt;input type="text" id="username" placeholder="dkgreco" /&gt;</span>
                                                                &lt;/label&gt;
                                                                &lt;div class="mt-5"&gt;&lt;/div&gt;
                                                                &lt;p&gt;Char Limited Field: 7&lt;/p&gt;
                                                                &lt;label for="usernameLimited"&gt;
                                                                Username
      <span className={"setToComplimentary2 overrideFontTo4"}>&lt;input type="text" id="usernameLimited" placeholder="dkgreco" maxlength="7" /&gt;</span>
                                                                &lt;/label&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="number-tab-pane" role="tabpanel"
                                                 aria-labelledby="number-tab" tabIndex={1}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="number"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>number</em> it
                                                            creates an input field that accepts
                                                            numerical values. Depending on the browser, there the field
                                                            may include increment/decrement
                                                            buttons.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-4 setGreyRightBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form className={"addFullMargins"}>
                                                                <label htmlFor="breakSomeEggs">
                                                                    How Many Eggs Do We Need to Break?
                                                                    <input type="number" id="breakSomeEggs"
                                                                           name="breakSomeEggs"/>
                                                                </label>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form className={"addFullMargins"}&gt;
                                                                &lt;label for="breakSomeEggs"&gt;
                                                                How Many Eggs Do We Need to Break?
    <span className={"setToComplimentary2 overrideFontTo4"}>&lt;input type="number" id="breakSomeEggs" name="breakSomeEggs"/&gt;</span>
                                                                &lt;/label&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nr-tab-pane" role="tabpanel"
                                                 aria-labelledby="nr-tab" tabIndex={2}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="range"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value
                                                            of <em>range</em> defines a control for entering a number
                                                            whose
                                                            exact value is not important (like a slider control).
                                                            <br/>
                                                            Default range is 0 to 100.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-4 setGreyRightBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form className={"addFullMargins"}>
                                                                <label htmlFor="password">
                                                                    How many eggs were thrown?
                                                                    <input type="range" id="thrownEggs" min="0" max="10"
                                                                           step="1"/>
                                                                </label>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form className={"addFullMargins"}&gt;
                                                                &lt;label for="password"&gt;
                                                                How many eggs were thrown?
    <span className={"setToComplimentary2 overrideFontTo4"}>&lt;input type="range" id="thrownEggs" min="0" max="10" step="1"/&gt;</span>
                                                                &lt;/label&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="email-tab-pane" role="tabpanel"
                                                 aria-labelledby="email-tab" tabIndex={3}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="email"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>email</em> it
                                                            creates a text input that expects to
                                                            receive an email address, and may prompt the user as such
                                                            when the user hovers over the field.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-4 setGreyRightBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form className={"addFullMargins"}>
                                                                <label htmlFor="email">
                                                                    Email
                                                                    <input type="email" id="email"
                                                                           placeholder="dkgreco@troveofgems.tech"/>
                                                                </label>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form className={"addFullMargins"}&gt;
                                                                &lt;label for="email"&gt;
                                                                Email
    <span className={"setToComplimentary2 overrideFontTo4"}>&lt;input type="email" id="email" placeholder="dkgreco@troveofgems.tech" /&gt;</span>
                                                                &lt;/label&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="password-tab-pane" role="tabpanel"
                                                 aria-labelledby="password-tab" tabIndex={4}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="password"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>password</em> it
                                                            creates a text box that acts just like a
                                                            single-line input field, except the characters are blocked
                                                            out. They are hidden in this way so that if
                                                            someone is looking over the user's shoulder, they cannot see
                                                            the sensitive data such as passwords.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form className={"addFullMargins"}>
                                                                <label htmlFor="password">
                                                                    Password
                                                                    <input type="password" id="password"
                                                                           placeholder="Password" value="Cant See Me"/>
                                                                </label>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form className={"addFullMargins"}&gt;
                                                                &lt;label for="password"&gt;
                                                                Password
    <span className={"setToComplimentary2 overrideFontTo4"}>&lt;input type="password" id="password" placeholder="Password" value="Cant See Me" /&gt;</span>
                                                                &lt;/label&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tel-tab-pane" role="tabpanel"
                                                 aria-labelledby="tel-tab" tabIndex={5}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="tel"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>tel</em> it
                                                            creates a text input that expects to
                                                            receive an telephone number, and may prompt the user as such
                                                            when the user hovers over the field.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            The developer can also specify
                                                            a <strong>pattern</strong> attribute by providing a regex
                                                            validation
                                                            pattern string to ensure the phone number is in the correct
                                                            format prior to form submission.
                                                            <br/>
                                                            Browsers that do not support "tel" fall back to being a
                                                            standard "text" input.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="telInputDemo">
                                                                <label htmlFor="phoneEntered">Enter my phone
                                                                    number:</label>
                                                                <input type="tel" id="phoneEntered" name="phoneEntered"
                                                                       pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" className={"addFullMargins"} id="telInputDemo"&gt;
                                                                &lt;label for="phoneEntered"&gt;Enter my phone number:&lt;/label&gt;
                                                                <span
                                                                    className={"setToComplimentary2 overrideFontTo4"}>&lt;input
    type="tel"
    id="phoneEntered"
    name="phoneEntered"
    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
  /&gt;</span>
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="url-tab-pane" role="tabpanel"
                                                 aria-labelledby="url-tab" tabIndex={6}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="url"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>url</em> it
                                                            creates a text input that expects to
                                                            receive a URL, and may prompt the user as such when the user
                                                            hovers over the field.
                                                            <br/>
                                                            The input value is automatically validated before the form
                                                            can be submitted
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-4 setGreyRightBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="urlInputDemo">
                                                                <label htmlFor="urlEntered">Enter your homepage:</label>
                                                                <input type="url" id="urlEntered" name="urlEntered"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre>
&lt;form action="#" className={"addFullMargins"} id="urlInputDemo"&gt;
                                                                &lt;label for="urlEntered"&gt;Enter your homepage:&lt;/label&gt;
                                                                <span
                                                                    className={"setToComplimentary2 overrideFontTo4"}>&lt;input type="url" id="urlEntered" name="urlEntered" /&gt;</span>
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="colorPicker-tab-pane" role="tabpanel"
                                                 aria-labelledby="colorPicker-tab" tabIndex={7}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-75 m-auto my-5">
                                                        <h5>The &lt;input type="color"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>color</em> it
                                                            creates a field that will allow the user
                                                            to select from a palette of colors, or select their own
                                                            color.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            The color value is represented as a hex code value.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="/" className={"addFullMargins"} id="colorWheelDemo">
                                                                <label htmlFor="favoriteColor">Select Your Favorite
                                                                    Color</label>
                                                                <input id="favoriteColor" type="color"
                                                                       name="favoriteColor" value="#ff0000"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre>
&lt;form action="/" className={"addFullMargins"} id="colorWheelDemo"&gt;
                                                                &lt;label for="favoriteColor"&gt;Select Your Favorite Color&lt;/label&gt;
                                                                <span
                                                                    className={"setToComplimentary2 overrideFontTo4"}>&lt;input id="favoriteColor" type="color" name="favoriteColor" value="#ff0000" /&gt;</span>
                                                                &lt;/form&gt;
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
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_5">
                            {SectionPageHeader("Text Area", "Multi-Line Text Input")}
                            <div id="textArea">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <p className="bodyText_3">
                                            To create a textarea field, specify a set of opening and
                                            closing &lt;textarea&gt; Tags.
                                            It is used to create a multiline text input.
                                        </p>
                                        <p className="bodyText_3">
                                            Unlike other input elements, this is not an empty
                                            element: <strong>&lt;textarea&gt;&lt;/textarea&gt;</strong>
                                        </p>
                                        <p className="bodyText_3">
                                            Any text between the opening and closing &lt;textarea&gt; Tag will be
                                            displayed in the
                                            textbox when the page loads. If the user does not delete any text between
                                            the tags, whatever is
                                            in the box will be sent to the server along with what the user typed.
                                        </p>
                                        <p className="bodyText_3">
                                            Some sites might implement and use JavaScript to clear this information when
                                            the user clicks into
                                            the textbox. Which is not out of the box for HTML5.
                                        </p>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <form action="/" className={"addFullMargins"} id="formTextArea">
                                                    <label htmlFor="textArea">
                                                        What do you think?
                                                        <br/>
                                                        <textarea>Enter your thoughts here....</textarea>
                                                    </label>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                    <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="formTextArea"&gt;
                        &lt;label for="textArea"&gt;
                        What do you think?
                        &lt;br/&gt;
                        &lt;textarea&gt;Enter your thoughts here....&lt;/textarea&gt;
                        &lt;/label&gt;
                        &lt;/form&gt;
                    </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_6">
                            {SectionPageHeader("Radios And Checkboxes", "Making Selections")}
                            <div id="radioAndCheckboxes">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs" id="radioAndCheckboxExamplesTabber" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="radio-tab" data-bs-toggle="tab"
                                                        data-bs-target="#radio-tab-pane" type="button" role="tab"
                                                        aria-controls="radio-tab-pane" aria-selected="true">Radios
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="checkbox-tab" data-bs-toggle="tab"
                                                        data-bs-target="#checkbox-tab-pane" type="button" role="tab"
                                                        aria-controls="checkbox-tab-pane"
                                                        aria-selected="false">Checkboxes
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="radioAndCheckboxExamplesTabberContent">
                                            <div className="tab-pane fade show active" id="radio-tab-pane"
                                                 role="tabpanel" aria-labelledby="radio-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-5">
                                                        <h5>The &lt;input type="radio"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            Radio buttons allow users to pick only one (1) of a set of
                                                            options. The <strong>checked</strong>
                                                            attribute can be used to indicate which value (if any)
                                                            should be selected when the page loads.
                                                            The value of the attribute is <em>"checked"</em>. Only one
                                                            radio button in a group should use this
                                                            attribute if provided.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            Once a radio button has been selected, it cannot be
                                                            deselected. The user can only select a different
                                                            option. If you are only allowing the user one option and
                                                            want them to be able to deselect it,
                                                            you should use a checkbox instead.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            There are two (2) key factors in choosing between a radio
                                                            button group and a dropdown list box:
                                                        </p>
                                                        <ol className={"introductionList__outerList"}>
                                                            <li className={"pb-3 bulletItem"}>If users need to see all options at a glance, radio
                                                                buttons are better
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>If there is a very long list of options such as
                                                                countries, dropdown list boxes work better.
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div className={"col-lg-4 setGreyRightBorder"}>
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <form action="#" className={"addFullMargins"} id="radioBtnsDemo">
                                                            <label>
                                                                Please select your favorite book genre:
                                                                <br/>
                                                                <input type="radio" name="genre"
                                                                       value="nonFiction"/> Non-Fiction <br/>
                                                                <input type="radio" name="genre" value="Fantasy"
                                                                       checked={true}/> Fantasy <br/>
                                                                <input type="radio" name="genre" value="Horror"/> Horror
                                                            </label>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        <pre className={"overrideFontTo5"}>
&lt;form action="#" className={"addFullMargins"} id="radioBtnsDemo"&gt;
                                                            &lt;label&gt;
                                                            Please select your favorite book genre:
                                                            &lt;br/&gt;
                                                            &lt;input <span
                                                            className={"setToComplimentary2 overrideFontTo4"}>type="radio"</span> name="genre" value="nonFiction" /&gt; Non-Fiction &lt;br/&gt;
                                                            &lt;input <span
                                                            className={"setToComplimentary2 overrideFontTo4"}>type="radio"</span> name="genre" value="Fantasy" checked={true} /&gt; Fantasy &lt;br/&gt;
                                                            &lt;input <span
                                                            className={"setToComplimentary2 overrideFontTo4"}>type="radio"</span> name="genre" value="Horror" /&gt; Horror
                                                            &lt;/label&gt;
                                                            &lt;/form&gt;
                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="checkbox-tab-pane" role="tabpanel"
                                                 aria-labelledby="checkbox-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-5">
                                                        <h5>The &lt;input type="checkbox"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            Checkboxes allow users to pick between many of a set of
                                                            options by selecting or deselecting them.
                                                            Useful for gathering a list of options or determining the
                                                            functionality of site visits.
                                                        </p>
                                                    </div>
                                                    <div className={"col-lg-4 setGreyRightBorder"}>
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <form action="/" className={"addFullMargins"} id="checkboxDemo">
                                                            <label>
                                                                Do you agree to:
                                                                <br/>
                                                                <input type="checkbox" name="formAgreements"
                                                                       value="nonFiction"/> Use Site Cookies <br/>
                                                                <input type="checkbox" name="formAgreements"
                                                                       value="Fantasy" checked={true}/> Allow Address
                                                                GeoCoding <br/>
                                                                <input type="checkbox" name="formAgreements"
                                                                       value="Horror"/> Terms & Conditions
                                                            </label>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="formCheckboxes"&gt;
                                                            &lt;label&gt;
                                                            Do you agree to:
                                                            &lt;br/&gt;
                                                            &lt;input <span
                                                            className={"setToComplimentary2 overrideFontTo4"}>type="checkbox"</span> name="formAgreements" value="nonFiction" /&gt; Use Site Cookies &lt;br/&gt;
                                                            &lt;input <span
                                                            className={"setToComplimentary2 overrideFontTo4"}>type="checkbox"</span> name="formAgreements" value="Fantasy" checked={true} /&gt; Allow Address GeoCoding &lt;br/&gt;
                                                            &lt;input <span
                                                            className={"setToComplimentary2 overrideFontTo4"}>type="checkbox"</span> name="formAgreements" value="Horror" /&gt; Terms & Conditions
                                                            &lt;/label&gt;
                                                            &lt;/form&gt;
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
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_7">
                            {SectionPageHeader("Multi-Selects & Dropdowns", "Two More Ways To Select!")}
                            <div id="multiSelectsAndDropdowns">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs fullMarginDouble" id="dropdownAndMSBExamplesTabber" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="dropdown-tab"
                                                        data-bs-toggle="tab" data-bs-target="#dropdown-tab-pane"
                                                        type="button" role="tab" aria-controls="dropdown-tab-pane"
                                                        aria-selected="true">Dropdown
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="msb-tab" data-bs-toggle="tab"
                                                        data-bs-target="#msb-tab-pane" type="button" role="tab"
                                                        aria-controls="msb-tab-pane" aria-selected="false">Multi-Select
                                                    Box
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="dropdownAndMSBExamplesTabberContent">
                                            <div className="tab-pane fade show active" id="dropdown-tab-pane"
                                                 role="tabpanel" aria-labelledby="dropdown-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <p className="bodyText_3">A dropdown list allows users to
                                                            select one option from a list.</p>
                                                        <ul>
                                                            <li className={"pb-3 bulletItem"}>
                                                                The &lt;select&gt; Tag
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The &lt;select&gt; Tag is used to create a
                                                                        dropdown list box. It contains two or
                                                                        more &lt;option&gt;
                                                                        elements.
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>
                                                                The &lt;option&gt; Tag
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The &lt;option&gt; element is used to specify
                                                                        the options that the user can select from. The
                                                                        words
                                                                        between the opening and
                                                                        closing &lt;option&gt; Tag will be shown to the
                                                                        user in the dropdown.
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The <strong>value</strong> Attribute
                                                                        <ul>
                                                                            <li className={"pb-3 bulletItem"}>
                                                                                The &lt;option&gt; Tag uses
                                                                                the <em>value</em> attribute to indicate
                                                                                the value that is sent
                                                                                to the server along with the name of the
                                                                                control if the option is selected.
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The <strong>selected</strong> Attribute
                                                                        <ul>
                                                                            <li className={"pb-3 bulletItem"}>
                                                                                The &lt;option&gt; Tag uses
                                                                                the <em>selected</em> attribute to set
                                                                                the value of the dropdown
                                                                                field when the page loads. If the
                                                                                selected attribute is not provided, the
                                                                                page will load the first
                                                                                option. If a user does not select an
                                                                                option, the first option will be sent to
                                                                                the server on form
                                                                                submission.
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <p className="bodyText_3">
                                                            There are two (2) key factors in choosing between a radio
                                                            button group and a dropdown list box:
                                                        </p>
                                                        <ol className={"introductionList__outerList"}>
                                                            <li className={"pb-3 bulletItem"}>If users need to see all options at a glance, radio
                                                                buttons are better
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>If there is a very long list of options such as
                                                                countries, dropdown list boxes work better.
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"}
                                                                  id="formDropdownDemo">
                                                                <label htmlFor="osDropdownPreference">What is your
                                                                    preferred Arch-Linux OS?</label>
                                                                <select name="osDropdownPreference"
                                                                        id="osDropdownPreference">
                                                                    <option value="archBang">ArchBang</option>
                                                                    <option value="artixLinux">Artix Linux</option>
                                                                    <option value="archLabs">ArchLabs</option>
                                                                    <option value="blackArch">BlackArch</option>
                                                                    <option value="endeavourOS">EndeavourOS</option>
                                                                    <option value="garudaLinux">Garuda Linux</option>
                                                                    <option value="steamOS">SteamOS</option>
                                                                    <option value="manjaro">Manjaro</option>
                                                                </select>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="formDropdownDemo"&gt;
                                                                &lt;label for="osDropdownPreference"&gt;What is your preferred Arch-Linux OS?&lt;/p&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>select</span> name="osDropdownPreference"&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="archBang"&gt;ArchBang&lt;/option&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="artixLinux"&gt;Artix Linux&lt;/option&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="archLabs"&gt;ArchLabs&lt;/option&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="blackArch"&gt;BlackArch&lt;/option&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="endeavourOS"&gt;EndeavourOS&lt;/option&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="garudaLinux"&gt;Garuda Linux&lt;/option&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="steamOS"&gt;SteamOS&lt;/option&gt;
                                                                &lt;<span
                                                                className={"overrideFontTo3 setToComplimentary3"}>option</span> value="manjaro"&gt;Manjaro&lt;/option&gt;
                                                                &lt;/<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>select</span>&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="msb-tab-pane" role="tabpanel"
                                                 aria-labelledby="msb-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <p className="bodyText_3">
                                                            A multiple select box allows users to select more than one
                                                            option. It contains two or more
                                                            &lt;option&gt; elements. Unfortunately the way browsers have
                                                            implemented this attribute is not
                                                            perfect, and it should be tested thoroughly if used. In
                                                            particular on FireFox and Safari on MAC.
                                                        </p>
                                                        <ul>
                                                            <li className={"pb-3 bulletItem"}>
                                                                The &lt;select&gt; Tag
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        To use a multiple select box, use the
                                                                        implementation of a dropdown list, but add
                                                                        the <strong>multiple</strong>
                                                                        attribute set to <em>"multiple"</em> to
                                                                        the &lt;select&gt; Tag.
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>
                                                                The &lt;option&gt; Tag
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        <strong>Same As Described in the
                                                                            Dropdown &lt;option&gt; Tag Section</strong>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-5 setGreyRightBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"}
                                                                  id="formMultiSelectDemo">
                                                                <label htmlFor="msbOSPreference">What is your preferred
                                                                    Arch-Linux OS?</label>
                                                                <select multiple={true} name="msbOSPreference"
                                                                        id="msbOSPreference">
                                                                    <option value="archBang">ArchBang</option>
                                                                    <option value="artixLinux">Artix Linux</option>
                                                                    <option value="archLabs">ArchLabs</option>
                                                                    <option value="blackArch">BlackArch</option>
                                                                    <option value="endeavourOS">EndeavourOS</option>
                                                                    <option value="garudaLinux">Garuda Linux</option>
                                                                    <option value="steamOS">SteamOS</option>
                                                                    <option value="manjaro">Manjaro</option>
                                                                </select>
                                                                <p className="mt-2">
                                                                    <small>
                                                                        It is a good idea to tell users if they can
                                                                        select more than one option at a time.
                                                                        It is also helpful to indicate that on a PC they
                                                                        should hold down
                                                                        the <strong>control</strong> key
                                                                        while selecting multiple options and on a Mac
                                                                        they should use the <strong>command</strong> key
                                                                        while
                                                                    </small>
                                                                </p>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" className={"addFullMargins"} id="formMultiSelectDemo"&gt;
                                                                &lt;label for="msbOSPreference"&gt;What is your preferred Arch-Linux OS?&lt;/label&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>select</span>
      <span className={"overrideFontTo3 setToComplimentary3"}>multiple="multiple"</span>
      name="msbOSPreference"
      id="msbOSPreference"&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="archBang"&gt;ArchBang&lt;/option&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="artixLinux"&gt;Artix Linux&lt;/option&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="archLabs"&gt;ArchLabs&lt;/option&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="blackArch"&gt;BlackArch&lt;/option&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="endeavourOS"&gt;EndeavourOS&lt;/option&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="garudaLinux"&gt;Garuda Linux&lt;/option&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="steamOS"&gt;SteamOS&lt;/option&gt;
                                                                &lt;<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>option</span> value="manjaro"&gt;Manjaro&lt;/option&gt;
                                                                &lt;/<span
                                                                className={"setToComplimentary2 overrideFontTo3"}>select</span>&gt;
                                                                &lt;/form&gt;
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
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_8">
                            {SectionPageHeader("Uploads & Downloads", "Processing Files")}
                            <div id="fileIO">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs" id="fileTabber" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="uploads-tab"
                                                        data-bs-toggle="tab" data-bs-target="#uploads-tab-pane"
                                                        type="button" role="tab" aria-controls="uploads-tab-pane"
                                                        aria-selected="true">Uploads
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="downloads-tab" data-bs-toggle="tab"
                                                        data-bs-target="#downloads-tab-pane" type="button" role="tab"
                                                        aria-controls="downloads-tab-pane"
                                                        aria-selected="false">Downloads
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="fileTabberContent">
                                            <div className="tab-pane fade show active" id="uploads-tab-pane"
                                                 role="tabpanel" aria-labelledby="date-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12  w-100 m-auto my-3">
                                                        <p className="bodyText_3">The &lt;input
                                                            type="file"/&gt; Tag</p>
                                                        <p className="bodyText_3">
                                                            Developers may want to allow users to provide other formats
                                                            of data rather than just text or numerical
                                                            inputs, for instance, Users might be able to upload a photo
                                                            of themselves for a site avatar. In
                                                            these instances, developers need to provide the ability to
                                                            upload files and different file formats.
                                                            Another example would be when some online form requires
                                                            someone to upload a Driver's license.
                                                            To create an upload link, use:<br/>&lt;input
                                                            type="file"/&gt;
                                                        </p>
                                                        <ul>
                                                            <li className={"pb-3 bulletItem"}>
                                                                Some Available Attributes:
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The <strong>id</strong> Attribute
                                                                        <ul>
                                                                            <li className={"pb-3 bulletItem"}>
                                                                                The id attribute is used to identify the
                                                                                field with a unique name.
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The <strong>name</strong> Attribute
                                                                        <ul>
                                                                            <li className={"pb-3 bulletItem"}>
                                                                                The name attribute is used to indicate
                                                                                the name of the form control being sent
                                                                                to the server.
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The <strong>accept</strong> Attribute
                                                                        <ul>
                                                                            <li className={"pb-3 bulletItem"}>
                                                                                The accept attribute is used to restrict
                                                                                the types of files that may be uploaded
                                                                                and sent
                                                                                from the client to the server.
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The <strong>multiple</strong> Attribute
                                                                        <ul>
                                                                            <li className={"pb-3 bulletItem"}>
                                                                                The multiple attribute is used to give
                                                                                the user the ability to upload more than
                                                                                one (1) file
                                                                                at a time.
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em className="text-decoration-underline">Single File
                                                                Upload</em></h6>
                                                            <form action="#" id="fileUploadDemo" className="tablePanel2 partialPadding">
                                                                <div>
                                                                    <label htmlFor="image_upload">Choose image to upload
                                                                        (PNG, JPG)</label>
                                                                    <input
                                                                        className="mt-2"
                                                                        type="file"
                                                                        id="image_upload"
                                                                        name="image_upload"
                                                                    />
                                                                </div>
                                                                <div className="preview mt-3">
                                                                    <p>No files currently selected for upload</p>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" id="fileUploadDemo" className={"partialPadding"}&gt;
                                                                &lt;div&gt;
                                                                &lt;label for="image_upload"&gt;Choose image to upload (PNG, JPG)&lt;/label&gt;
                                                                &lt;input
    class="mt-2"
    <span className={"setToComplimentary2 overrideFontTo4"}>type="file"</span>
    id="image_upload"
    name="image_upload"
  /&gt;
                                                                &lt;/div&gt;
                                                                &lt;div class="preview mt-3"&gt;
                                                                &lt;p&gt;No files currently selected for upload&lt;/p&gt;
                                                                &lt;/div&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>

                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em className="text-decoration-underline">Multiple File
                                                                Upload</em></h6>
                                                            <form action="#" id="fileUploadsDemo"
                                                                  className="tablePanel2 partialPadding">
                                                                <div>
                                                                    <label htmlFor="image_uploads">Choose images to
                                                                        upload (PNG, JPG)</label>
                                                                    <input
                                                                        className="mt-2"
                                                                        type="file"
                                                                        id="image_uploads"
                                                                        name="image_uploads"
                                                                        accept=".jpg, .jpeg, .png"
                                                                        multiple/>
                                                                </div>
                                                                <div className="preview mt-3">
                                                                    <p>No files currently selected for upload</p>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" id="fileUploadsDemo" className={"partialPadding"}&gt;
                                                                &lt;div&gt;
                                                                &lt;label for="image_uploads"&gt;Choose images to upload (PNG, JPG)&lt;/label&gt;
                                                                &lt;input
      class="mt-2"
      <span className={"setToComplimentary2 overrideFontTo4"}>type="file"</span>
      id="image_uploads"
      name="image_uploads"
      <span
          className={"setToComplimentary3 overrideFontTo4"}>accept=".jpg, .jpeg, .png"</span>
      <span className={"setToComplimentary3 overrideFontTo4"}>multiple</span>
    /&gt;
                                                                &lt;/div&gt;
                                                                &lt;div class="preview mt-3"&gt;
                                                                &lt;p&gt;No files currently selected for upload&lt;/p&gt;
                                                                &lt;/div&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="downloads-tab-pane" role="tabpanel"
                                                 aria-labelledby="dtl-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <p className="bodyText_3">
                                                            The &lt;a download/&gt; Tag
                                                        </p>
                                                        <p className="bodyText_3">
                                                            Developers may also want to provide users the ability to
                                                            download files and information, for instance,
                                                            Users might need to be able to download bank statements or
                                                            reports.
                                                            To create an download link, use:<br/>
                                                            &lt;a download/&gt;
                                                        </p>
                                                        <ul>
                                                            <li className={"pb-3 bulletItem"}>
                                                                Specifying the <strong>download</strong> Attribute
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        The download attribute is used on
                                                                        an &lt;a/&gt; Tag to convert the general
                                                                        behavior of the
                                                                        tag so that rather than routing, it allows the
                                                                        user to receive a file of some type.
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form id="downloadsDemo" action="#">
                                                                <a className={"overrideFontTo3"}
                                                                   href="../../../../../img/cherimoyaLogo.png" download>Download
                                                                    Cherimoya Clock Logo</a>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form id="downloadsDemo" action="#"&gt;
                                                                <span
                                                                    className={"overrideFontTo5 setToComplimentary2"}>&lt;a</span>
    href="../../img/cherimoyaLogo.png"
    <span className={"overrideFontTo5 setToComplimentary3"}>download</span>
  <span className={"overrideFontTo5 setToComplimentary2"}>&gt;</span>Download Cherimoya Clock Logo<span
                                                                className={"overrideFontTo5 setToComplimentary2"}>&lt;/a&gt;</span>
                                                                &lt;/form&gt;
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
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_9">
                            {SectionPageHeader("Date/Time Inputs", "Accepting Dates")}
                            <div id="dateFields">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs fullMarginDouble" id="dateTimeTabber" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="date-tab" data-bs-toggle="tab"
                                                        data-bs-target="#date-tab-pane" type="button" role="tab"
                                                        aria-controls="date-tab-pane" aria-selected="true">Date
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="dtl-tab" data-bs-toggle="tab"
                                                        data-bs-target="#dtl-tab-pane" type="button" role="tab"
                                                        aria-controls="dtl-tab-pane"
                                                        aria-selected="false">DateTime-Local
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="time-tab" data-bs-toggle="tab"
                                                        data-bs-target="#time-tab-pane" type="button" role="tab"
                                                        aria-controls="time-tab-pane" aria-selected="false">Time
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="month-tab" data-bs-toggle="tab"
                                                        data-bs-target="#month-tab-pane" type="button" role="tab"
                                                        aria-controls="month-tab-pane" aria-selected="false">Month
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="week-tab" data-bs-toggle="tab"
                                                        data-bs-target="#week-tab-pane" type="button" role="tab"
                                                        aria-controls="#week-tab-pane" aria-selected="false">Week
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content fullMarginDouble" id="dateTimeTabberContent">
                                        <div className="tab-pane fade show active" id="date-tab-pane"
                                             role="tabpanel" aria-labelledby="date-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <h5>The &lt;input type="date"/&gt; Tag</h5>
                                                    <p className="bodyText_3">
                                                        When the type attribute has a value of <em>date</em> it
                                                        defines a date control (year, month, day) but
                                                        no time is included. The label Tag should always be added
                                                        for accessibility.
                                                    </p>
                                                </div>
                                                <div className="row col-lg-12 col-sm-12">
                                                    <div className={"col-lg-4 setGreyRightBorder"}>
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <form action="#" className={"addFullMargins"} id="dateDemo">
                                                            <label htmlFor="selectedDate">Select A
                                                                Date:</label><br/>
                                                            <input type="date" id="selectedDate"
                                                                   name="selectedDate"/>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="dateDemo"&gt;
                                                            &lt;label for="selectedDate"&gt;Select A Date:&lt;/label&gt;&lt;br/&gt;
                                                            &lt;input <span
                                                            className={"overrideFontTo4 setToComplimentary2"}>type="date"</span> id="selectedDate" name="selectedDate"&gt;
                                                            &lt;/form&gt;
                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="dtl-tab-pane" role="tabpanel"
                                             aria-labelledby="dtl-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <h5>The &lt;input type="datetime-local"/&gt; Tag</h5>
                                                    <p className="bodyText_3">
                                                        When the type attribute has a value
                                                        of <em>datetime-local</em> it defines a date control (year,
                                                        month,
                                                        day, time, (no timezone)). The label Tag should always be
                                                        added for accessibility.
                                                    </p>
                                                </div>
                                                <div className="row col-lg-12 col-sm-12">
                                                    <div className={"col-lg-4 setGreyRightBorder"}>
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <form action="#" className={"addFullMargins"}
                                                              id="dateTimeLocalDemo">
                                                            <label htmlFor="selectedDateTimeLocal">Select A
                                                                DateTime-Local:</label>
                                                            <input type="datetime-local" id="selectedDateTimeLocal"
                                                                   name="selectedDateTimeLocal"/>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="dateTimeLocalDemo"&gt;
                                                            &lt;label
      for="selectedDateTimeLocal"
                                                            &gt;Select A DateTime-Local:&lt;/label&gt;
                                                            &lt;br/&gt;
                                                            &lt;input
      <span className={"overrideFontTo4 setToComplimentary2"}>type="datetime-local"</span>
      id="selectedDateTimeLocal" name="selectedDateTimeLocal"
  /&gt;
                                                            &lt;/form&gt;
                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="time-tab-pane" role="tabpanel"
                                             aria-labelledby="time-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <h5>The &lt;input type="time"/&gt; Tag</h5>
                                                    <p className="bodyText_3">
                                                        When the type attribute has a value of <em>time</em> it
                                                        defines a control for entering a time (
                                                        no timezone). The label Tag should always be added for
                                                        accessibility.
                                                    </p>
                                                </div>
                                                <div className="row col-lg-12 col-sm-12">
                                                    <div className={"col-lg-4 setGreyRightBorder"}>
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <form action="/" className={"addFullMargins"} id="timeDemo">
                                                            <label htmlFor="enteredTime">Enter A Time:</label>
                                                            <br/>
                                                            <input type="time" id="enteredTime" name="enteredTime"/>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        <pre className={"overrideFontTo5"}>
 &lt;form action="/" className={"addFullMargins"} id="timeDemo"&gt;
                                                            &lt;label
      for="enteredTime"
                                                            &gt;Enter A Time:&lt;/label&gt;
                                                            &lt;br/&gt;
                                                            &lt;input
      <span className={"overrideFontTo4 setToComplimentary2"}>type="time"</span>
      id="enteredTime" name="enteredTime"
  /&gt;
                                                            &lt;/form&gt;
                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="month-tab-pane" role="tabpanel"
                                             aria-labelledby="month-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <h5>The &lt;input type="month"/&gt; Tag</h5>
                                                    <p className="bodyText_3">
                                                        When the type attribute has a value of <em>month</em> it
                                                        defines a control for month and year (
                                                        no timezone). The label Tag should always be added for
                                                        accessibility.
                                                    </p>
                                                    <p className="textEntry_1 setToComplimentary2">
                                                        The expected field format is: <strong>"YYYY-MM"</strong>
                                                    </p>
                                                </div>
                                                <div className="row col-lg-12 col-sm-12">
                                                    <div className={"col-lg-4 setGreyRightBorder"}>
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <form action="/" className={"addFullMargins"} id="monthDemo">
                                                            <label htmlFor="enteredMonthYear">Enter A Month and Year
                                                                in the Format YYYY-MM:</label>
                                                            <input type="month" id="enteredMonthYear"
                                                                   name="enteredMonthYear"/>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        <pre className={"overrideFontTo5"}>
 &lt;form action="/" className={"addFullMargins"} id="monthDemo"&gt;
                                                            &lt;label
      for="enteredMonthYear"
                                                            &gt;Enter A Month and Year in the Format YYYY-MM:&lt;/label&gt;
                                                            &lt;input
      <span className={"overrideFontTo4 setToComplimentary2"}>type="month"</span>
      id="enteredMonthYear" name="enteredMonthYear"
  /&gt;
                                                            &lt;/form&gt;
                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="week-tab-pane" role="tabpanel"
                                             aria-labelledby="week-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <h5>The &lt;input type="week"/&gt; Tag</h5>
                                                    <p className="bodyText_3">
                                                        When the type attribute has a value of <em>week</em> it
                                                        defines a week and year control (no time zone).
                                                        The label Tag should always be added for accessibility.
                                                    </p>
                                                    <p className="textEntry_1 setToComplimentary2">Some browsers
                                                        may not display this field correctly.</p>
                                                </div>
                                                <div className="row col-lg-12 col-sm-12">
                                                    <div className={"col-lg-4 setGreyRightBorder"}>
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <form action="/" className={"addFullMargins"} id="weekDemo">
                                                            <label htmlFor="enteredWeek">Enter A Week:</label>
                                                            <input type="week" id="enteredWeek" name="enteredWeek"/>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="weekDemo"&gt;
                                                            &lt;label for="enteredWeek"&gt;Enter A Week:&lt;/label&gt;
                                                            &lt;input <span
                                                            className={"overrideFontTo4 setToComplimentary2"}>type="week"</span> id="enteredWeek" name="enteredWeek" /&gt;
                                                            &lt;/form&gt;
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
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_10">
                            {SectionPageHeader("Buttons & Hidden Controls", "")}
                            <div id="buttonsAndHiddenFields">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs fullMarginDouble" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="image-tab" data-bs-toggle="tab"
                                                        data-bs-target="#image-tab-pane" type="button" role="tab"
                                                        aria-controls="image-tab-pane" aria-selected="true">Image
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="reset-tab" data-bs-toggle="tab"
                                                        data-bs-target="#reset-tab-pane" type="button" role="tab"
                                                        aria-controls="reset-tab-pane" aria-selected="false">Reset
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="search-tab" data-bs-toggle="tab"
                                                        data-bs-target="#search-tab-pane" type="button" role="tab"
                                                        aria-controls="search-tab-pane" aria-selected="false">Search
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="submit-tab" data-bs-toggle="tab"
                                                        data-bs-target="#submit-tab-pane" type="button" role="tab"
                                                        aria-controls="submit-tab-pane" aria-selected="false">Submit
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="hidden-tab" data-bs-toggle="tab"
                                                        data-bs-target="#hidden-tab-pane" type="button" role="tab"
                                                        aria-controls="#hidden-tab-pane" aria-selected="false">Hidden
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content fullMarginDouble" id="myTabContent">
                                            <div className="tab-pane fade show active" id="image-tab-pane"
                                                 role="tabpanel" aria-labelledby="image-tab">
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The &lt;input type="image"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>image</em> it
                                                            defines an image as a submit button.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            A <strong>src</strong> attribute must be specified for the
                                                            location of the image.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="imgBtnDemo">
                                                                <input type="image"
                                                                       src="../../../../../img/orangeBtn.jpg" width="50"
                                                                       height="50" alt="Submit Form"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="formImgBtn"&gt;
                                                                &lt;input
    <span className={"overrideFontTo4 setToComplimentary2"}>type="image"</span>
    src="../../img/orangeBtn.jpg"
    width="50"
    height="50"
    alt="Submit Form"
  /&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="reset-tab-pane" role="tabpanel"
                                                 aria-labelledby="reset-tab">
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The &lt;input type="reset"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>reset</em> it
                                                            defines a reset button which resets all
                                                            form values to its initial values.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            Avoid reset buttons in your forms unless a check is
                                                            performed prior to proceeding with a reset.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="/" className={"addFullMargins"} id="formResetBtn">
                                                                <label htmlFor="resetEmail">Enter your email:</label>
                                                                <input type="email" id="resetEmail"
                                                                       name="resetEmail"/><br/><br/>
                                                                <input type="reset" value="Reset"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="resetBtnDemo"&gt;
                                                                &lt;label for="resetEmailDemo"&gt;Enter your email:&lt;/label&gt;
                                                                &lt;input type="email" id="resetEmailDemo" name="resetEmail"&gt;&lt;br&gt;&lt;br&gt;
                                                                &lt;input <span
                                                                className={"overrideFontTo4 setToComplimentary2"}>type="reset"</span> value="Reset"&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="search-tab-pane" role="tabpanel"
                                                 aria-labelledby="search-tab">
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The &lt;input type="search"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>search</em> it
                                                            defines a text field for entering a
                                                            search string.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            Remember to set a name for the search field, otherwise
                                                            nothing will be submitted.
                                                            The most common name for search inputs is q. And always add
                                                            a label for accessibility.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="formBtnSearch">
                                                                <label htmlFor="gsearch">Search Google:</label>
                                                                <input type="search" id="gsearch" name="gsearch"/>
                                                                <input type="submit" className="mt-2"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" className={"addFullMargins"} id="formBtnSearch"&gt;
                                                                &lt;label for="gsearch"&gt;Search Google:&lt;/label&gt;
                                                                &lt;input type="search" id="gsearch" name="gsearch" /&gt;
                                                                &lt;input <span
                                                                className={"overrideFontTo4 setToComplimentary2"}>type="search"</span> /&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="submit-tab-pane" role="tabpanel"
                                                 aria-labelledby="submit-tab">
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The &lt;input type="submit"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>submit</em> it
                                                            defines a submit button which submits
                                                            all form values to a form-handler.
                                                            <br/>
                                                            The form-handler is typically a server page with a script
                                                            for processing the input data.
                                                            <br/>
                                                            The form-handler is specified in the
                                                            form's <strong>action</strong> attribute.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="formSubmitBtn">
                                                                <input type="submit"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" className={"addFullMargins"} id="formSubmitBtn"&gt;
                                                                &lt;input
      <span className={"overrideFontTo4 setToComplimentary2"}>type="submit"</span>
  /&gt;
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="hidden-tab-pane" role="tabpanel"
                                                 aria-labelledby="submit-tab">
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5 className={"overrideFontTo4 setToComplimentary2"}>Do
                                                            not use hidden inputs as a form of security!</h5>
                                                        <h5>The &lt;input type="hidden"/&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When the type attribute has a value of <em>hidden</em> it
                                                            defines a hidden input field.
                                                            <br/>
                                                            A hidden field lets web developers include data that cannot
                                                            be seen by users when a form
                                                            is submitted.
                                                            <br/>
                                                            <span
                                                                className={"overrideFontTo4 setToComplimentary2"}>While the value is not displayed to the user in the page's content, it is visible (and can be edited)
                  using any browser's developer tools or "View Source" functionality.</span>
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="formbtnHidden">
                                                                <button>
                                                                    <img src="../../../../../img/addBtn.png" alt="add"
                                                                         width="50" height="50"/>
                                                                    Bookmark Page
                                                                </button>
                                                                <input type="hidden" name="bookmark" value="pageId"/>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="/" className={"addFullMargins"} id="formbtnHidden"&gt;
                                                                &lt;button&gt;
                                                                &lt;img
        src="../../img/addBtn.png"
        alt="add"
        width="50"
        height="50"
/&gt;
                                                                Bookmark Page
                                                                &lt;/button&gt;
                                                                &lt;input
      <span className={"overrideFontTo4 setToComplimentary2"}>type="hidden"</span>
      name="bookmark"
      value="pageId"
  /&gt;
                                                                &lt;/form&gt;
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
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_11">
                            {SectionPageHeader("Labelling & Grouping Form Controls", "")}
                            <div id="labellingAndGroupingFormControls">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs fullMarginDouble" id="formLabelsAndGroupsTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="labelling-tab"
                                                        data-bs-toggle="tab" data-bs-target="#labelling-tab-pane"
                                                        type="button" role="tab" aria-controls="labelling-tab-pane"
                                                        aria-selected="true">Labels
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="grouping-tab" data-bs-toggle="tab"
                                                        data-bs-target="#grouping-tab-pane" type="button" role="tab"
                                                        aria-controls="grouping-tab-pane" aria-selected="false">Grouping
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content fullMarginDouble" id="formLabelsAndGroupsTabContent">
                                            <div className="tab-pane fade show active" id="labelling-tab-pane"
                                                 role="tabpanel" aria-labelledby="labelling-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The &lt;label&gt; Tag</h5>
                                                        <p className="bodyText_3">
                                                            When introducing form controls, the code should have its
                                                            own &lt;label&gt; Tag as this makes the form
                                                            accessible to vision impaired users.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            &lt;label&gt; Tag can be used in two (2) ways:
                                                        </p>
                                                        <ol className={"introductionList__outerList"}>
                                                            <li className={"pb-3 bulletItem"}>
                                                                Wrap around both the text description and the form
                                                                input.
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>
                                                                Be kept separate from the form control and use
                                                                the <strong>for</strong> attribute to indicate which
                                                                form control it is a label for.
                                                                <br/>
                                                                A <strong>for</strong> attribute must be specified and
                                                                set to the id value of the input field.
                                                            </li>
                                                        </ol>
                                                        <hr/>
                                                        <p className="bodyText_3">
                                                            The <strong>for</strong> Attribute states which form control
                                                            the label belongs to.
                                                            The value of the for attribute matches the id attribute on
                                                            the form control it is labelling.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            As a rule of thumb, the best practices for placing labels on
                                                            form controls:
                                                        </p>
                                                        <div className="row col-lg-12">
                                                            <div className="col-lg-6">
                                                                <p className="bodyText_3">Above or to the Left of a
                                                                    Form Control:</p>
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>Text Inputs</li>
                                                                    <li className={"pb-3 bulletItem"}>Text Areas</li>
                                                                    <li className={"pb-3 bulletItem"}>Select Boxes</li>
                                                                    <li className={"pb-3 bulletItem"}>File Uploads</li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <p className="bodyText_3">To the Right of a Form
                                                                    Control:</p>
                                                                <ul>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        Individual Checkboxes
                                                                    </li>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        Individual Radios
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-4 setGreyRightBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="labellingDemo">
                                                                <label>
                                                                    Age:
                                                                    <input type="number" name="age"/>
                                                                </label>
                                                                <br/>
                                                                <input id="cat" type="radio" name="pet" value="cat"/>
                                                                <label htmlFor="cat">Cat</label>
                                                                <input id="dog" type="radio" name="pet" value="dog"/>
                                                                <label htmlFor="dog">Dog</label>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" className={"addFullMargins"} id="labellingDemo"&gt;
                                                                <span
                                                                    className={"overrideFontTo4 setToComplimentary2"}>&lt;label&gt;</span>
    Age:
                                                                &lt;input type="number" name="age" /&gt;
                                                                <span
                                                                    className={"overrideFontTo4 setToComplimentary2"}>&lt;/label&gt;</span>
                                                                &lt;br/&gt;
                                                                &lt;input id="cat" type="radio" name="pet" value="cat" /&gt;
                                                                <span
                                                                    className={"overrideFontTo4 setToComplimentary2"}>&lt;label for="cat"&gt;Cat&lt;/label&gt;</span>
                                                                &lt;input id="dog" type="radio" name="pet" value="dog" /&gt;
                                                                <span
                                                                    className={"overrideFontTo4 setToComplimentary2"}>&lt;label for="dog"&gt;Dog&lt;/label&gt;</span>
                                                                &lt;/form&gt;
                        </pre>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="grouping-tab-pane" role="tabpanel"
                                                 aria-labelledby="grouping-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The &lt;fieldset&gt; and &lt;legend&gt; Tags</h5>
                                                        <p className="bodyText_3">
                                                            Related form controls can be grouped together inside
                                                            the &lt;fieldset&gt; Tag. This is particularly
                                                            helpful for longer forms.
                                                        </p>
                                                        <p className="bodyText_3">
                                                            Most browsers will show the &lt;fieldset&gt; Tag with a line
                                                            around the edge to show how they are
                                                            related. The appearance of the lines should be adjusted
                                                            using CSS.
                                                        </p>
                                                        <hr/>
                                                        <p className="bodyText_3">
                                                            The &lt;legend&gt; Tag should contain a caption which best
                                                            describes or identifies the purpose
                                                            of that group of form controls.
                                                        </p>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <form action="#" className={"addFullMargins"} id="groupingDemo">
                                                                <fieldset>
                                                                    <legend>Contact Details</legend>
                                                                    <label>
                                                                        Email:<br/>
                                                                        <input type="email" name="email"/>
                                                                    </label>
                                                                    <label>
                                                                        Mobile:<br/>
                                                                        <input type="tel" name="phone"/>
                                                                    </label>
                                                                    <label>
                                                                        city:<br/>
                                                                        <input type="text" name="city"/>
                                                                    </label>
                                                                </fieldset>
                                                            </form>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            <pre className={"overrideFontTo5"}>
&lt;form action="#" className={"addFullMargins"} id="groupingDemo"&gt;
                                                                <span
                                                                    className={"overrideFontTo4 setToComplimentary2"}>&lt;fieldset&gt;</span>
    <span
        className={"overrideFontTo4 setToComplimentary2"}>&lt;legend&gt;Contact Details&lt;/legend&gt;</span>
                                                                &lt;label&gt;
                                                                Email:&lt;br/&gt;
                                                                &lt;input type="email" name="email"/&gt;
                                                                &lt;/label&gt;
                                                                &lt;label&gt;
                                                                Mobile:&lt;br/&gt;
                                                                &lt;input type="tel" name="phone"/&gt;
                                                                &lt;/label&gt;
                                                                &lt;label&gt;
                                                                city:&lt;br/&gt;
                                                                &lt;input type="text" name="city"/&gt;
                                                                &lt;/label&gt;
                                                                <span
                                                                    className={"overrideFontTo4 setToComplimentary2"}>&lt;/fieldset&gt;</span>
                                                                &lt;/form&gt;
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
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_6_12">
                            {SectionPageHeader("Form Validation", "Validating HTML5 Form Controls")}
                            <div id="formValidationSection">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <p className="bodyText_3">
                                            Traditionally, form validation has been handled by JavaScript. But HTML5 has
                                            introduced validation
                                            to move the burden of work on the browser. Validation helps ensure the user
                                            enters information in
                                            a form that the server will be able to understand when the form is
                                            submitted. Validation of the contents
                                            of the form before it is sent to the server helps:
                                        </p>
                                        <ul>
                                            <li className={"pb-3 bulletItem"}>Reduce the amount of work the server has to do</li>
                                            <li className={"pb-3 bulletItem"}>
                                                Enables users to see if there are any problems with the form
                                                (vs validation on the server and something is bad and must be returned
                                                to be fixed.) <span className={"setToComplimentary2"}> This does not
                                                mean the backend should not perform its own validation. Values may be
                                                changed in-flight by hackers post form submission.
                                            </span>
                                            </li>
                                        </ul>
                                        <h6 className={"setToComplimentary2"}>

                                        </h6>
                                        <p className="bodyText_3">
                                            Some browsers may not support HTML5 validation though they are expected to
                                            follow.
                                            All use cases should be thoroughly tested. If in doubt, use JavaScript.
                                        </p>
                                    </div>
                                    <div className="row col-lg-12 col-sm-12">
                                        <div className={"col-lg-4 setGreyRightBorder"}>
                                            <h6><em className="text-decoration-underline">Implementation</em></h6>
                                            <form action="#formValidation" className={"addFullMargins"} id="formValidation">
                                                <div className={"row mb-3"}>
                                                    <label htmlFor="validateUsername">Username:</label>
                                                    <input id="validateUsername" type="email" required={true}/>
                                                </div>
                                                <div className={"row mb-5"}>
                                                    <label htmlFor="validatePassword">Password:</label>
                                                    <input id="validatePassword" type="password" required={true}
                                                           minLength={5}/>
                                                </div>
                                                <div className={"row"}>
                                                    <input type="submit" value="Try Me!" className="w-50 m-auto"/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-7">
                                            <div>
                                                <h6><em className="text-decoration-underline">Code</em></h6>
                                                {PreElement(
                                                    <>
                                                        <div className={"preStyleSet"}>
                                                            {"<form \n    action=\"#formValidation\" \n    className={\"addFullMargins\"} \n    id=\"formValidation\" \n>"}
                                                        </div>
                                                        <div className={"preStyleSet"}>
                                                            {"  <label for=\"validateUsername\">Username:</label>"}
                                                        </div>
                                                        <div className={"preStyleSet"}>
                                                            {"  <input id=\"validateUsername\" \n    type=\"email\" \n    required={true}>Username:\n  </input>"}
                                                        </div>
                                                        <div className={"preStyleSet"}>
                                                            {"  <label for=\"validatePassword\">Password:</label>"}
                                                        </div>
                                                        <div className={"preStyleSet"}>
                                                            {"  <input id=\"validatePassword\" \n    type=\"password\" \n    required={true} \n    minLength={5}>Password:\n  </input>"}
                                                        </div>
                                                        <div className={"preStyleSet"}>
                                                            {"  <input type=\"submit\" \n    value=\"Try Me!\" \n    className=\"mt-3\">Try Me!</input>"}
                                                        </div>
                                                        <div className={"preStyleSet"}>
                                                            {"</form>"}
                                                        </div>
                                                    </>
                                                )}
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