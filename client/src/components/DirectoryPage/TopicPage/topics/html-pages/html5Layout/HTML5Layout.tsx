import "./HTML5Layout.scss";
import {PElement} from "../../../../../shared/HTML_Elements/PElement/PElement";
import {MainPageHeader} from "../../../../../shared/PageSections/MainPageHeader/MainPageHeader";
import {PageIntroduction} from "../../../../../shared/PageSections/PageIntroduction/PageIntroduction";
import {SectionPageHeader} from "../../../../../shared/PageSections/SectionPageHeader/SectionPageHeader";
import {PreElement} from "../../../../../shared/HTML_Elements/PreElement/PreElement";
import {H3Sectional} from "../../../../../shared/PageSections/H3Sectional/H3Sectional";

import TeriyakiSauceImg from "../../../../../../assets/images/teriyaki_sauce.jpg";
import MizunaImg from "../../../../../../assets/images/jp-purple-mizuna.jpg";

export function SideNavigationData() {
    return {
        directory: "html-5layout",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML5 Layout",
            links: [
                {
                    listOrder: 0,
                    text: "1. The Header & Footer Elements",
                    url: "#htmlDir_7_1"
                },
                {
                    listOrder: 1,
                    text: "2. The Nav Element",
                    url: "#htmlDir_7_2"
                },
                {
                    listOrder: 2,
                    text: "3. The Article Element",
                    url: "#htmlDir_7_3"
                },
                {
                    listOrder: 3,
                    text: "4. The Aside Element",
                    url: "#htmlDir_7_4"
                },
                {
                    listOrder: 4,
                    text: "5. The Section Element",
                    url: "#htmlDir_7_5"
                },
                {
                    listOrder: 5,
                    text: "6. The HGroup Element",
                    url: "#htmlDir_7_6"
                },
                {
                    listOrder: 6,
                    text: "7. Escape Characters",
                    url: "#htmlDir_7_7"
                }
            ]
        }
    };
}

