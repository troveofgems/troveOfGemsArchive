import "./FlashVideoAudio.scss";
import {PElement} from "../../../../../shared/HTML_Elements/PElement/PElement";
import {MainPageHeader} from "../../../../../shared/PageSections/MainPageHeader/MainPageHeader";
import {PageIntroduction} from "../../../../../shared/PageSections/PageIntroduction/PageIntroduction";
import {SectionPageHeader} from "../../../../../shared/PageSections/SectionPageHeader/SectionPageHeader";
import {PreElement} from "../../../../../shared/HTML_Elements/PreElement/PreElement";
import {H3Sectional} from "../../../../../shared/PageSections/H3Sectional/H3Sectional";

import CherimoyaLogoImg from "../../../../../../assets/images/cherimoyaLogo.png";

export function SideNavigationData() {
    return {
        directory: "html-flashVideoAudio",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML5 Flash, Video, & Audio",
            links: [
                {
                    listOrder: 0,
                    text: "1. The Evolution & Death Of Flash",
                    url: "#htmlDir_8_1"
                },
                {
                    listOrder: 1,
                    text: "2. The Video Element",
                    url: "#htmlDir_8_2"
                },
                {
                    listOrder: 2,
                    text: "3. The Audio Element",
                    url: "#htmlDir_8_3"
                }
            ]
        }
    };
}

