import "./Color.scss";
import {PElement} from "../../../../../shared/HTML_Elements/PElement/PElement";
import {MainPageHeader} from "../../../../../shared/PageSections/MainPageHeader/MainPageHeader";
import {PageIntroduction} from "../../../../../shared/PageSections/PageIntroduction/PageIntroduction";
import {SectionPageHeader} from "../../../../../shared/PageSections/SectionPageHeader/SectionPageHeader";
import {PreElement} from "../../../../../shared/HTML_Elements/PreElement/PreElement";
import {H3Sectional} from "../../../../../shared/PageSections/H3Sectional/H3Sectional";

import ColorWheel from "../../../../../../assets/images/css3/color/color_wheel.svg";

export function SideNavigationData() {
    return {
        directory: "css-color",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "CSS/3 Color",
            links: [
                {
                    listOrder: 0,
                    text: "1. Foreground Color",
                    url: "#cssDir_2_1"
                },
                {
                    listOrder: 1,
                    text: "2. Background Color",
                    url: "#cssDir_2_2"
                },
                {
                    listOrder: 2,
                    text: "3. Understanding Color",
                    url: "#cssDir_2_3"
                },
                {
                    listOrder: 3,
                    text: "4. Contrast",
                    url: "#cssDir_2_4"
                },
                {
                    listOrder: 4,
                    text: "5. CSS3 Opacity With RGBA()",
                    url: "#cssDir_2_5"
                },
                {
                    listOrder: 5,
                    text: "6. CSS3: HSL() &amp; HSLA()",
                    url: "#cssDir_2_6"
                },
                {
                    listOrder: 6,
                    text: "7. Color Example",
                    url: "#cssDir_2_7"
                },
            ]
        }
    };
}

