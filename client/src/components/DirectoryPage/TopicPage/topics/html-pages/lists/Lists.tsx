import "./Lists.scss";

export function SideNavigationData() {
    return {
        directory: "html-links",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML/5 Lists",
            links: [
                {
                    listOrder: 0,
                    text: "Ordered Lists",
                    url: "#htmlDir_2_0"
                },
                {
                    listOrder: 1,
                    text: "Unordered Lists",
                    url: "#htmlDir_2_1"
                },
                {
                    listOrder: 2,
                    text: "Definition Lists",
                    url: "#htmlDir_2_2"
                },
                {
                    listOrder: 3,
                    text: "Nested Lists",
                    url: "#htmlDir_2_3"
                }]
        }
    };
}

export default function Lists() {
    // @ts-ignore
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
                        <h1 className="text-center m-3 h1Styles">HTML/5 Lists</h1>
                        <div id="pagePreambles">
                            <p className="topicPreamble bodyText_2">
                                There are many occasions when developers need to use a list.
                            </p>
                            <p className="topicPreamble bodyText_2">
                                HTML provides developers with three (3) different types of lists:
                            </p>
                            <ol className={"bodyText_3"}>
                                <li className="bodyText_3">
                                    Ordered Lists
                                    <ul>
                                        <li>
                                            Each item in the list is numbered. Examples that need this type of list
                                            might be instructions,
                                            a recipe, etc.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Unordered Lists
                                    <ul>
                                        <li>
                                            Each item in the list is generically bulleted to denote no specific order.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Definition Lists
                                    <ul>
                                        <li>
                                            This list comprises a set of terms along with the definitions for those
                                            terms.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_2_1" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Ordered Lists</h2>
                                <p className={"bodyText_3"}>
                                    Generating A Numbered List
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="orderedList">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                To create an ordered list, two tags are used: &lt;ol&gt; and its child
                                                tag &lt;li&gt;
                                            </p>
                                            <ol className={"bodyText_2"}>
                                                <li className={"bodyText_3"}>
                                                    ol Tag &lt;ol&gt;
                                                    <ul>
                                                        <li>
                                                            Used to create an ordered list. Sometimes there might be
                                                            a <strong>type</strong> attribute attached
                                                            to the ol Tag used to specify the type of numbering
                                                            (letters, roman vs arabic numerals, etc.). It
                                                            is better to use the CSS list-style-type property instead.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"bodyText_3"}>
                                                    li Tag &lt;li&gt;
                                                    <ul>
                                                        <li>
                                                            Used to enclose each item in the list. Browsers indent lists
                                                            by default.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="col-lg-12">
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
                                            <div className="tab-content example1-container mb-4" id="pills-tabContent-1">
                                                <div className="tab-pane fade show active tablePanel3 p-3"
                                                     id="pills-olListExample1" role="tabpanel"
                                                     aria-labelledby="pills-olListExample1-tab">
                                                    <code>
                                                        &lt;ol&gt;<br/>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Chop potatoes
                                                            into quarters&lt;/li&gt;<br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Simmer in salted
                                                            water for 15-20 minutes until
                                                            tender&lt;/li&gt;<br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Heat butter,
                                                            milk, and nutmeg in a pot&lt;/li&gt;
                                                            <br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Drain potatoes
                                                            and mash&lt;/li&gt;<br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Mix in the
                                                            milk mixture&lt;/li&gt;<br/></div>
                                                        &lt;/ol&gt;<br/>
                                                    </code>
                                                </div>
                                                <div className="tab-pane fade tablePanel3 p-3" id="pills-olListExample2"
                                                     role="tabpanel" aria-labelledby="pills-olListExample2-tab">
                                                    <code>
                                                        &lt;ol type="I"&gt;<br/>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Chop potatoes
                                                            into quarters&lt;/li&gt;<br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Simmer in salted
                                                            water for 15-20 minutes until
                                                            tender&lt;/li&gt;<br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Heat butter,
                                                            milk, and nutmeg in a pot&lt;/li&gt;
                                                            <br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Drain potatoes
                                                            and mash&lt;/li&gt;<br/></div>
                                                        <div className={"exampleTextIndent"}>&lt;li&gt;Mix in the
                                                                milk mixture&lt;/li&gt;<br/></div>
                                                        &lt;/ol&gt;<br/>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tablePanel2">
                                            <div className="example p-3 bodyText_5">
                                                <small>Default Without Type Attr</small>
                                                <ol className="orderedListExample tablePanel3 olExample1 m-1">
                                                    <li>Chop potatoes into quarters</li>
                                                    <li>Simmer in salted water for 15-20 minutes until tender</li>
                                                    <li>Heat butter, milk, and nutmeg in a pot</li>
                                                    <li>Drain potatoes and mash</li>
                                                    <li>Mix in the milk mixture</li>
                                                </ol>
                                            </div>
                                            <div className="example p-3 bodyText_5">
                                                <small>With Type Attr [I]</small>
                                                <ol className="orderedListExample tablePanel3 m-1" type="I">
                                                    <li>Chop potatoes into quarters</li>
                                                    <li>Simmer in salted water for 15-20 minutes until tender</li>
                                                    <li>Heat butter, milk, and nutmeg in a pot</li>
                                                    <li>Drain potatoes and mash</li>
                                                    <li>Mix in the milk mixture</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_2_2" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2  className={"h2Styles"}>Unordered Lists</h2>
                                <p className={"bodyText_3"}>
                                    Generating A General List
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="unorderedList">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col">
                                            <div className="col-lg-12 col-sm-12">
                                                <p className="textEntry_1">
                                                    To create an unordered list, two tags are used: &lt;ul&gt; and its
                                                    child tag &lt;li&gt;
                                                </p>
                                                <ol className={"bodyText_2"}>
                                                    <li className={"bodyText_3"}>
                                                        ul Tag &lt;ul&gt;
                                                        <ul>
                                                            <li>
                                                                Used to create an unordered list. Sometimes there might
                                                                be a <strong>type</strong> attribute attached
                                                                to the ul Tag used to specify the type of bullet points
                                                                (circles, squares, diamonds, etc.). It
                                                                is better to use the CSS list-style-type property
                                                                instead.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={"bodyText_3"}>
                                                        li Tag &lt;li&gt;
                                                        <ul>
                                                            <li>
                                                                Used to enclose each item in the list. Browsers indent
                                                                lists by default.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="col-lg-12 col-sm-12 mb-4">
                                                <ul className="nav nav-pills mb-3" id="pills-tab-2" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active"
                                                                id="pills-ulListExample1-tab" data-bs-toggle="pill"
                                                                data-bs-target="#pills-ulListExample1" type="button"
                                                                role="tab" aria-controls="pills-ulListExample1"
                                                                aria-selected="true">Example 1
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="pills-ulListExample2-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-ulListExample2" type="button"
                                                                role="tab" aria-controls="pills-ulListExample2"
                                                                aria-selected="false">Example 2
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content example1-container" id="pills-tabContent-2">
                                                    <div className="tab-pane fade show active tablePanel3 p-3"
                                                         id="pills-ulListExample1" role="tabpanel"
                                                         aria-labelledby="pills-ulListExample1-tab">
                                                        <code>
                                                            &lt;ul&gt;<br/>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;1 lb/kg Potatoes&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;100ml milk&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;50g salted butter&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Freshly grated nutmeg&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Salt and pepper to taste&lt;/li&gt;
                                                            </div>
                                                            &lt;/ul&gt;
                                                        </code>
                                                    </div>
                                                    <div className="tab-pane fade tablePanel3 p-3"
                                                         id="pills-ulListExample2" role="tabpanel"
                                                         aria-labelledby="pills-ulListExample2-tab">
                                                        <code>
                                                            &lt;ul type="circle"&gt;<br/>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;1 lb/kg Potatoes&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;.5 cup/100ml milk&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;50g salted butter&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Freshly grated nutmeg&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Salt and pepper to taste&lt;/li&gt;
                                                            </div>
                                                            &lt;/ul&gt;
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tablePanel2">
                                            <div>
                                                <div className="example p-3 bodyText_5">
                                                    <small>Default Without Type Attr</small>
                                                    <ul className="tablePanel3 ulExmaple1 bodyText_5">
                                                        <li>1 lb/kg Potatoes</li>
                                                        <li>100ml milk</li>
                                                        <li>50g salted butter</li>
                                                        <li>Freshly grated nutmeg</li>
                                                        <li>Salt and pepper to taste</li>
                                                    </ul>
                                                </div>
                                                <div className="example p-3 bodyText_5">
                                                    <small>With Type Attr [circle]</small>
                                                    <ul className="tablePanel3 bodyText_5 circleExample">
                                                        <li>1 lb/kg Potatoes</li>
                                                        <li>.5 cup/100ml milk</li>
                                                        <li>50g salted butter</li>
                                                        <li>Freshly grated nutmeg</li>
                                                        <li>Salt and pepper to taste</li>
                                                    </ul>
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
                        <div id="htmlDir_2_3" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2  className={"h2Styles"}>Definition Lists</h2>
                                <p  className={"bodyText_3"}>
                                    Generating A Definitions List
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="definitionsSection">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col">
                                            <div className="col-lg-12">
                                                <p className="textEntry_1">
                                                    To create a definitions list, three tags are used: &lt;dl&gt; and
                                                    its children tags &lt;dt&gt; & &lt;dd&gt;
                                                </p>
                                                <ol>
                                                    <li>
                                                        dl Tag &lt;dl&gt;
                                                        <ul>
                                                            <li>
                                                                A definition list is created with the dl Tag and usually
                                                                consists of a series of terms and their
                                                                definitions.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        dt Tag &lt;dt&gt;
                                                        <ul>
                                                            <li>
                                                                Used to contain the term being defined (the definition
                                                                term).
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        dd Tag &lt;dd&gt;
                                                        <ul>
                                                            <li>
                                                                Used to contain the term's definition. It is possible to
                                                                see a list where there are two terms used
                                                                for the same definition or two different definitions for
                                                                the same term.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="col-lg-12 mb-4">
                                                <ul className="nav nav-pills mb-3" id="pills-tab-3" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active"
                                                                id="pills-definitionListExample1-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-definitionListExample1"
                                                                type="button" role="tab"
                                                                aria-controls="pills-definitionListExample1"
                                                                aria-selected="true">Example 1
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link"
                                                                id="pills-definitionListExample2-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-definitionListExample2"
                                                                type="button" role="tab"
                                                                aria-controls="pills-definitionListExample2"
                                                                aria-selected="false">Example 2
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content example1-container" id="pills-tabContent-3">
                                                    <div className="tab-pane fade show active tablePanel3 p-3"
                                                         id="pills-definitionListExample1" role="tabpanel"
                                                         aria-labelledby="pills-definitionListExample1-tab">
                                                        <code>
                                                            &lt;dl&gt;
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dt&gt;Bolt&lt;/dt&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dd&gt;To Secure; To Flee&lt;/dd&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dt&gt;Buckle&lt;/dt&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dd&gt;To Connect; To Collapse&lt;/dd&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dt&gt;Fast&lt;/dt&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dd&gt;Quick; Stuck or made stable&lt;/dd&gt;
                                                            </div>
                                                            &lt;/dl&gt;
                                                        </code>
                                                    </div>
                                                    <div className="tab-pane fade tablePanel3 p-3"
                                                         id="pills-definitionListExample2" role="tabpanel"
                                                         aria-labelledby="pills-definitionListExample2-tab">
                                                        <code>
                                                            &lt;dl&gt;
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dt&gt;Scale&lt;/dt&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dd&gt;A device used to accurately measure the weight
                                                                of ingredients&lt;/dd&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dd&gt;
                                                                A technique by which the scales are removed
                                                                from the skin of a fish.
                                                                &lt;/dd&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dt&gt;Scamorze&lt;/dt&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dt&gt;Scamorzo&lt;/dt&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;dd&gt;
                                                                <div className={"exampleTextIndent"}>
                                                                    An Italian cheese usually made from whole
                                                                cow's milk (the traditional milk was buffalo).
                                                                </div>
                                                                &lt;/dd&gt;
                                                            </div>
                                                            &lt;/dl&gt;
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tablePanel2">
                                            <div className="tablePanel3 p-3 bodyText_5">
                                                <h4>Contronyms</h4>
                                                <dl className="defListExample1">
                                                    <dt>Bolt</dt>
                                                    <dd>To Secure; To Flee</dd>
                                                    <dt>Buckle</dt>
                                                    <dd>To Connect; To Collapse</dd>
                                                    <dt>Fast</dt>
                                                    <dd>Quick; Stuck or made stable</dd>
                                                </dl>
                                            </div>
                                            <div className="tablePanel3 p-3 bodyText_5">
                                                <h4>Multiple Terms or
                                                    Definitions</h4>
                                                <dl className="defListExample2">
                                                    <dt>Scale</dt>
                                                    <dd>A device used to accurately measure the weight of ingredients
                                                    </dd>
                                                    <dd>A technique by which the scales are removed from the skin of a
                                                        fish.
                                                    </dd>
                                                    <dt>Scamorze</dt>
                                                    <dt>Scamorzo</dt>
                                                    <dd>An Italian cheese usually made from whole cow's milk (the
                                                        traditional milk was buffalo).
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents">
                        <div id="htmlDir_2_4" className="generalContainer">
                            <div className="sectionHeader">
                                <hr className="hrStyle"/>
                                <h2 className={"h2Styles"}>Nested Lists</h2>
                                <p  className={"bodyText_3"}>
                                    Creating Nested Lists
                                </p>
                                <hr className="hrStyle"/>
                            </div>
                            <div id="nestedLists">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col">
                                            <div className="col-lg-12">
                                                <p className="bodyText_3">
                                                    You can put a second list inside an &lt;li&gt; element to create a
                                                    sub-list or nested list. Browsers
                                                    display nested lists indented further than the parent list. In
                                                    nested unordered lists, the browser will
                                                    usually change the style of the bullet point too.
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                <ul className="nav nav-pills mb-3" id="pills-tab-4" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active"
                                                                id="pills-nestedExample1-tab" data-bs-toggle="pill"
                                                                data-bs-target="#pills-nestedExample1" type="button"
                                                                role="tab" aria-controls="pills-nestedExample1"
                                                                aria-selected="true">Example 1
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="pills-nestedExample2-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-nestedExample2" type="button"
                                                                role="tab" aria-controls="pills-nestedExample2"
                                                                aria-selected="false">Example 2
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content example1-container mb-4" id="pills-tabContent-4">
                                                    <div className="tab-pane fade show active tablePanel3 p-3"
                                                         id="pills-nestedExample1" role="tabpanel"
                                                         aria-labelledby="pills-nestedExample1-tab">
                                                        <code>
                                                            &lt;ol&gt;
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Mousses&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;
                                                                Pastries
                                                                <div className={"exampleTextIndent2"}>
                                                                    &lt;ol&gt;
                                                                </div>
                                                                <div className={"exampleTextIndent4"}>
                                                                    &lt;li&gt;Croissants&lt;/li&gt;
                                                                </div>
                                                                <div className={"exampleTextIndent4"}>
                                                                    &lt;li&gt;Mille-feuille&lt;/li&gt;
                                                                </div>
                                                                <div className={"exampleTextIndent4"}>
                                                                    &lt;li&gt;Palmier&lt;/li&gt;
                                                                </div>
                                                                <div className={"exampleTextIndent4"}>
                                                                    &lt;li&gt;Profiterole&lt;/li&gt;
                                                                </div>
                                                                <div className={"exampleTextIndent2"}>
                                                                    &lt;/ol&gt;
                                                                </div>
                                                                &lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Tarts&lt;/li&gt;
                                                            </div>
                                                            &lt;/ol&gt;
                                                        </code>
                                                    </div>
                                                    <div className="tab-pane fade tablePanel3 p-3"
                                                         id="pills-nestedExample2" role="tabpanel"
                                                         aria-labelledby="pills-nestedExample2-tab">
                                                        <code>
                                                            &lt;ul&gt;
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Mousses&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Pastries
                                                            </div>
                                                            <div className={"exampleTextIndent3"}>
                                                                &lt;ul&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent4"}>
                                                                &lt;li&gt;Croissants&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent4"}>
                                                                &lt;li&gt;Mille-feuille&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent4"}>
                                                                &lt;li&gt;Palmier&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent4"}>
                                                                &lt;li&gt;Profiterole&lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent3"}>
                                                                &lt;/ul&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;/li&gt;
                                                            </div>
                                                            <div className={"exampleTextIndent"}>
                                                                &lt;li&gt;Tarts&lt;/li&gt;
                                                            </div>
                                                            &lt;/ul&gt;
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tablePanel2">
                                            <div className="tablePanel3 bodyText_5">
                                                <small className="nestedListExample1">Nested Ordered List</small>
                                                <ol className="nestedListExample1">
                                                    <li>Mousses</li>
                                                    <li>
                                                        Pastries
                                                        <ol>
                                                            <li>Croissants</li>
                                                            <li>Mille-Feuille</li>
                                                            <li>Palmier</li>
                                                            <li>Profiterole</li>
                                                        </ol>
                                                    </li>
                                                    <li>Tarts</li>
                                                </ol>
                                            </div>
                                            <div className="tablePanel3 bodyText_5">
                                                <small className="nestedListExample2">Nested Unordered List</small>
                                                <ul className="nestedListExample2">
                                                    <li>Mousses</li>
                                                    <li>
                                                        Pastries
                                                        <ul>
                                                            <li>Croissants</li>
                                                            <li>Mille-feuille</li>
                                                            <li>Palmier</li>
                                                            <li>Profiterole</li>
                                                        </ul>
                                                    </li>
                                                    <li>Tarts</li>
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
        </>
    );
}