export default function HTML5Layout() {
    const
        pageTitle = "HTML5 Layout",
        pageIntroduction = (
            <>
                {PElement(
                    <>
                        HTML5 has introduced new sets of elements that help better define the structure of a page.
                    </>
                )}
                {H3Sectional("Traditional Layouts")}
                <p className={"overrideFontTo4"}>
                    For a long time, web page authors used &lt;div&gt; elements to group
                    together on a given page (such as
                    elements that form a header, an article, footer or sidebar). Authors
                    used <em>class</em> or <em>id</em> attributes to indicate the role of the &lt;div&gt; element in the
                    structure of the page.
                </p>
                {H3Sectional("Modern Layouts")}
                <p className={"overrideFontTo4"}>
                    HTML5 introduced a new set of elements that allow a developer to divide
                    up the parts of a page.
                    The names of these elements indicate the kind of content you will find
                    in them. The following
                    sections below describe them in better detail.
                </p>
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
                        <div id="htmlDir_7_1">
                            {SectionPageHeader("The Header & Footer Elements", "Adding Header and Footer Content")}
                            <div id="headerAndFooterElements">
                                <div className="row">
                                    <p className="bodyText_3">
                                        Two (2) new tags exist to help group
                                        content: &lt;header&gt; &amp; &lt;footer&gt;
                                    </p>
                                    <div className="col-lg-12 col-sm-12">
                                        <ul className="nav nav-tabs fullMarginDouble" id="headerAndFooterExamplesTabber" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="header-tab" data-bs-toggle="tab"
                                                        data-bs-target="#header-tab-pane" type="button" role="tab"
                                                        aria-controls="header-tab-pane" aria-selected="true">header
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="footer-tab" data-bs-toggle="tab"
                                                        data-bs-target="#footer-tab-pane" type="button" role="tab"
                                                        aria-controls="footer-tab-pane" aria-selected="false">footer
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content fullMarginDouble" id="headerAndFooterExamplesTabberContent">
                                            <div className="tab-pane fade show active" id="header-tab-pane"
                                                 role="tabpanel" aria-labelledby="globalId-tab" tabIndex={0}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The <strong>&lt;header&gt;</strong> Element</h5>
                                                        <p className="bodyText_3">
                                                            The <strong>&lt;header&gt;</strong> Element can be used for:
                                                        </p>
                                                        <ul>
                                                            <li className={"pb-3 bulletItem"}>
                                                                The main header that appears at the top of every page on
                                                                the site.
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>
                                                                A header for an
                                                                individual <strong>&lt;article&gt;</strong> or
                                                                <strong>&lt;section&gt;</strong> element.
                                                                Each <strong>&lt;article&gt;</strong> or
                                                                <strong>&lt;section&gt;</strong> element may have its
                                                                own <strong>&lt;header&gt;</strong> or
                                                                <strong>&lt;footer&gt;</strong> element for that section
                                                                within in the page.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-5" >
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <header className="example p-3 tablePanel2">
                                                                <h1>Yuki's Kitchen</h1>
                                                                <nav>
                                                                    <ul>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            <a href="#" className="active">Home</a>
                                                                        </li>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            <a href="#">Recipes</a>
                                                                        </li>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            <a href="#">About Japanese Ingredients</a>
                                                                        </li>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            <a href="#">Contact</a>
                                                                        </li>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            <a href="#">About</a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </header>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            {PreElement(<>
                                                                <div className={"preStyleSet"}>&lt;header&gt;</div>
                                                                <div className={"preStyleSet"}>   &lt;h1&gt;Yuki's Kitchen&lt;/h1&gt;</div>
                                                                <div className={"preStyleSet"}>   &lt;nav&gt;</div>
                                                                <div className={"preStyleSet"}>     &lt;ul&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;li&gt;</div>
                                                                <div className={"preStyleSet"}>         &lt;a href="/home" class="active"&gt;Home&lt;/a&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;/li&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;li&gt;</div>
                                                                <div className={"preStyleSet"}>         &lt;a href="/aboutJapaneseIngredients"&gt;About Japanese Ingredients&lt;/a&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;/li&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;li&gt;</div>
                                                                <div className={"preStyleSet"}>         &lt;a href="/recipes"&gt;Recipes&lt;/a&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;/li&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;li&gt;</div>
                                                                <div className={"preStyleSet"}>         &lt;a href="/contact" class="active"&gt;Contact&lt;/a&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;/li&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;li&gt;</div>
                                                                <div className={"preStyleSet"}>         &lt;a href="/aboutSite" class="active"&gt;About&lt;/a&gt;</div>
                                                                <div className={"preStyleSet"}>       &lt;/li&gt;</div>
                                                                <div className={"preStyleSet"}>     &lt;/ul&gt;</div>
                                                                <div className={"preStyleSet"}>   &lt;/nav&gt;</div>
                                                                <div className={"preStyleSet"}>&lt;/header&gt;</div>
                                                            </>)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="footer-tab-pane" role="tabpanel"
                                                 aria-labelledby="footer-tab" tabIndex={1}>
                                                <div className="row">
                                                    <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                        <h5>The <strong>&lt;footer&gt;</strong> Element</h5>
                                                        <p className="bodyText_3">
                                                            The <strong>&lt;footer&gt;</strong> Element can be used for:
                                                        </p>
                                                        <ul>
                                                            <li className={"pb-3 bulletItem"}>
                                                                The main footer that appears at the bottom of every page
                                                                on the site.
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>
                                                                A footer for an
                                                                individual <strong>&lt;article&gt;</strong> or
                                                                <strong>&lt;section&gt;</strong> element.
                                                                Each <strong>&lt;article&gt;</strong> or
                                                                <strong>&lt;section&gt;</strong> element may have its
                                                                own <strong>&lt;header&gt;</strong> or
                                                                <strong>&lt;footer&gt;</strong> element for that section
                                                                within in the page.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="row col-lg-12 col-sm-12">
                                                        <div className="col-lg-5 setGreyRightBorder">
                                                            <h6><em
                                                                className="text-decoration-underline">Implementation</em>
                                                            </h6>
                                                            <footer>
                                                                &copy; 1950 Yuki's Kitchen
                                                            </footer>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <h6><em className="text-decoration-underline">Code</em></h6>
                                                            {PreElement(<>
                                                                <div className={"preStyleSet"}>&lt;footer&gt;</div>
                                                                <div className={"preStyleSet"}>   &copy; 1950 Yuki's Kitchen</div>
                                                                <div className={"preStyleSet"}>&lt;/footer&gt;</div>
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

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_7_2">
                            {SectionPageHeader("The Nav Element", "A New Way To Define Navigation")}
                            <div id="theNavTag">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className="bodyText_3">
                                            The &lt;nav&gt; Tag is used to contain the major navigational blocks of a
                                            site such as the primary site
                                            navigation.
                                        </p>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <h6><em className="text-decoration-underline">Implementation</em></h6>
                                                <nav>
                                                    <ul>
                                                        <li className={"pb-3 bulletItem"}>
                                                            <a href="#" className="active">Home</a>
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            <a href="#">Recipes</a>
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            <a href="#">About Japanese Ingredients</a>
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            <a href="#">Contact</a>
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            <a href="#">About</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;nav&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;ul&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;li&gt;</div>
                                                    <div className={"preStyleSet"}>       &lt;a href="/home" class="active"&gt;Home&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;/li&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;li&gt;</div>
                                                    <div className={"preStyleSet"}>       &lt;a href="/recipes"&gt;Recipes&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;/li&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;li&gt;</div>
                                                    <div className={"preStyleSet"}>       &lt;a href="/aboutJapaneseIngredients"&gt;About Japanese Ingredients&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;/li&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;li&gt;</div>
                                                    <div className={"preStyleSet"}>       &lt;a href="/contact"&gt;Contact&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;/li&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;li&gt;</div>
                                                    <div className={"preStyleSet"}>       &lt;a href="/aboutSite"&gt;About&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;/li&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/ul&gt;</div>
                                                    <div className={"preStyleSet"}>&lt;/nav&gt;</div>
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
                        <div id="htmlDir_7_3">
                            {SectionPageHeader("The Article Element", "Defining Article Content")}
                            <div id="theArticleTag">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className="bodyText_3">
                                            The &lt;article&gt; Tag acts as a container for any section of a page that
                                            could stand alone and potentially
                                            be syndicated. This could be an individual article or blog entry, a comment
                                            or forum post, or any other
                                            independent piece of content.
                                        </p>
                                        <p className="bodyText_3">
                                            If a page contained several articles (or even summaries of several
                                            articles), then each individual article
                                            would live inside its own &lt;article&gt; element.
                                        </p>
                                        <p className="bodyText_3">
                                            The &lt;article&gt; elements can even be nested inside each-other. For
                                            example, a blog post might live inside
                                            one &lt;article&gt; element and each comment on the article could live
                                            inside its own child &lt;article&gt;
                                            element.
                                        </p>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <h6><em className="text-decoration-underline">Implementation</em></h6>
                                                <article>
                                                    <figure className={"text-center"}>
                                                        <img src={`${MizunaImg}`} alt="Mizuna"
                                                             width="300" height="300"/>
                                                        <figcaption>Mizuna</figcaption>
                                                    </figure>
                                                    <hgroup>
                                                        <h2>Japanese Herb</h2>
                                                        <h3>Benefits and Nutrition</h3>
                                                    </hgroup>
                                                    <p>
                                                        This herb is high in nutrients yet low in calories and boasts a
                                                        long list of benefits
                                                        to your health. Mizuna, a member of the Brassica family of
                                                        vegetables that is
                                                        commonly found in Japanese cuisine but has begun making its way
                                                        to kitchens around the world.
                                                    </p>
                                                </article>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;article&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;figure&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;img src="../img/jp-purple-mizuna.jpg" alt="Mizuna"  width="300" height="300" /&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;figcaption&gt;Mizuna&lt;/figcaption&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/figure&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;hgroup&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h2&gt;Japanese Herb&lt;/h2&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h3&gt;Benefits and Nutrition&lt;/h3&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/hgroup&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;p&gt;</div>
                                                    <div className={"preStyleSet"}>      This herb is high in nutrients yet low in calories and boasts a long list of benefits
                                                        to your health. Mizuna, a member of the Brassica family of vegetables that is commonly found in Japanese cuisine but has begun making its way to kitchens around the world.</div>
                                                    <div className={"preStyleSet"}>  &lt;/p&gt;</div>
                                                    <div className={"preStyleSet"}>&lt;/article&gt;</div>
                                                </>)}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <article>
                                                    <figure className={"text-center"}>
                                                        <img src={`${TeriyakiSauceImg}`}
                                                             alt="Teriyaki Sauce" width="150" height="150"/>
                                                        <figcaption>Teriyaki Sauce</figcaption>
                                                    </figure>
                                                    <hgroup>
                                                        <h2>Japanese Sauce and Marinade</h2>
                                                        <h3>What is it?</h3>
                                                    </hgroup>
                                                    <p>
                                                        The word teriyaki combines two Japanese words: teri, meaning
                                                        luster, and yaki, meaning grill or
                                                        broil. Though technically a cooking style, teriyaki in the
                                                        United States generally refers to the
                                                        associated sauce, which adds an amber-colored gloss and
                                                        salty-sweet flavor to grilled meats and
                                                        vegetables.
                                                    </p>
                                                </article>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;article&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;figure&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;img src="../img/teriyaki_sauce.jpg" alt="Teriyaki Sauce"  width="150" height="150" /&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;figcaption&gt;Teriyaki Sauce&lt;/figcaption&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/figure&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;hgroup&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h2&gt;Japanese Sauce and Marinade&lt;/h2&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h3&gt;What is it?&lt;/h3&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/hgroup&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;p&gt;</div>
                                                    <div className={"preStyleSet"}>      The word teriyaki combines two Japanese words: teri, meaning luster, and yaki, meaning grill or broil. Though technically a cooking style, teriyaki in the United States generally refers to the associated sauce, which adds an amber-colored gloss and salty-sweet flavor to grilled meats and vegetables.</div>
                                                    <div className={"preStyleSet"}>  &lt;/p&gt;</div>
                                                    <div className={"preStyleSet"}>&lt;/article&gt;</div>
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
                        <div id="htmlDir_7_4">
                            {SectionPageHeader("The Aside Element", "How to use Asides")}
                            <div id="theAsideTag">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className="bodyText_3">
                                            The &lt;aside&gt; Tag has two (2) purposes, depending on whether it is
                                            inside an &lt;article&gt; Tag
                                            tag or not:
                                        </p>
                                        <ol className={"introductionList__outerList"}>
                                            <li className={"pb-3 bulletItem"}>
                                                When the &lt;aside&gt; Tag is used inside an &lt;article&gt; Tag, it
                                                should contain information that is
                                                related to the article but not essential to its overall meaning. For
                                                example, a pullquote or glossary
                                                might be considered an aside to the article it relates to.
                                            </li>
                                            <li className={"pb-3 bulletItem"}>
                                                When the &lt;aside&gt; Tag is used outside an &lt;article&gt; Tag, it
                                                acts as a container for content
                                                that is related to the entire page. For example, it might contain links
                                                to other sections of the site,
                                                a list of recent posts, a search box, or recent posts to social media.
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <h6><em className="text-decoration-underline">Implementation</em></h6>
                                                <aside>
                                                    <section className="popular-recipes mb-3">
                                                        <h2>Grandma's Popular Recipes</h2>
                                                        <a href="" className={"paddingForLinks"}>Miso Soup</a>
                                                        <a href="" className={"paddingForLinks"}>Fried Rice</a>
                                                        <a href="" className={"paddingForLinks"}>Mizutaki</a>
                                                        <a href="" className={"paddingForLinks"}>Okonomiyaki</a>
                                                    </section>
                                                    <section className="contact-details">
                                                        <h2>Contact</h2>
                                                        <p>
                                                            Yuki's Kitchen<br/>
                                                            Location: The Heart
                                                        </p>
                                                    </section>
                                                </aside>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;aside&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;section class="popular-recipes mb-3"&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h2&gt;Grandma's Popular Recipes&lt;/h2&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/misoSoup" className={"paddingForLinks"}&gt;Miso Soup&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/friedRice" className={"paddingForLinks"}&gt;Fried Rice&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/mizutaki" className={"paddingForLinks"}&gt;Mizutaki&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/okonomiyaki" className={"paddingForLinks"}&gt;Okonomiyaki&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/section&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;section class="contact-details"&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h2&gt;Contact&lt;/h2&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;p&gt;</div>
                                                    <div className={"preStyleSet"}>      Yuki's Kitchen&lt;br/&gt;</div>
                                                    <div className={"preStyleSet"}>      Location: The Heart</div>
                                                    <div className={"preStyleSet"}>    &lt;/p&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/section&gt;</div>
                                                    <div className={"preStyleSet"}>&lt;/aside&gt;</div>
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
                        <div id="htmlDir_7_5">
                            {SectionPageHeader("The Section Element", "How to use Sections")}
                            <div id="theSectionTag">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className={"bodyText_3"}>
                                            The &lt;section&gt; Tag groups related content together, and typically each
                                            section would contain its
                                            own heading.
                                        </p>
                                        <p className={"bodyText_3"}>
                                            On a homepage there may be several &lt;section&gt; Tags to contain different
                                            sections of the page,
                                            such as the latest news, top products, and newsletter signup.
                                        </p>
                                        <p className={"bodyText_3"}>
                                            Because the &lt;section&gt; Tag groups related items together, it may
                                            contain several distinct
                                            &lt;article&gt; Tags that have a common theme or purpose.
                                        </p>
                                        <p className={"bodyText_3"}>
                                            Alternatively, if a page contains a long article, the &lt;section&gt; Tag
                                            can be used to split the article
                                            up into separate sections.
                                        </p>
                                        <p className={"bodyText_3"}>
                                            The &lt;section&gt; Tag should not be used as a wrapper for an entire page
                                            unless the page only contains
                                            one distinct piece of content. If there is a need for a containing element
                                            for the page, the
                                            &lt;div&gt; Tag is still the best option.
                                        </p>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <h6><em className="text-decoration-underline">Implementation</em></h6>
                                                <aside>
                                                    <section className="popular-recipes mb-3">
                                                        <h2>Grandma's Popular Recipes</h2>
                                                        <a href="" className={"paddingForLinks"}>Miso Soup</a>
                                                        <a href="" className={"paddingForLinks"}>Fried Rice</a>
                                                        <a href="" className={"paddingForLinks"}>Mizutaki</a>
                                                        <a href="" className={"paddingForLinks"}>Okonomiyaki</a>
                                                    </section>
                                                    <section className="contact-details">
                                                        <h2>Contact</h2>
                                                        <p>
                                                            Yuki's Kitchen<br/>
                                                            Location: The Heart
                                                        </p>
                                                    </section>
                                                </aside>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;aside&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;section class="popular-recipes mb-3"&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h2&gt;Grandma's Popular Recipes&lt;/h2&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/misoSoup" className={"paddingForLinks"}&gt;Miso Soup&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/friedRice" className={"paddingForLinks"}&gt;Fried Rice&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/mizutaki" className={"paddingForLinks"}&gt;Mizutaki&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;a href="/okonomiyaki" className={"paddingForLinks"}&gt;Okonomiyaki&lt;/a&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/section&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;section class="contact-details"&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;h2&gt;Contact&lt;/h2&gt;</div>
                                                    <div className={"preStyleSet"}>    &lt;p&gt;</div>
                                                    <div className={"preStyleSet"}>      Yuki's Kitchen&lt;br/&gt;</div>
                                                    <div className={"preStyleSet"}>      Location: The Heart</div>
                                                    <div className={"preStyleSet"}>    &lt;/p&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;/section&gt;</div>
                                                    <div className={"preStyleSet"}>&lt;/aside&gt;</div>
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
                        <div id="htmlDir_7_6">
                            {SectionPageHeader("The HGroup Element", "What are & How to use HGroups")}
                            <div id="theHGroupTag">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className="bodyText_3">
                                            The purpose of the &lt;hgroup&gt; Tag is to group together a set of one or
                                            more &lt;h1&gt;-&lt;h6&gt;
                                            Tags so that they are treated as a single element.
                                        </p>
                                        <p className="bodyText_3">
                                            For example, the &lt;hgroup&gt; tag could be used to contain both a title
                                            inside an &lt;h2&gt; tag
                                            and a subtitle within an &lt;h3&gt; tag.
                                        </p>
                                        <p className="bodyText_3">
                                            This element has had mixed reception. When it was first proposed, there were
                                            some complaints. It was
                                            removed, but after some people changed their minds, it was added back into
                                            the HTML5 feature-set.
                                        </p>
                                        <p className="bodyText_3">
                                            It has seen popularity with developers who believe that it is useful to
                                            group together the primary
                                            heading and the subheading (as both can be integral parts of a heading
                                            whole).
                                        </p>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                <h6><em className="text-decoration-underline">Implementation</em></h6>
                                                <hgroup>
                                                    <h2>Japanese Maki Making Lesson</h2>
                                                    <h3>Five Year Course</h3>
                                                </hgroup>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>&lt;hgroup&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;h2&gt;Japanese Maki Making Lesson&lt;/h2&gt;</div>
                                                    <div className={"preStyleSet"}>  &lt;h3&gt;Five Year Course&lt;/h3&gt;</div>
                                                    <div className={"preStyleSet"}>&lt;/hgroup&gt;</div>
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
                        <div id="htmlDir_7_7">
                            {SectionPageHeader("Escape Characters", "Characters Reserved & Used By HTML")}
                            <div id="figuresSection" className={"w-100"}>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className="bodyText_3">
                                            If any of the following characters in the table below should be used on a page,
                                            they must be "escaped" using their escape codes.
                                        </p>
                                        <p className="bodyText_3">
                                            When using escape characters, it is important to check the page in your
                                            browser to ensure the correct
                                            symbol shows up. This is because some fonts do not support all of these
                                            characters and it might be needed
                                            to specify different fonts for these characters via CSS.
                                        </p>
                                    </div>
                                    <hr className="hrStyle"/>
                                    <div>
                                        <div className="row flex-wrap tablePanel3">
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&lt;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Less-Than Sign</h6>
                                                        <p>& lt;</p>
                                                        <p>& #60;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&gt;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Greater-Than Sign</h6>
                                                        <p>& gt;</p>
                                                        <p>& #62;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&amp;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Ampersand</h6>
                                                        <p>& amp;</p>
                                                        <p>& #38;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&quot;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Quotation Mark</h6>
                                                        <p>& quot;</p>
                                                        <p>& #34;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&cent;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Cent Sign</h6>
                                                        <p>& cent;</p>
                                                        <p>& #162;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&pound;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Pound Sign</h6>
                                                        <p>& pound;</p>
                                                        <p>& #163;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&yen;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Yen Sign</h6>
                                                        <p>& yen;</p>
                                                        <p>& #165;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&euro;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Euro Sign</h6>
                                                        <p>& euro;</p>
                                                        <p>& #8364;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&copy;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Copyright Symbol</h6>
                                                        <p>& copy;</p>
                                                        <p>& #169;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&reg;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Registered Trademark</h6>
                                                        <p>& reg;</p>
                                                        <p>& #174;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&trade;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Trademark</h6>
                                                        <p>& trade;</p>
                                                        <p>& #8482;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&lsquo;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Left Single Quote</h6>
                                                        <p>& lsquo;</p>
                                                        <p>& #8216;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&rsquo;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Right Single Quote</h6>
                                                        <p>& rsquo;</p>
                                                        <p>& #8217;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&ldquo;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Left Double Quotes</h6>
                                                        <p>& ldquo;</p>
                                                        <p>& #8220;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&rdquo;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Right Double Quotes</h6>
                                                        <p>& rdquo;</p>
                                                        <p>& #8221;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&times;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Multiplication Symbol</h6>
                                                        <p>& times;</p>
                                                        <p>& #215;</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className={"flexCenter"}>
                                                    <span className={"overrideFontTo2"}><strong>&divide;</strong></span>
                                                    <div className={"providePadding1"}>
                                                        <h6>Division Symbol</h6>
                                                        <p>& divide;</p>
                                                        <p>& #247;</p>
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