export default function CSSColor(){
    const
        pageTitle = "CSS/3 Color",
        pageIntroduction = (
            <>
                <h3 className="mt-3">
                    <em>
                        Color brings life to pages
                    </em>
                </h3>
                <ul className={"introductionList__outerList"}>
                    <li className={"pb-3 bulletItem mt-3"}>
                        Color not only brings life to a site, but helps convey the mood and evokes reactions from users.
                    </li>
                    <li className={"pb-3 bulletItem"}>
                        There are three (3) ways to specify colors in CSS: RGB values, hex codes, and color names.
                    </li>
                    <li className={"pb-3 bulletItem"}>
                        Color pickers can help with picking the exact color needed.
                    </li>
                    <li className={"pb-3 bulletItem"}>
                        It is important to ensure that there is enough contrast between any text and the background color,
                        otherwise, it may appear unreadable.
                    </li>
                    <li className={"pb-3 bulletItem"}>
                        CSS3 has introduced an extra value for RGB colors to indicate opacity. It is known as RGBA.
                    </li>
                    <li className={"pb-3 bulletItem"}>
                        CSS3 also allows you to specify colors as HSL values, with an optional opacity value. It is known as HSLA.
                    </li>
                </ul>
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
                        <div id="cssDir_2_1">
                            {SectionPageHeader("Foreground Color", "Setting The Foreground Color")}
                            <div className="contentContainer">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12 mb-3">
                                        {H3Sectional("The Color Property")}
                                        <p className="bodyText_3">
                                            The color property allows you to specify the color of text inside an
                                            element. There are three (3) ways
                                            to specify a color in CSS:
                                        </p>
                                        <p className="d-inline-flex gap-1 flex-wrap">
                                            <button className="btn btn-primary exploreMore" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseRGBValues"
                                                    aria-expanded="false" aria-controls="collapseRGBValues">
                                                RGB Values
                                            </button>
                                            <button className="btn btn-primary exploreMore" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseHexCodes"
                                                    aria-expanded="false" aria-controls="collapseHexCodes">
                                                Hex Codes
                                            </button>
                                            <button className="btn btn-primary exploreMore" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseColorNames"
                                                    aria-expanded="false" aria-controls="collapseColorNames">
                                                Color Names
                                            </button>
                                        </p>
                                        <div className="collapse" id="collapseRGBValues">
                                            <div className="card card-body tablePanel2">
                                                <h6>RGB Values</h6>
                                                <p className="textEntry_1">
                                                    These express colors in terms of how much red, green, and blue are
                                                    used to make it up. <br/>
                                                    <span
                                                        className="highlightCode">For example: rgb(100, 100, 90)</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseHexCodes">
                                            <div className="card card-body tablePanel2">
                                                <h6>Hex Codes</h6>
                                                <p className="textEntry_1">
                                                    These are six-digit codes that represent the amount of red, green,
                                                    and blue in a color. <br/>
                                                    <span className="highlightCode">For example: #ee3e80</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseColorNames">
                                            <div className="card card-body tablePanel2">
                                                <h6>Color Names</h6>
                                                <p className="textEntry_1">
                                                    There are 147 predefined color names that are recognized by
                                                    browsers. <br/>
                                                    <span className="highlightCode">For example: DarkCyan</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2_css">
                                                <h6><em className="text-decoration-underline marineBiologyExampleHeader">Implementation</em></h6>
                                                <div id="foregroundExample">
                                                    <h1 className="foregroundExampleH1">Marine Biology</h1>
                                                    <h2 className="foregroundExampleH2">The Composition of Seawater</h2>
                                                    <p className="foregroundExampleP">
                                                        Almost anything can be found in seawater. This includes
                                                        dissolved materials from the Earth's
                                                        crust as well as materials released from organisms. The most
                                                        important components of seawater
                                                        that influence life forms are salinity, temperature, dissolved
                                                        gasses (mostly oxygen and carbon
                                                        dioxide), nutrients, and pH. These elements vary in their
                                                        composition as well as in their
                                                        influence on marine life.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>.foregroundExampleH1 {'{'}</div>
                                                    <div className={"preStyleSet"}>     <span className="highlightCode">color: DarkCyan;</span> /* color name */</div>
                                                    <div className={"preStyleSet"}>{'}'}</div>

                                                    <div className={"preStyleSet mt-3"}>.foregroundExampleH2 {'{'}</div>
                                                    <div className={"preStyleSet"}>     <span className="highlightCode">color: #ee3e80;</span> /* hex code */</div>
                                                    <div className={"preStyleSet"}>{'}'}</div>

                                                    <div className={"preStyleSet mt-3"}>.foregroundExampleP {'{'}</div>
                                                    <div className={"preStyleSet"}>     <span className="highlightCode">color: rgb(100, 100, 90);</span> /* rgb value */</div>
                                                    <div className={"preStyleSet"}>{'}'}</div>
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
                        <div id="cssDir_2_2">
                            {SectionPageHeader("Background Color", "Setting The Background Color")}
                            <div className="contentContainer">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        {H3Sectional("The background-color Property")}
                                        <p className="bodyText_3">
                                            CSS treats each HTML element as if it appears in a box and the
                                            background-color property sets the color
                                            of the background for that box. There are three (3) ways to specify a color
                                            in CSS:
                                        </p>
                                        <p className="bodyText_3">
                                            If a background-color is not specified for an HTML element, then the
                                            background will be rendered as
                                            transparent.
                                        </p>
                                        <p className="bodyText_3">
                                            By default, most browsers set the background to white, but browser users can
                                            set a background-color
                                            for their windows, so to be sure that the background is set to a specific
                                            color, a background-color
                                            property should be set on the &lt;body&gt; tag of the page.
                                        </p>
                                        <p className="bodyText_3">
                                            The three (3) ways to specify a color in CSS are mentioned in the Foreground
                                            section.
                                        </p>
                                    </div>
                                </div>
                                <div className="row col-sm-12 col-lg-12">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="example p-3 tablePanel2_css">
                                            <h6><em className="text-decoration-underline marineBiologyExampleHeader">Implementation</em></h6>
                                            <div id="backgroundExample">
                                                <div className="backgroundExampleBody p-2">
                                                    <h1 className="backgroundExampleH1 p-2">Marine Biology</h1>
                                                    <h2 className="backgroundExampleH2 p-2">The Composition of Seawater</h2>
                                                    <p className="backgroundExampleP p-2">
                                                        Almost anything can be found in seawater. This includes
                                                        dissolved materials from the Earth's
                                                        crust as well as materials released from organisms. The most
                                                        important components of seawater
                                                        that influence life forms are salinity, temperature, dissolved
                                                        gasses (mostly oxygen and carbon
                                                        dioxide), nutrients, and pH. These elements vary in their
                                                        composition as well as in their
                                                        influence on marine life.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="example p-3 tablePanel2">
                                            {PreElement(<>
                                                <div className={"preStyleSet"}>.backgroundExampleBody {'{'}</div>
                                                <div className={"preStyleSet"}>     <span className="highlightCode">background-color:</span> rgb(200, 200, 200);</div>
                                                <div className={"preStyleSet"}>{'}'}</div>

                                                <div className={"preStyleSet mt-3"}>.backgroundExampleH1 {'{'}</div>
                                                <div className={"preStyleSet"}>     <span className="highlightCode">background-color:</span> DarkCyan;</div>
                                                <div className={"preStyleSet"}>{'}'}</div>

                                                <div className={"preStyleSet mt-3"}>.backgroundExampleH2 {'{'}</div>
                                                <div className={"preStyleSet"}>     <span className="highlightCode">background-color:</span> #ee3e80;</div>
                                                <div className={"preStyleSet"}>     color: white;</div>
                                                <div className={"preStyleSet"}>{'}'}</div>

                                                <div className={"preStyleSet mt-3"}>.backgroundExampleP {'{'}</div>
                                                <div className={"preStyleSet"}>     <span className="highlightCode">background-color:</span> white;</div>
                                                <div className={"preStyleSet"}>{'}'}</div>
                                            </>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="cssDir_2_3">
                            {SectionPageHeader("Understanding Color", "")}
                            <div className="contentContainer">
                                <div className="row mb-5">
                                    <div className="col-sm-12 col-lg-12">
                                        <label className="bodyText_3">
                                            Pick a Color!
                                            <input type="color" className={"mx-3"}/>
                                        </label>
                                        <h5 className={"mt-3"}>
                                            Every color on a computer screen is created by mixing amounts of red, green,
                                            and blue; just like a television.
                                            To find a specific color, a color picker should be utilized.
                                        </h5>
                                    </div>
                                </div>
                                <div className="row col-sm-12 col-lg-12">
                                    <ul className="nav nav-tabs" id="understandingColorExamplesTabber" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="rgbValues-tab" data-bs-toggle="tab"
                                                    data-bs-target="#rgbValues-tab-pane" type="button" role="tab"
                                                    aria-controls="rgbValues-tab-pane" aria-selected="true">RGB Values
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="hexCodes-tab" data-bs-toggle="tab"
                                                    data-bs-target="#hexCodes-tab-pane" type="button" role="tab"
                                                    aria-controls="hexCodes-tab-pane" aria-selected="false">Hex Codes
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="colorNames-tab" data-bs-toggle="tab"
                                                    data-bs-target="#colorNames-tab-pane" type="button" role="tab"
                                                    aria-controls="colorNames-tab-pane" aria-selected="false">Color
                                                Names
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="hue-tab" data-bs-toggle="tab"
                                                    data-bs-target="#hue-tab-pane" type="button" role="tab"
                                                    aria-controls="hue-tab-pane" aria-selected="false">Hue
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="saturation-tab" data-bs-toggle="tab"
                                                    data-bs-target="#saturation-tab-pane" type="button" role="tab"
                                                    aria-controls="saturation-tab-pane" aria-selected="false">Saturation
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="brightness-tab" data-bs-toggle="tab"
                                                    data-bs-target="#brightness-tab-pane" type="button" role="tab"
                                                    aria-controls="brightness-tab-pane" aria-selected="false">Brightness
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="lightness-tab" data-bs-toggle="tab"
                                                    data-bs-target="#lightness-tab-pane" type="button" role="tab"
                                                    aria-controls="lightness-tab-pane"
                                                    aria-selected="false">Lightness/Luminosity
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="understandingColorExamplesTabberContent">
                                        <div className="tab-pane fade show active mt-4" id="rgbValues-tab-pane"
                                             role="tabpanel" aria-labelledby="rgbValues-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <h6><em className="text-decoration-underline">Resultant Color</em>
                                                    </h6>
                                                    <div className={"resultantColorExample_RGBValues"}></div>
                                                </div>
                                                <div className="col-lg-10 col-lg-10 w-75">
                                                    <h6><em className="text-decoration-underline">Info</em></h6>
                                                    <p className="bodyText_3">
                                                        Values for red, green, and blue are expressed as numbers between
                                                        0-255.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Given:<br/><span className="highlightCode">background-color: rgb(102, 205, 170)</span>
                                                    </p>
                                                    <ol className={"introductionList__outerList"}>
                                                        <li className={"pb-3 bulletItem"}>102 - Red</li>
                                                        <li className={"pb-3 bulletItem"}>205 - Green</li>
                                                        <li className={"pb-3 bulletItem"}>170 - Blue</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade mt-4" id="hexCodes-tab-pane" role="tabpanel"
                                             aria-labelledby="hexCodes-tab" tabIndex={1}>
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <h6><em className="text-decoration-underline">Resultant Color</em>
                                                    </h6>
                                                    <div className={"resultantColorExample_HexValues"}></div>
                                                </div>
                                                <div className="col-lg-10 col-lg-10 w-75">
                                                    <h6><em className="text-decoration-underline">Info</em></h6>
                                                    <p className="bodyText_3">
                                                        Hex values represent values for red, green, and blue in
                                                        hexadecimal code.
                                                        Hex values are not case-sensitive. When all hex values are the
                                                        same (#ffffff), they may
                                                        be shortened to three (3) digits (#fff).
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Given:<br/><span className="highlightCode">background-color: #66cdaa</span>
                                                    </p>
                                                    <ol className={"introductionList__outerList"}>
                                                        <li className={"pb-3 bulletItem"}>66 - Red</li>
                                                        <li className={"pb-3 bulletItem"}>cd - Green</li>
                                                        <li className={"pb-3 bulletItem"}>aa - Blue</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade mt-4" id="colorNames-tab-pane" role="tabpanel"
                                             aria-labelledby="colorNames-tab" tabIndex={2}>
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <h6><em className="text-decoration-underline">Resultant Color</em>
                                                    </h6>
                                                    <div className={"resultantColorExample_PredefinedName"}></div>
                                                </div>
                                                <div className="col-lg-10 w-75">
                                                    <h6><em className="text-decoration-underline">Info</em></h6>
                                                    <p className="bodyText_3">
                                                        Colors are represented by predefined names, however, they are
                                                        very limited in number.
                                                        It is not common to use this option. Resource: <a
                                                        href="https://www.w3schools.com/cssref/css_colors.php">Predefined
                                                        Color Names</a>
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Given:<br/><span className="highlightCode">background-color: MediumAquaMarine</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade mt-4" id="hue-tab-pane" role="tabpanel"
                                             aria-labelledby="hue-tab" tabIndex={3}>
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-12">
                                                    <h6><em className="text-decoration-underline">Color Wheel In
                                                        Degrees</em></h6>
                                                    <div>
                                                        <img
                                                            className="hueColorWheel"
                                                            src={`${ColorWheel}`}
                                                            alt="Hue Color Wheel - Degree"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9 col-sm-12 w-75">
                                                    <h6><em className="text-decoration-underline">Info</em></h6>
                                                    <p className="bodyText_3">
                                                        Hue is near to the colloquial idea of color. Technically
                                                        speaking however, a color can
                                                        also have a saturation and brightness as well as a hue.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Hues can be represented as a degree value between either:
                                                    </p>
                                                    <ul className={"introductionList__outerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            0&deg; to 180&deg;
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            0&deg; to 360&deg;
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade mt-4" id="saturation-tab-pane" role="tabpanel"
                                             aria-labelledby="saturation-tab" tabIndex={4}>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h6><em className="text-decoration-underline">Resultant Saturation
                                                        Levels</em></h6>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-12 d-flex">
                                                            <div className="col-lg-12">
                                                                <div id="red-hsl">saturation 100%</div>
                                                                <div id="red-hsl-80">saturation 80%</div>
                                                                <div id="red-hsl-60">saturation 60%</div>
                                                                <div id="red-hsl-40">saturation 40%</div>
                                                                <div id="red-hsl-20">saturation 20%</div>
                                                                <div id="red-hsl-0">saturation 0%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <h6><em className="text-decoration-underline">Info</em></h6>
                                                    <p className="bodyText_3">
                                                        Saturation refers to the amount of gray in a color. At maximum
                                                        saturation, there is no
                                                        grey in the color. At minimum saturation, the color would mostly
                                                        be grey.
                                                    </p>
                                                    <p className="bodyText_3 text-decoration-underline">
                                                        CSS Code
                                                    </p>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>#red-hsl {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(0 100% 50%);</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-80 {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(0 80% 50%);</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-60 {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(0 60% 50%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-40 {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background - color: hsl(0 40% 50%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-20 {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background - color: hsl(0 20% 50%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-0 {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background - color: hsl(0 0% 50%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade mt-4" id="brightness-tab-pane" role="tabpanel"
                                             aria-labelledby="brightness-tab" tabIndex={5}>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h6><em className="text-decoration-underline">Resultant Brightness
                                                        Levels</em></h6>
                                                    <div className="col-sm-12 col-lg-12 d-flex">
                                                        <div className="col-lg-12">
                                                            <div id="red-hsl-bright" className="text-white">brightness
                                                                100%
                                                            </div>
                                                            <div id="red-hsl-80-bright">brightness 80%</div>
                                                            <div id="red-hsl-60-bright">brightness 60%</div>
                                                            <div id="red-hsl-50-bright">Standard Color @ 50%!</div>
                                                            <div id="red-hsl-40-bright">brightness 40%</div>
                                                            <div id="red-hsl-20-bright">brightness 20%</div>
                                                            <div id="red-hsl-0-bright" className="text-white">brightness
                                                                0%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <h6><em className="text-decoration-underline">Info</em></h6>
                                                    <p className="bodyText_3">
                                                        Brightness (or "value") refers to how much black is in a color.
                                                        At maximum brightness,
                                                        there would be no black in the color but the white would be
                                                        maximized.
                                                        At minimum brightness, the color would be very dark.
                                                    </p>
                                                    <p className="bodyText_3 text-decoration-underline">
                                                        CSS Code
                                                    </p>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>#red-hsl-bright {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: red;</div>
                                                        <div className={"preStyleSet"}>     filter: brightness(100%);</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-80-bright {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: red;</div>
                                                        <div className={"preStyleSet"}>     filter: brightness(80%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-60-bright {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: red;</div>
                                                        <div className={"preStyleSet"}>     filter: brightness(60%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-50-bright {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: red;</div>
                                                        <div className={"preStyleSet"}>     filter: brightness(50%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-40-bright {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: red;</div>
                                                        <div className={"preStyleSet"}>     filter: brightness(40%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-20-bright {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: red;</div>
                                                        <div className={"preStyleSet"}>     filter: brightness(20%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#red-hsl-0-bright {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: red;</div>
                                                        <div className={"preStyleSet"}>     filter: brightness(0%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade mt-4" id="lightness-tab-pane" role="tabpanel"
                                             aria-labelledby="lightness-tab" tabIndex={6}>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h6><em className="text-decoration-underline">Resultant Lightness
                                                        Levels</em></h6>
                                                    <div className="col-sm-12 col-lg-12 d-flex">
                                                        <div className="col-lg-12">
                                                            <div id="green-hsl-light">lightness 100%</div>
                                                            <div id="green-hsl-80-light">lightness 80%</div>
                                                            <div id="green-hsl-60-light">lightness 60%</div>
                                                            <div id="green-hsl-50-light">Standard Color @ 50%!</div>
                                                            <div id="green-hsl-40-light">lightness 40%</div>
                                                            <div id="green-hsl-20-light">lightness 20%</div>
                                                            <div id="green-hsl-0-light">lightness 0%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <h6><em className="text-decoration-underline">Info</em></h6>
                                                    <p className="bodyText_3">
                                                        Lightness is the amount of white or black in a color. Lightness
                                                        is represented as
                                                        a percentage: 0% Lightness is black, 100% lightness is white,
                                                        and 50% lightness is normal.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Lightness is sometimes referred to as Luminosity.
                                                    </p>
                                                    <p className="highlightCode">
                                                        Lightness is a different concept to <em>brightness</em>!
                                                        Brightness only adds black - whereas
                                                        lightness offers both white and black.
                                                    </p>
                                                    <p className="bodyText_3 text-decoration-underline">
                                                        CSS Code
                                                    </p>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>#green-hsl-light {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(120 100% 100%);</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#green-hsl-80-light {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(120 100% 80%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#green-hsl-60-light {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(120 100% 60%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#green-hsl-50-light {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(120 100% 50%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#green-hsl-40-light {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(120 100% 40%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#green-hsl-20-light {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(120 100% 20%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>

                                                        <div className={"preStyleSet mt-3"}>#green-hsl-0-light {'{'}</div>
                                                        <div className={"preStyleSet"}>     margin: 5px; padding: 5px;</div>
                                                        <div className={"preStyleSet"}>     background-color: hsl(120 100% 0%);</div>
                                                        <div className={"preStyleSet"}>     color: white;</div>
                                                        <div className={"preStyleSet"}>{'}'}</div>
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
                        <div id="cssDir_2_4">
                            {SectionPageHeader("Contrast", "")}
                            <div className="contentContainer">
                                <div className="row mb-5">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className={"bodyText_3"}>
                                            When picking foreground and background colors, it is important to ensure
                                            that there is enough contrast
                                            for the text to be legible.
                                        </p>
                                    </div>
                                </div>
                                <div className="row col-sm-12 col-lg-12">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-4">
                                            <div className="contrastExample1">
                                                <div className={"contrastExample__Low"}>
                                                    <p className="text-white">Low Contrast</p>
                                                </div>
                                                <p className="bodyText_3">
                                                    Text is harder to read when there is low contrast between the
                                                    background and foreground colors.
                                                    A lack of contrast is particularly a problem for those with visual
                                                    impairments and color blindness.
                                                </p>
                                                <p className="bodyText_3">
                                                    It also affects those with poor quality monitors or sun-lit screens
                                                    (which is common on hand-held
                                                    devices).
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-4">
                                            <div className="contrastExample2">
                                                <div className={"contrastExample__High"}>
                                                    <p className="text-white">High Contrast</p>
                                                </div>
                                                <p className="bodyText_3">
                                                    Text is easier to read when there is a higher contrast between the
                                                    background and foreground colors.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-4">
                                            <div className="contrastExample3">
                                                <div className={"contrastExample__Medium"}>
                                                    <p className={"contrastMediumTextColorOverride"}>Medium Contrast</p>
                                                </div>
                                                <p className="bodyText_3">
                                                    For long spans of text, reducing the contrast a little bit improves
                                                    readability.
                                                </p>
                                                <p className="bodyText_3">
                                                    One way to reduce contrast is by using dark gray text on a white
                                                    background, or an off-white text
                                                    on a dark background.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="cssDir_2_5">
                            {SectionPageHeader("CSS3 Opacity With RGBA()", "Setting An Opacity")}
                            <div className="contentContainer">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <p className={"bodyText_3"}>
                                            CSS3 includes the opacity property which allows a developer to specify the
                                            opacity of an element
                                            and any of its children elements. The value is a number between 0.0 and 1.0.
                                        </p>
                                        <p className="bodyText_3">
                                            A value of 0.5 would mean the element's opacity is set to 50%.
                                        </p>
                                        <p className="bodyText_3">
                                            The CSS3 rgba property expects a color to be specified, just as with rgb
                                            value, but adding a fourth
                                            value to indicate opacity. That value is known as the <em>alpha</em> value
                                            and is a number between 0.0 and
                                            1.0. The rgba value will only affect the element on which it is applied.
                                        </p>
                                        <p className="bodyText_3">
                                            Because some browsers will not recognize RGBA colors, developers can offer a
                                            fallback so that they display
                                            a solid color. If there are two rules that apply to the same element, the
                                            latter of the two will
                                            take priority. To create a fallback, specify a color as a hex code, color
                                            name, or rgb value, followed by
                                            the rule that specifies the RGBA value.
                                        </p>
                                    </div>
                                </div>
                                <div className="row col-sm-12 col-lg-12">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="example p-3 tablePanel2">
                                            <h6><em className="text-decoration-underline">Newer
                                                Browsers Will See</em></h6>
                                            <div className="css3Opacity1">.css3Opacity1</div>
                                            <div className="css3Opacity2">.css3Opacity2</div>
                                            <h6 className={"mt-3"}><em className="text-decoration-underline">Older
                                                Browsers Will See</em></h6>
                                            <div className="css3Opacity1">.css3Opacity1</div>
                                            <div className="css3Opacity3">.css3Opacity3</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="example p-3 tablePanel2">
                                            {PreElement(<>
                                                <div className={"preStyleSet"}>.css3Opacity1 {'{'}</div>
                                                <div className={"preStyleSet"}>     margin: 10px 10px;</div>
                                                <div className={"preStyleSet"}>     padding: 10px 10px;</div>
                                                <div className={"preStyleSet"}>     width: 165px;</div>
                                                <div className={"preStyleSet"}>     height: 165px;</div>
                                                <div className={"preStyleSet"}>     background-color: red;</div>
                                                <div className={"preStyleSet"}>{'}'}</div>

                                                <div className={"preStyleSet mt-3"}>.css3Opacity2 {'{'}</div>
                                                <div className={"preStyleSet"}>     margin: 10px 10px;</div>
                                                <div className={"preStyleSet"}>     padding: 10px 10px;</div>
                                                <div className={"preStyleSet"}>     width: 165px;</div>
                                                <div className={"preStyleSet"}>     height: 165px;</div>
                                                <div className={"preStyleSet"}>     /!*  Fallback for Older Browsers
                                                    *   that do not recognize RGBA
                                                    *!/</div>
                                                <div className={"preStyleSet"}>     background-color: rgb(0, 0, 0);</div>
                                                <div className={"preStyleSet"}>     background-color: rgba(0, 0, 0, 0.5);</div>
                                                <div className={"preStyleSet"}>     position: relative;</div>
                                                <div className={"preStyleSet"}>     top: -60px;</div>
                                                <div className={"preStyleSet"}>     right: -30px;</div>
                                                <div className={"preStyleSet"}>{'}'}</div>

                                                <div className={"preStyleSet mt-3"}>.css3Opacity2 {'{'}</div>
                                                <div className={"preStyleSet"}>     margin: 10px 10px;</div>
                                                <div className={"preStyleSet"}>     padding: 10px 10px;</div>
                                                <div className={"preStyleSet"}>     width: 165px;</div>
                                                <div className={"preStyleSet"}>     height: 165px;</div>
                                                <div className={"preStyleSet"}>     background-color: rgb(0, 0, 0);</div>
                                                <div className={"preStyleSet"}>     position: relative;</div>
                                                <div className={"preStyleSet"}>     top: -60px;</div>
                                                <div className={"preStyleSet"}>     right: -30px;</div>
                                                <div className={"preStyleSet"}>{'}'}</div>
                                            </>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="cssDir_2_6">
                            {SectionPageHeader("CSS3: HSL() & HSLA()", "")}
                            <div className="contentContainer">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12 mb-3">
                                        <p className="bodyText_3">
                                            The hsl color property has been introduced in CSS3 as an alternative way to
                                            specify colors.
                                            The value of the property starts with the letters "hsl" or - hue,
                                            saturation, lightness.
                                            Likewise hsla indicates an aspect of transparency by including an alpha
                                            value.
                                        </p>
                                        <p className="bodyText_3">
                                            Here are the HSL &amp; HSLA Settings:
                                        </p>
                                        <p className="d-inline-flex gap-1 flex-wrap">
                                            <button className="btn btn-primary exploreMore" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseMetaDescription"
                                                    aria-expanded="false" aria-controls="collapseMetaDescription">
                                                Hue
                                            </button>
                                            <button className="btn btn-primary exploreMore" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseMetaKeywords"
                                                    aria-expanded="false" aria-controls="collapseMetaKeywords">
                                                Saturation
                                            </button>
                                            <button className="btn btn-primary exploreMore" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseMetaRobots"
                                                    aria-expanded="false" aria-controls="collapseRobots">
                                                Lightness
                                            </button>
                                            <button className="btn btn-primary exploreMore" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseMetaAuthor"
                                                    aria-expanded="false" aria-controls="collapseMetaAuthor">
                                                Alpha
                                            </button>
                                        </p>
                                        <div className="collapse" id="collapseMetaDescription">
                                            <div className="card card-body tablePanel2">
                                                <h5>Hue</h5>
                                                <p className="bodyText_3">
                                                    This is expressed as an angle between 0&deg; and 360&deg;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseMetaKeywords">
                                            <div className="card card-body tablePanel2">
                                                <h5>Saturation</h5>
                                                <p className="bodyText_3">
                                                    This is expressed as a percentage.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseMetaRobots">
                                            <div className="card card-body tablePanel2">
                                                <h5>Lightness</h5>
                                                <p className="bodyText_3">
                                                    This is expressed as a percentage with 0% being black, 50% being
                                                    normal, and 100% being white.
                                                </p>
                                                <p className="bodyText_3">
                                                    The hsla color property allows a developer to specify color
                                                    properties using hue, saturation,
                                                    and lightness, with the fourth alpha value to represent
                                                    transparency.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="collapse" id="collapseMetaAuthor">
                                            <div className="card card-body tablePanel2">
                                                <h5>Alpha</h5>
                                                <p className="bodyText_3">
                                                    This is expressed as a number between 0 and 1.0. A value of "0.5"
                                                    represents 50% transparency.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2_css">
                                                <h6><em className="text-decoration-underline marineBiologyExampleHeader">Implementation</em></h6>
                                                <div id="hslAndHSLAExample">
                                                    <div className="backgroundExampleBody hslExampleBody">
                                                        <h1 className="backgroundExampleH1">Marine Biology</h1>
                                                        <h2 className="backgroundExampleH2">The Composition of Seawater</h2>
                                                        <p className="backgroundExampleP hslExampleP">
                                                            Almost anything can be found in seawater. This includes
                                                            dissolved materials from the Earth's
                                                            crust as well as materials released from organisms. The most
                                                            important components of seawater
                                                            that influence life forms are salinity, temperature,
                                                            dissolved gasses (mostly oxygen and carbon
                                                            dioxide), nutrients, and pH. These elements vary in their
                                                            composition as well as in their
                                                            influence on marine life.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="example p-3 tablePanel2">
                                                {PreElement(<>
                                                    <div className={"preStyleSet"}>.hslExampleBody {'{'}</div>
                                                    <div className={"preStyleSet"}>     background-color: #c8c8c8;</div>
                                                    <div className={"preStyleSet"}>     background-color: hsl(0, 0%, 78%);</div>
                                                    <div className={"preStyleSet"}>{'}'}</div>

                                                    <div className={"preStyleSet mt-3"}>.hslExampleP {'{'}</div>
                                                    <div className={"preStyleSet"}>     background-color: #ffffff;</div>
                                                    <div className={"preStyleSet"}>     background-color: hsla(0, 100%, 100%, 0.5);</div>
                                                    <div className={"preStyleSet"}>{'}'}</div>
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
                        <div id="cssDir_2_7">
                            {SectionPageHeader("Color Example", "pH Scale")}
                            <div id={"phScaleExample"}>
                                <h5 className={"h1Styles"}>pH Scale Example</h5>
                                <p className="phScale_14">14.0 <span className="alkalineLabel">very alkaline</span></p>
                                <p className="phScale_13">13.0</p>
                                <p className="phScale_12">12.0</p>
                                <p className="phScale_11">11.0</p>
                                <p className="phScale_10">10.0</p>
                                <p className="phScale_9">9.0</p>
                                <p className="phScale_8">8.0</p>
                                <p className="phScale_7">7.0 <span className="neutralLabel">neutral</span></p>
                                <p className="phScale_6">6.0</p>
                                <p className="phScale_5">5.0</p>
                                <p className="phScale_4">4.0</p>
                                <p className="phScale_3">3.0</p>
                                <p className="phScale_2">2.0</p>
                                <p className="phScale_1">1.0</p>
                                <p className="phScale_0">0.0 <span className="acidicLabel">very acidic</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}