export default function FlashVideoAudio(){
    const
        pageTitle = "HTML/5 Flash, Video, & Audio",
        pageIntroduction = (
            <>
                <h5 className="mb-3">
                    <em>
                        Flash was a very popular technology (1990s) used to add animations, video, and audio to
                        websites. Adobe was
                        unable to fix flash, and killed it by the end of 2020.
                    </em>
                </h5>
                {PElement(
                    <>
                        Flash content today is barred from running in final versions of a website (production). A short history
                        will be provided in this section, but no examples with Flash will be found on this page.
                    </>
                )}
                {PElement(
                    <>
                        Today, HTML5 offers two elements to replace the use of Flash, they are the: &lt;video&gt; and &lt;audio&gt;
                        Tags.
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
                        <div id="htmlDir_8_1">
                            {SectionPageHeader("The Evolution & Death Of Flash", "")}
                            <div id="evolutionDeathOfFlash">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        <p className="bodyText_3">
                                            Beginning in 2005, a number of factors occurred that saw fewer websites
                                            written in flash or even the use
                                            of flash elements in their pages. When it was first released, it was
                                            developed to create animations. The
                                            technology quickly evolved, however, and people began to use it to build
                                            media players or even entire
                                            websites.
                                        </p>
                                        <p className="bodyText_3">
                                            Some factors that led to the death of Flash were:
                                        </p>
                                        <ul className={"introductionList__outerList"}>
                                            <li className={"pb-3 bulletItem"}>
                                                In 2005-6, a set of JavaScript libraries were launched (including
                                                Prototype, script.aculo.us, and
                                                JQuery) which made it easier to create animated effects using
                                                JavaScript.
                                            </li>
                                            <li className={"pb-3 bulletItem"}>
                                                When Apple launched the iPhone in 2007 and later the iPad in 2010, they
                                                made the decision to not
                                                support flash.
                                            </li>
                                            <li className={"pb-3 bulletItem"}>
                                                Laws have been introduced to ensure that websites are usable by those
                                                with visual or physical impairments -
                                                and flash had been criticized because flash content was not always able
                                                to meet accessibility requirements.
                                            </li>
                                            <li className={"pb-3 bulletItem"}>
                                                In 2008 HTML5 released the &lt;video&gt; and &lt;audio&gt; Tags which people have since migrated to,
                                                as of today.
                                            </li>
                                        </ul>
                                        <p className="bodyText_3">
                                            As of today in 2024, Flash is defunct and dead, no longer supported nor offered as a product by Adobe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_8_2">
                            {SectionPageHeader("The Video Element", "Implementing Video")}
                            <div id="theVideoTag">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        {H3Sectional("Preparing Video For Pages")}
                                        <p className="bodyText_3">
                                            The video Tag has seen widespread use since its release. There may be some
                                            key issues to be aware of:
                                        </p>
                                        <ul className={"introductionList__outerList"}>
                                            <li className={"pb-3 bulletItem"}>
                                                The video tag does not support any type of Digital Rights Management
                                                (DRM - sometimes referred to as
                                                copy protection).
                                            </li>
                                            <li className={"pb-3 bulletItem"}>
                                                Not all browsers may support the same video formats. Different video
                                                formats may need to be provided.
                                                Generally to reach as many browsers as possible provide WebM or H264
                                                formats.
                                            </li>
                                            <li className={"pb-3 bulletItem"}>
                                                Browsers supply their own controls for a player, and the control views
                                                can vary from browser to browser.
                                                It is possible to control the appearance of the controls using
                                                JavaScript.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <ul className="nav nav-tabs" id="videoExamplesTabber" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="video-tab" data-bs-toggle="tab"
                                                    data-bs-target="#video-tab-pane" type="button" role="tab"
                                                    aria-controls="video-tab-pane" aria-selected="true">Video
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="multipleSources-tab" data-bs-toggle="tab"
                                                    data-bs-target="#multipleSources-tab-pane" type="button" role="tab"
                                                    aria-controls="multipleSources-tab-pane"
                                                    aria-selected="true">Multiple Sources
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="videoExamplesTabberContent">
                                        <div className="tab-pane fade show active" id="video-tab-pane" role="tabpanel"
                                             aria-labelledby="video-tab">
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center"}>
                                                        {H3Sectional("Adding Video To Pages")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        In HTML5, not all attributes need to be supplied values such as
                                                        controls, autoplay, and loop.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        If the browser does not support the video format or element, it
                                                        will display whatever has been placed
                                                        between the opening and closing &lt;video&gt; Tags.
                                                    </p>
                                                    <p className="bodyText_3">Some solutions may require an iframe,
                                                        like embedding videos from youtube.</p>
                                                    <p className="bodyText_3">
                                                        Here are some of the attributes available:
                                                    </p>
                                                    <div className="mb-5">
                                                        <p className="d-inline-flex gap-1 flex-wrap">
                                                            <button className="btn btn-primary exploreMore"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseSrc" aria-expanded="false"
                                                                    aria-controls="collapseSrc">
                                                                src
                                                            </button>
                                                            <button className="btn btn-primary exploreMore"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapsePoster"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapsePoster">
                                                                poster
                                                            </button>
                                                            <button className="btn btn-primary exploreMore"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseWidthHeight"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseWidthHeight">
                                                                width, height
                                                            </button>
                                                            <button className="btn btn-primary exploreMore"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseControls"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseControls">
                                                                controls
                                                            </button>
                                                            <button className="btn btn-primary exploreMore"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseAutoplay"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseAutoplay">
                                                                autoplay
                                                            </button>
                                                            <button className="btn btn-primary exploreMore"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseLoop" aria-expanded="false"
                                                                    aria-controls="collapseLoop">
                                                                loop
                                                            </button>
                                                            <button className="btn btn-primary exploreMore"
                                                                    type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapsePreload"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapsePreload">
                                                                preload
                                                            </button>
                                                        </p>
                                                        <div className="collapse" id="collapseSrc">
                                                            <div className="card card-body tablePanel2">
                                                                <h5>&lt;video src="...url..."&gt;</h5>
                                                                <p>
                                                                    This attribute specifies the path to the video.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="collapse" id="collapsePoster">
                                                            <div className="card card-body tablePanel2">
                                                                <h5>&lt;video poster="...url..."&gt;</h5>
                                                                <p>
                                                                    This attribute specifies the path to an image that
                                                                    can be shown while the video is downloading or
                                                                    until the user tells the video to play.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="collapse" id="collapseWidthHeight">
                                                            <div className="card card-body tablePanel2">
                                                                <h5>&lt;video width="500" height="500"&gt;</h5>
                                                                <p>
                                                                    These attributes specify the dimensions of the video
                                                                    element.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="collapse" id="collapseControls">
                                                            <div className="card card-body tablePanel2">
                                                                <h5>&lt;video controls&gt;</h5>
                                                                <p>
                                                                    When used, this attribute indicates that the browser
                                                                    should supply its own controls for playback.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="collapse" id="collapseAutoplay">
                                                            <div className="card card-body tablePanel2">
                                                                <h5>&lt;video autoplay&gt;</h5>
                                                                <p>
                                                                    When used, this attribute specifies that the file
                                                                    should play automatically upon load.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="collapse" id="collapseLoop">
                                                            <div className="card card-body tablePanel2">
                                                                <h5>&lt;video loop&gt;</h5>
                                                                <p>
                                                                    When used, this attribute indicates that the video
                                                                    should start playing again once it has ended.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="collapse" id="collapsePreload">
                                                            <div className="card card-body tablePanel2">
                                                                <h5>&lt;video preload&gt;</h5>
                                                                <p>
                                                                    This attribute tells the browser what to do when the
                                                                    page loads. It can have one of three values:
                                                                </p>
                                                                <ol className={"introductionList__outerList"}>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        <h5>none</h5>
                                                                        <p>
                                                                            The browser will not load the video until
                                                                            the user presses play.
                                                                        </p>
                                                                    </li>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        <h5>auto</h5>
                                                                        <p>
                                                                            The browser should download the video when
                                                                            the page loads.
                                                                        </p>
                                                                    </li>
                                                                    <li className={"pb-3 bulletItem"}>
                                                                        <h5>metadata</h5>
                                                                        <p>
                                                                            The browser should just collect information
                                                                            such as the size, first frame, track-list
                                                                            and duration.
                                                                        </p>
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row col-lg-12 col-sm-12">
                                                    <div className="col-lg-4 flashVideoAudioBorderRight">
                                                        <h6><em
                                                            className="text-decoration-underline">Implementation</em>
                                                        </h6>
                                                        <video
                                                            src="https://www.youtube.com/embed/OuBmpQSVDZs?si=3RixzDJ0s0Eq5AW0"
                                                            poster={`${CherimoyaLogoImg}`}
                                                            width="350" height="350"
                                                            preload={"true"}
                                                            controls
                                                            loop
                                                        >
                                                            <p>A video from Minus Tau</p>
                                                        </video>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        {PreElement(<>
                                                            <div className={"preStyleSet"}>&lt;video</div>
                                                            <div className={"preStyleSet"}>    src="https://www.youtube.com/embed/OuBmpQSVDZs?si=3RixzDJ0s0Eq5AW0"</div>
                                                            <div className={"preStyleSet"}>    poster="../img/cherimoyaLogo.png"</div>
                                                            <div className={"preStyleSet"}>    width="350" height="350"</div>
                                                            <div className={"preStyleSet"}>    preload={"true"}</div>
                                                            <div className={"preStyleSet"}>    controls={"true"}</div>
                                                            <div className={"preStyleSet"}>    loop={"false"}</div>
                                                            <div className={"preStyleSet"}>  &gt;</div>
                                                            <div className={"preStyleSet"}>  &lt;p&gt;A video from Minus Tau&lt;/p&gt;</div>
                                                            <div className={"preStyleSet"}>  &lt;p&gt;This browser does not support the video format.&lt;/p&gt;</div>
                                                            <div className={"preStyleSet"}>&lt;/video&gt;</div>
                                                        </>)}
                                                    </div>
                                                    <div className="col-lg-4 flashVideoAudioBorderRight mt-5">
                                                        <h6><em className="text-decoration-underline">IFrame
                                                            Implementation</em></h6>
                                                        <iframe
                                                            width="350" height="350"
                                                            src="https://www.youtube.com/embed/OuBmpQSVDZs?si=3RixzDJ0s0Eq5AW0"
                                                            title="YouTube video player"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                    <div className="col-lg-8 mt-5">
                                                        <h6><em className="text-decoration-underline">Code</em></h6>
                                                        {PreElement(<>
                                                            <div className={"preStyleSet"}>&lt;iframe</div>
                                                            <div className={"preStyleSet"}>    src="https://www.youtube.com/embed/OuBmpQSVDZs?si=3RixzDJ0s0Eq5AW0"</div>
                                                            <div className={"preStyleSet"}>    title="YouTube video player"</div>
                                                            <div className={"preStyleSet"}>    width="350" height="350"</div>
                                                            <div className={"preStyleSet"}>    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"</div>
                                                            <div className={"preStyleSet"}>    referrerpolicy="strict-origin-when-cross-origin"</div>
                                                            <div className={"preStyleSet"}>    allowfullscreen={"true"}</div>
                                                            <div className={"preStyleSet"}>  &gt;</div>
                                                            <div className={"preStyleSet"}>  &lt;p&gt;A video from Minus Tau&lt;/p&gt;</div>
                                                            <div className={"preStyleSet"}>  &lt;p&gt;This browser does not support the video format.&lt;/p&gt;</div>
                                                            <div className={"preStyleSet"}>&lt;/iframe&gt;</div>
                                                        </>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show" id="multipleSources-tab-pane"
                                             role="tabpanel" aria-labelledby="multipleSources-tab">
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center"}>
                                                        {H3Sectional("Specifying Multiple Sources")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        When using multiple sources for a video, a developer should add
                                                        as many &lt;source&gt; Tags as needed within the
                                                        &lt;video&gt; Tag (This tag will replace the src attribute in
                                                        the parent video element!). Here are
                                                        some common attributes associated with the &lt;source&gt; Tag
                                                    </p>
                                                    <p className="d-inline-flex gap-1 flex-wrap">
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseSrcMS" aria-expanded="false"
                                                                aria-controls="collapseSrcMS">
                                                            src
                                                        </button>
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseTypeMS" aria-expanded="false"
                                                                aria-controls="collapseTypeMS">
                                                            type
                                                        </button>
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseCodecsMS" aria-expanded="false"
                                                                aria-controls="collapseCodecsMS">
                                                            codecs
                                                        </button>
                                                    </p>
                                                    <div className="collapse" id="collapseSrcMS">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>The <strong>src</strong> Attribute</h5>
                                                            <p>
                                                                This attribute specifies the path to the video.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" id="collapseTypeMS">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>The <strong>type</strong> Attribute</h5>
                                                            <p>
                                                                This attribute specifies the format that the video is
                                                                in.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" id="collapseCodecsMS">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>The <strong>codecs</strong> Attribute</h5>
                                                            <p>
                                                                The codec that was used to encode the video is supplied
                                                                within the type attribute.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 flashVideoAudioBorderRight">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <video
                                                        poster={`${CherimoyaLogoImg}`}
                                                        width="350" height="350"
                                                        preload={"true"}
                                                        controls={true}
                                                        loop
                                                    >
                                                        <source src={`/assets/videos/oceanWaves.mp4`}
                                                                type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'/>
                                                        <p>A video of Ocean Waves</p>
                                                    </video>
                                                </div>
                                                <div className="col-lg-8">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;video</div>
                                                        <div className={"preStyleSet"}>    poster="../img/cherimoyaLogo.png"</div>
                                                        <div className={"preStyleSet"}>    width="350" height="350"</div>
                                                        <div className={"preStyleSet"}>    preload={"true"}</div>
                                                        <div className={"preStyleSet"}>    controls={"true"}</div>
                                                        <div className={"preStyleSet"}>    loop={"true"}</div>
                                                        <div className={"preStyleSet"}>  &gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;source</div>
                                                        <div className={"preStyleSet"}>    src="../../videos/oceanWaves.mp4"</div>
                                                        <div className={"preStyleSet"}>    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'</div>
                                                        <div className={"preStyleSet"}>  /&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;p&gt;This browser does not support the video format.&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;/video&gt;</div>
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
                        <div id="htmlDir_8_3">
                            {SectionPageHeader("The Audio Element", "Implementing Audio")}
                            <div id="theAudioTag">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">
                                        {H3Sectional("Adding Audio To Web Pages")}
                                        <p className="bodyText_3">
                                            By far the most popular format for putting audio on web pages is MP3. There
                                            are two (2) routes taken
                                            to implement audio on a page:
                                        </p>
                                        <ol className={"introductionList__outerList"}>
                                            <li className={"pb-3 bulletItem"}>
                                                Use a Hosted Service
                                            </li>
                                            <li className={"pb-3 bulletItem"}>
                                                Use HTML5's &lt;audio&gt; Tag
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <ul className="nav nav-tabs" id="audioExamplesTabber" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="audio-tab" data-bs-toggle="tab"
                                                    data-bs-target="#audio-tab-pane" type="button" role="tab"
                                                    aria-controls="audio-tab-pane" aria-selected="true">Audio
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="multipleSourcesAudio-tab"
                                                    data-bs-toggle="tab" data-bs-target="#multipleSourcesAudio-tab-pane"
                                                    type="button" role="tab"
                                                    aria-controls="multipleSourcesAudio-tab-pane"
                                                    aria-selected="true">Multiple Sources
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="audioExamplesTabberContent">
                                        <div className="tab-pane fade show active" id="audio-tab-pane" role="tabpanel"
                                             aria-labelledby="audio-tab">
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center"}>
                                                        {H3Sectional("Adding Audio")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        HTML5 introduced the &lt;audio&gt; Tag to include audio files in
                                                        web pages. The &lt;audio&gt; Tag carries
                                                        a number of attributes which allow a developer to control audio
                                                        playback.
                                                    </p>
                                                    <p className="bodyText_3">
                                                        Here are the common attributes:
                                                    </p>
                                                    <p className="d-inline-flex gap-1 flex-wrap">
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseSrcAudio" aria-expanded="false"
                                                                aria-controls="collapseSrcAudio">
                                                            src
                                                        </button>
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseControlsAudio"
                                                                aria-expanded="false"
                                                                aria-controls="collapseControlsAudio">
                                                            controls
                                                        </button>
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseAutoplayAudio"
                                                                aria-expanded="false"
                                                                aria-controls="collapseAutoplayAudio">
                                                            autoplay
                                                        </button>
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseLoopAudio"
                                                                aria-expanded="false" aria-controls="collapseLoopAudio">
                                                            loop
                                                        </button>
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapsePreloadAudio"
                                                                aria-expanded="false"
                                                                aria-controls="collapsePreloadAudio">
                                                            preload
                                                        </button>
                                                    </p>
                                                    <div className="collapse" id="collapseSrcAudio">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>&lt;video src="...url..."&gt;</h5>
                                                            <p>
                                                                This attribute specifies the path to the audio file.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" id="collapseControlsAudio">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>&lt;video controls&gt;</h5>
                                                            <p>
                                                                When used, this attribute indicates that the browser
                                                                should supply its own controls for playback.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" id="collapseAutoplayAudio">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>&lt;video autoplay&gt;</h5>
                                                            <p>
                                                                When used, this attribute specifies that the file should
                                                                play automatically upon load.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" id="collapseLoopAudio">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>&lt;video loop&gt;</h5>
                                                            <p>
                                                                When used, this attribute indicates that the audio file
                                                                should start playing again once it has ended.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" id="collapsePreloadAudio">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>&lt;video preload&gt;</h5>
                                                            <p>
                                                                This attribute tells the browser what to do when the
                                                                page loads. It can have one of three values:
                                                            </p>
                                                            <ol className={"introductionList__outerList"}>
                                                                <li className={"pb-3 bulletItem"}>
                                                                    none
                                                                    <ul>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            The browser will not load the video until
                                                                            the user presses play.
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className={"pb-3 bulletItem"}>
                                                                    auto
                                                                    <ul>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            The browser should download the video when
                                                                            the page loads.
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className={"pb-3 bulletItem"}>
                                                                    metadata
                                                                    <ul>
                                                                        <li className={"pb-3 bulletItem"}>
                                                                            The browser should just collect information
                                                                            such as the size, first frame, track-list
                                                                            and duration.
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 flashVideoAudioBorderRight">
                                                    <h6><em className="text-decoration-underline">Implementation</em></h6>
                                                    <p className="bodyText_3">Czech National Anthem</p>
                                                    <audio
                                                        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/02_Sbor-a-orchestr-Narodniho-divadla_dirigent-Jiri-Belohlavek_2008.ogg"
                                                        controls>
                                                        <p>This browser does not support the audio format.</p>
                                                    </audio>
                                                </div>
                                                <div className="col-lg-8">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;p&gt;Czech National Anthem&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;audio controls={"true"} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/02_Sbor-a-orchestr-Narodniho-divadla_dirigent-Jiri-Belohlavek_2008.ogg"&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;p&gt;This browser does not support the audio format.&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;/audio&gt;</div>
                                                    </>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show" id="multipleSourcesAudio-tab-pane"
                                             role="tabpanel" aria-labelledby="multipleSourcesAudio-tab">
                                            <div className="row">
                                                <div className="col-lg-12 col-sm-12 w-100 m-auto my-3">
                                                    <div className={"text-center"}>
                                                        {H3Sectional("Specifying Multiple Sources")}
                                                    </div>
                                                    <p className="bodyText_3">
                                                        When using multiple sources for an audio file, a developer
                                                        should add as many &lt;source&gt; Tags as needed within
                                                        the &lt;audio&gt; Tag (This tag will replace the src attribute
                                                        in the parent audio element!).
                                                        Here are some common attributes associated with
                                                        the &lt;audio&gt; Tag:
                                                    </p>
                                                    <p className="d-inline-flex gap-1 flex-wrap">
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseSrcMSAudio"
                                                                aria-expanded="false"
                                                                aria-controls="collapseSrcMSAudio">
                                                            src
                                                        </button>
                                                        <button className="btn btn-primary exploreMore" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseTypeMSAudio"
                                                                aria-expanded="false"
                                                                aria-controls="collapseTypeMSAudio">
                                                            type
                                                        </button>
                                                    </p>
                                                    <div className="collapse" id="collapseSrcMSAudio">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>The <strong>src</strong> Attribute</h5>
                                                            <p>
                                                                This attribute specifies the path to the audio file.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" id="collapseTypeMSAudio">
                                                        <div className="card card-body tablePanel2">
                                                            <h5>The <strong>type</strong> Attribute</h5>
                                                            <p>
                                                                This attribute specifies the format that the audio file
                                                                is in.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 flashVideoAudioBorderRight">
                                                    <h6><em className="text-decoration-underline">Implementation</em>
                                                    </h6>
                                                    <p className="bodyText_3">Czech National Anthem</p>
                                                    <audio controls>
                                                        <source
                                                            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/02_Sbor-a-orchestr-Narodniho-divadla_dirigent-Jiri-Belohlavek_2008.ogg"/>
                                                        <source
                                                            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/02_Sbor-a-orchestr-Narodniho-divadla_dirigent-Jiri-Belohlavek_2008.mp3"/>
                                                        <p>This browser does not support the audio format.</p>
                                                    </audio>
                                                </div>
                                                <div className="col-lg-8">
                                                    <h6><em className="text-decoration-underline">Code</em></h6>
                                                    {PreElement(<>
                                                        <div className={"preStyleSet"}>&lt;audio controls={"true"}&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;source src="https://upload.wikimedia.org/wikipedia/commons/a/ac/02_Sbor-a-orchestr-Narodniho-divadla_dirigent-Jiri-Belohlavek_2008.ogg" /&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;source src="https://upload.wikimedia.org/wikipedia/commons/a/ac/02_Sbor-a-orchestr-Narodniho-divadla_dirigent-Jiri-Belohlavek_2008.mp3" /&gt;</div>
                                                        <div className={"preStyleSet"}>  &lt;p&gt;This browser does not support the audio format.&lt;/p&gt;</div>
                                                        <div className={"preStyleSet"}>&lt;/audio&gt;</div>
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
        </>
    );
}

/*
<pre>





                        </pre>*/
