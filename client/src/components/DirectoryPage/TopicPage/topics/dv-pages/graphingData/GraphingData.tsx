import "./GraphingData.scss";
import {PElement} from "../../../../../shared/HTML_Elements/PElement/PElement";
import {MainPageHeader} from "../../../../../shared/PageSections/MainPageHeader/MainPageHeader";
import {PageIntroduction} from "../../../../../shared/PageSections/PageIntroduction/PageIntroduction";
import {SectionPageHeader} from "../../../../../shared/PageSections/SectionPageHeader/SectionPageHeader";
import {PreElement} from "../../../../../shared/HTML_Elements/PreElement/PreElement";
import {H3Sectional} from "../../../../../shared/PageSections/H3Sectional/H3Sectional";

import ColorWheel from "../../../../../../assets/images/css3/color/color_wheel.svg";

export function SideNavigationData() {
    return {
        directory: "graphing-data",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "Data Visualization - Graphing Data",
            links: []
        }
    };
}

export default function GraphingData(){
    const
        pageTitle = "Data Visualizations - Graphing Data",
        pageIntroduction = (
            <></>
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
                        <div className="accordion accordion-flush" id="accordionFlushBCExamples">
                            {/* Getting Started with Flotr2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed h6Styles" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseGS" aria-expanded="false"
                                            aria-controls="flush-collapseGS">
                                        Getting Started with Flotr2
                                    </button>
                                </h2>
                                <div id="flush-collapseGS" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionFlushGSExamples">
                                    <div className="accordion-body">
                                        <div className="accordion" id="sub-gettingStartedExamples">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="sub-flotr2Lib">
                                                    <button className="accordion-button bodyText_3" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#sub-collapseFlotr2Lib" aria-expanded="true"
                                                            aria-controls="collapseFlotr2Lib">
                                                        Step 1: Include Required JavaScript Flotr Package
                                                    </button>
                                                </h2>
                                                <div id="sub-collapseFlotr2Lib" className="accordion-collapse collapse"
                                                     aria-labelledby="sub-flotr2Lib"
                                                     data-bs-parent="#sub-gettingStartedExamples">
                                                    <div className="accordion-body">
                                                        {PreElement(
                                                            <>
                                                                <div className={"preStyleSet"}>&lt;!DOCTYPE html&gt;</div>
                                                                <div className={"preStyleSet"}>  &lt;html lang="en"&gt;</div>
                                                                <div className={"preStyleSet"}>    &lt;head&gt;</div>
                                                                <div className={"preStyleSet"}>      &lt;meta charset="utf-8"&gt;</div>
                                                                <div className={"preStyleSet"}>      &lt;title&gt;Static Flotr2 Charts&lt;/title&gt;</div>
                                                                <div className={"preStyleSet"}>    &lt;/head&gt;</div>
                                                                <div className={"preStyleSet"}>    &lt;body&gt;</div>
                                                                <div className={"preStyleSet"}>      <strong><em><span className="text-danger">&lt;script src="https://cdn.jsdelivr.net/npm/flotr2@0.1.0/flotr2.min.js"&gt;&lt;/script&gt;</span></em></strong></div>
                                                                <div className={"preStyleSet"}>    &lt;/body&gt;</div>
                                                                <div className={"preStyleSet"}>  &lt;/html&gt;</div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="sub-chartDiv">
                                                    <button className="accordion-button bodyText_3" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#sub-collapseChartDiv" aria-expanded="true"
                                                            aria-controls="collapseChartDiv">
                                                        Step 2: Setting Aside a &lt;div&gt; Element To Hold the Chart
                                                    </button>
                                                </h2>
                                                <div id="sub-collapseChartDiv" className="accordion-collapse collapse"
                                                     aria-labelledby="sub-chartDiv"
                                                     data-bs-parent="#sub-chartDiv">
                                                    <div className="accordion-body">
                                                        {PreElement(
                                                            <>
                                                                <div className={"preStyleSet"}>&lt;!DOCTYPE html&gt;</div>
                                                                <div className={"preStyleSet"}>  &lt;html lang="en"&gt;</div>
                                                                <div className={"preStyleSet"}>    &lt;head&gt;</div>
                                                                <div className={"preStyleSet"}>      &lt;meta charset="utf-8"&gt;</div>
                                                                <div className={"preStyleSet"}>      &lt;title&gt;Static Flotr2 Charts&lt;/title&gt;</div>
                                                                <div className={"preStyleSet"}>    &lt;/head&gt;</div>
                                                                <div className={"preStyleSet"}>    &lt;body&gt;</div>
                                                                <div className={"preStyleSet"}>       <strong><em><span className="text-danger">&lt;div id="chart" style="width: 600px; height: 300px;"&gt;&lt;/div&gt;</span></em></strong></div>
                                                                <div className={"preStyleSet"}>      <strong><em><span className="text-danger">&lt;script src="https://cdn.jsdelivr.net/npm/flotr2@0.1.0/flotr2.min.js"&gt;&lt;/script&gt;</span></em></strong></div>
                                                                <div className={"preStyleSet"}>    &lt;/body&gt;</div>
                                                                <div className={"preStyleSet"}>  &lt;/html&gt;</div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="sub-Flotr2Bugs">
                                                    <button className="accordion-button bodyText_3" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#sub-collapseFlotr2Bugs"
                                                            aria-expanded="true" aria-controls="collapseFlotr2Bugs">
                                                        Step 3: Work Around Flotr2 "Bugs"
                                                    </button>
                                                </h2>
                                                <div id="sub-collapseFlotr2Bugs" className="accordion-collapse collapse"
                                                     aria-labelledby="sub-Flotr2Bugs"
                                                     data-bs-parent="#sub-Flotr2Bugs">
                                                    <div className="accordion-body">
                                                        <p className={"bodyText_4"}>
                                                            When building large web pages with a lot of content, it is
                                                            possible to see a "bug" from Flotr2.
                                                            The "bug" is intentional by design from the Flotr2 team. In
                                                            the process of constructing charts
                                                            Flotr2 creates dummy HTML elements so that it can calculate
                                                            their sizes. Flotr2 does not
                                                            intend the dummy elements to be visible on the page, so it
                                                            "hides" them by positioning them off
                                                            screen. What Flotr2 this is off the screen isn't always the
                                                            case however.
                                                        </p>
                                                        <p className={"bodyText_4"}>
                                                            Specifically line 2,281 of flotr2.js is:
                                                        </p>
                                                        {PreElement(
                                                            <>
                                                                <div className={"preStyleSet"}><strong className={"text-danger"}>D.setStyles(div, {'{'} "position": "absolute", "top": "-10000px" {'}'})</strong></div>
                                                            </>
                                                        )}
                                                        <p className={"bodyText_4 mt-3"}>
                                                            Flotr2 intends to place the dummy elements 10,000 pixels
                                                            above the top of the browser window,
                                                            however, CSS absolute positioning can be relative to the
                                                            containing element which is not always
                                                            the browser window. This can cause Flotr2 to scatter text in
                                                            random-looking locations throughout
                                                            the page. There are a few workarounds for this:
                                                        </p>
                                                        <ul className={"introductionList__outerList"}>
                                                            <li className={"pb-3 bulletItem"}>
                                                                <p className={"bodyText_4"}>
                                                                    One option is to modify the open source code
                                                                    directly within the project, however,
                                                                    you would have to import the library to the project
                                                                    locally, you can not use the CDN.
                                                                </p>
                                                            </li>
                                                            <li className={"pb-3 bulletItem"}>
                                                                <p className={"bodyText_4"}>
                                                                    Another option would be to close all the elements
                                                                    after the Flotr.draw() has been
                                                                    called for the last time.
                                                                </p>
                                                                <p className={"bodyText_4"}>
                                                                    To close the elements, the following line can be
                                                                    used:<br/>
                                                                    <strong>document.getElementById("ELEMENT_ID_NAME").classList.toggle("show");</strong>
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bar Charts */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed h6Styles" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseBC" aria-expanded="false" aria-controls="flush-collapseBC">
                                        Creating A Basic Bar Chart
                                    </button>
                                </h2>
                                <div id="flush-collapseBC" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushBCExamples">
                                    <div className="accordion-body">
                                        <blockquote>
                                            The workhorse of charts. Effective at showing the change of a quantity of over a small number of regular
                                            time intervals, or at comparing several different quantities against one another.
                                        </blockquote>
                                        <div className="accordion" id="sub-barChartExamples">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="sub-headingBCS1">
                                                    <button className="accordion-button bodyText_3" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#sub-collapseBCS1" aria-expanded="true" aria-controls="collapseBCS1">
                                                        Step 1: Defining the Data
                                                    </button>
                                                </h2>
                                                <div id="sub-collapseBCS1" className="accordion-collapse collapse" aria-labelledby="sub-headingBCS1"
                                                     data-bs-parent="#sub-barChartExamples">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <p>
                                                                    For this chart example, I'll use fictitious sales data for a bakery that's tracking
                                                                    bagels sold over the last 7 years.
                                                                </p>
                                                                <p>As seen in the example to the right, there are three (3) layers of arrays.</p>
                                                                <ul>
                                                                    <li>
                                                                        Each data point consists of an x-value and a y-value packaged in an array
                                                                    </li>
                                                                    <li>
                                                                        Each series consists of a set of data points packaged in an array
                                                                    </li>
                                                                    <li>
                                                                        The data to chart consists of one or more series packaged in an array
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6">
<pre>
  // Datapoint: bagelsSold = [ YEAR, NUM_OF_BAGELS_SOLD ];
  let
      bagelsSold = [
        [
          [2018, 1039],
          [2019, 1199],
          [2020, 1350],
          [2021, 1475],
          [2022, 1310],
          [2023, 1275],
          [2024, 875]
        ]
      ];
</pre>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="sub-headingBCS2">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#sub-collapseBCS2" aria-expanded="true" aria-controls="collapseBCS2">
                                                        Step 2: Drawing the Chart
                                                    </button>
                                                </h2>
                                                <div id="sub-collapseBCS2" className="accordion-collapse collapse show" aria-labelledby="sub-headingBCS2"
                                                     data-bs-parent="#sub-barChartExamples">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div>
                                                                    <ul className="nav nav-tabs" id="codeAndDataExampleBCS2Tabber" role="tablist">
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link active" id="bcs2Info-tab" data-bs-toggle="tab"
                                                                                    data-bs-target="#bcs2Info-tab-pane" type="button" role="tab"
                                                                                    aria-controls="bcs2Info-tab-pane" aria-selected="true">Info
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="bcs2Code-tab" data-bs-toggle="tab"
                                                                                    data-bs-target="#bcs2Code-tab-pane" type="button" role="tab"
                                                                                    aria-controls="bcs2Code-tab-pane" aria-selected="true">Code
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="bcs2Data-tab" data-bs-toggle="tab"
                                                                                    data-bs-target="#bcs2Data-tab-pane" type="button" role="tab"
                                                                                    aria-controls="bcs2Data-tab-pane" aria-selected="false">Data
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="tab-content" id="codeAndDataExampleBCS2TabberContent">
                                                                        <div className="tab-pane fade show active" id="bcs2Info-tab-pane" role="tabpanel"
                                                                             aria-labelledby="bcs2Info-tab" tabIndex={0}>
                                                                            <div className="row">
                                                                                <div className="col-lg-12">
                                                                                    <p>
                                                                                        By default, Flotr2 makes the y-axis min the smallest value of from the series dataset.
                                                                                        It's usually better to set the y-axis to 0, as I'll do in the next step.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tab-pane fade show" id="bcs2Code-tab-pane" role="tabpanel"
                                                                             aria-labelledby="bcs2Code-tab" tabIndex={0}>
                                                                            <div className="row">
                                                                                <div className="col-lg-12">
{/*<pre>
Flotr.draw(
  document.getElementById("barChart1"),
  bagelsSold,
    {
        title: "Greco Bagel Shop",
        bars: {
        show: true
    }
    }
    );
</pre>*/}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tab-pane fade" id="bcs2Data-tab-pane" role="tabpanel"
                                                                             aria-labelledby="bcs2Data-tab" tabIndex={1}>
                                                                            <div className="row">
                                                                                <div className="col-lg-12">
<pre>
let bagelsSold = [
      [
        [2018, 1039],
        [2019, 1199],
        [2020, 1350],
        [2021, 1475],
        [2022, 1310],
        [2023, 1275],
        [2024, 875]
      ]
    ];
</pre>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div id="barChart1"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="sub-headingBCS3">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#sub-collapseBCS3" aria-expanded="true" aria-controls="collapseBCS3">
                                                        Step 3: Fixing the Vertical Axis
                                                    </button>
                                                </h2>
                                                <div id="sub-collapseBCS3" className="accordion-collapse collapse show" aria-labelledby="sub-headingBCS3"
                                                     data-bs-parent="#sub-barChartExamples">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div>
                                                                    <ul className="nav nav-tabs" id="codeAndDataExampleBCS3Tabber" role="tablist">
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link active" id="bcs3Info-tab" data-bs-toggle="tab"
                                                                                    data-bs-target="#bcs3Info-tab-pane" type="button" role="tab"
                                                                                    aria-controls="bcs3Info-tab-pane" aria-selected="true">Info
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="bcs3Code-tab" data-bs-toggle="tab"
                                                                                    data-bs-target="#bcs3Code-tab-pane" type="button" role="tab"
                                                                                    aria-controls="bcs3Code-tab-pane" aria-selected="true">Code
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="bcs3Data-tab" data-bs-toggle="tab"
                                                                                    data-bs-target="#bcs3Data-tab-pane" type="button" role="tab"
                                                                                    aria-controls="bcs3Data-tab-pane" aria-selected="false">Data
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="tab-content" id="codeAndDataExampleBCS3TabberContent">
                                                                        <div className="tab-pane fade show active" id="bcs3Info-tab-pane" role="tabpanel"
                                                                             aria-labelledby="bcs3Info-tab" tabIndex={0}>
                                                                            <div className="row">
                                                                                <div className="col-lg-12">
                                                                                    <p>
                                                                                        Redrawing the chart and setting the y-axis min to 0 results in a better looking
                                                                                        chart as seen on the right. All y values now begin at 0, and the value for
                                                                                        2024 is more in line with the visual expectation as compared to the last chart.
                                                                                    </p>
                                                                                    <p>
                                                                                        There are now some fixes to apply to the x-axis. Flotr2 assumes that all
                                                                                        x-values are real numbers and shows one decimal place in the labels as seen on
                                                                                        the right. I'll make a change to the data that sees years replaced by numbers,
                                                                                        and mapped accordingly for the next chart.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tab-pane fade" id="bcs3Code-tab-pane" role="tabpanel"
                                                                             aria-labelledby="bcs3Code-tab" tabIndex={0}>
                                                                            <div className="row">
                                                                                <div className="col-lg-12">
{/*<pre>
Flotr.draw(
  document.getElementById("barChart2"),
  bagelsSold,
    {
        title: barChartTitle,
        bars: {
        show: true
    },
        <span className="text-danger">yaxis: {
        min: 0,
        tickDecimals: 0
    }</span>
                                                                                    }
                                                                                    );
                                                                                </pre>*/}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="bcs3Data-tab-pane" role="tabpanel"
                                                                         aria-labelledby="bcs3Data-tab" tabIndex={1}>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
<pre>
let bagelsSold = [
      [
        [2018, 1039],
        [2019, 1199],
        [2020, 1350],
        [2021, 1475],
        [2022, 1310],
        [2023, 1275],
        [2024, 875]
      ]
    ];
</pre>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div id="barChart2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="sub-headingBCS4">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#sub-collapseBCS4" aria-expanded="true" aria-controls="collapseBCS4">
                                                    Step 4: Fixing the Horizontal Axis
                                                </button>
                                            </h2>
                                            <div id="sub-collapseBCS4" className="accordion-collapse collapse show" aria-labelledby="sub-headingBCS4"
                                                 data-bs-parent="#sub-barChartExamples">
                                                <div className="accordion-body">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div>
                                                                <ul className="nav nav-tabs" id="codeAndDataExampleBCS4Tabber" role="tablist">
                                                                    <li className="nav-item" role="presentation">
                                                                        <button className="nav-link active" id="bcs4Info-tab" data-bs-toggle="tab"
                                                                                data-bs-target="#bcs4Info-tab-pane" type="button" role="tab"
                                                                                aria-controls="bcs4Info-tab-pane" aria-selected="true">Info
                                                                        </button>
                                                                    </li>
                                                                    <li className="nav-item" role="presentation">
                                                                        <button className="nav-link" id="bcs4Code-tab" data-bs-toggle="tab"
                                                                                data-bs-target="#bcs4Code-tab-pane" type="button" role="tab"
                                                                                aria-controls="bcs4Code-tab-pane" aria-selected="true">Code
                                                                        </button>
                                                                    </li>
                                                                    <li className="nav-item" role="presentation">
                                                                        <button className="nav-link" id="bcs4Data-tab" data-bs-toggle="tab"
                                                                                data-bs-target="#bcs4Data-tab-pane" type="button" role="tab"
                                                                                aria-controls="bcs4Data-tab-pane" aria-selected="false">Data
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                                <div className="tab-content" id="codeAndDataExampleBCS4TabberContent">
                                                                    <div className="tab-pane fade show active" id="bcs4Info-tab-pane" role="tabpanel"
                                                                         aria-labelledby="bcs4Info-tab" tabIndex={0}>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <p>
                                                                                    I used the <strong>ticks</strong> property to tell Flotr2 which labels match
                                                                                    which x-values. The x-axis labels are appropriate for years, and there is space
                                                                                    between the bars to improve the chart's legibility.
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="bcs4Code-tab-pane" role="tabpanel"
                                                                         aria-labelledby="bcs4Code-tab" tabIndex={1}>
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
{/*<pre>
Flotr.draw(
  document.getElementById("barChart3"),
  <span className="text-danger">bagelsSoldWithCombinedYearLabels</span>,
    {
        title: barChartTitle,
        bars: {
        show: true,
        <span className="text-danger">barWidth: 0.5</span>
    },
        yaxis: {
        min: 0,
        tickDecimals: 0
    },
        <span className="text-danger">xaxis: {
        ticks: bagelYearLabels
    }</span>
                                                                                }
                                                                                );
                                                                            </pre>*/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="bcs4Data-tab-pane" role="tabpanel"
                                                                     aria-labelledby="bcs4Data-tab" tabIndex={2}>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
<pre>
let
  bagelYearLabels = [
    [0, "2018"],
    [1, "2019"],
    [2, "2020"],
    [3, "2021"],
    [4, "2022"],
    [5, "2023"],
    [6, "2024"],
  ],
  bagelsSoldWithCombinedYearLabels = [
    [
      [0, 1039],
      [1, 1199],
      [2, 1350],
      [3, 1475],
      [4, 1310],
      [5, 1275],
      [6, 875]
    ]
  ];
</pre>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div id="barChart3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sub-headingBCS5">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#sub-collapseBCS5" aria-expanded="true" aria-controls="collapseBCS5">
                                                Step 5: Adjusting the Styling
                                            </button>
                                        </h2>
                                        <div id="sub-collapseBCS5" className="accordion-collapse collapse show" aria-labelledby="sub-headingBCS5"
                                             data-bs-parent="#sub-barChartExamples">
                                            <div className="accordion-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <ul className="nav nav-tabs" id="codeAndDataExampleBCS5Tabber" role="tablist">
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link active" id="bcs5Info-tab" data-bs-toggle="tab"
                                                                            data-bs-target="#bcs5Info-tab-pane" type="button" role="tab"
                                                                            aria-controls="bcs5Info-tab-pane" aria-selected="true">Info
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="bcs5Code-tab" data-bs-toggle="tab"
                                                                            data-bs-target="#bcs5Code-tab-pane" type="button" role="tab"
                                                                            aria-controls="bcs5Code-tab-pane" aria-selected="true">Code
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button className="nav-link" id="bcs5Data-tab" data-bs-toggle="tab"
                                                                            data-bs-target="#bcs5Data-tab-pane" type="button" role="tab"
                                                                            aria-controls="bcs5Data-tab-pane" aria-selected="false">Data
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content" id="codeAndDataExampleBCS5TabberContent">
                                                                <div className="tab-pane fade show active" id="bcs5Info-tab-pane" role="tabpanel"
                                                                     aria-labelledby="bcs5Info-tab" tabIndex={0}>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <p>
                                                                                Now it's time to pay attention to aesthetics. I removed the unnecessary gridlines,
                                                                                and adjusted the coloring of the bars.
                                                                            </p>
                                                                            <p>
                                                                                Next I'll look at changing the graph slightly to be polychromatic and show
                                                                                a slightly different set of data with text labels.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade show" id="bcs5Code-tab-pane" role="tabpanel"
                                                                     aria-labelledby="bcs5Code-tab" tabIndex={0}>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
{/*<pre>
Flotr.draw(
  document.getElementById("barChart4"),
  bagelsSoldWithCombinedYearLabels,
    {
        title: barChartTitle,
        <span className="text-danger">colors: ["#89AFD2"],</span>
        bars: {
        show: true,
        barWidth: 0.5,
        <span className="text-danger">shadowSize: 0,
        fillOpacity: 1,
        lineWidth: 0</span>
    },
        yaxis: {
        min: 0,
        tickDecimals: 0
    },
        xaxis: {
        ticks: bagelYearLabels
    },
        <span className="text-danger">grid: {
        horizontalLines: false,
        verticalLines: false
    }</span>
                                                                            }
                                                                            );
                                                                        </pre>*/}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="bcs5Data-tab-pane" role="tabpanel"
                                                                 aria-labelledby="bcs5Data-tab" tabIndex={1}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
{/*<pre>
let
  bagelYearLabels = [
    [0, "2018"],
    [1, "2019"],
    [2, "2020"],
    [3, "2021"],
    [4, "2022"],
    [5, "2023"],
    [6, "2024"],
  ],
  bagelsSoldWithCombinedYearLabels = [
    [
      [0, 1039],
      [1, 1199],
      [2, 1350],
      [3, 1475],
      [4, 1310],
      [5, 1275],
      [6, 875]
    ]
  ];
</pre>*/}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div id="barChart4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="sub-headingBCS6">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#sub-collapseBCS6" aria-expanded="true" aria-controls="collapseBCS6">
                                            Step 6: Varying the Bar Color
                                        </button>
                                    </h2>
                                    <div id="sub-collapseBCS6" className="accordion-collapse collapse show" aria-labelledby="sub-headingBCS6"
                                         data-bs-parent="#sub-barChartExamples">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div>
                                                        <ul className="nav nav-tabs" id="codeAndDataExampleBCS6Tabber" role="tablist">
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link active" id="bcs6Info-tab" data-bs-toggle="tab"
                                                                        data-bs-target="#bcs6Info-tab-pane" type="button" role="tab"
                                                                        aria-controls="bcs6Info-tab-pane" aria-selected="true">Info
                                                                </button>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link" id="bcs6Code-tab" data-bs-toggle="tab"
                                                                        data-bs-target="#bcs6Code-tab-pane" type="button" role="tab"
                                                                        aria-controls="bcs6Code-tab-pane" aria-selected="true">Code
                                                                </button>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link" id="bcs6Data-tab" data-bs-toggle="tab"
                                                                        data-bs-target="#bcs6Data-tab-pane" type="button" role="tab"
                                                                        aria-controls="bcs6Data-tab-pane" aria-selected="false">Data
                                                                </button>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content" id="codeAndDataExampleBCS6TabberContent">
                                                            <div className="tab-pane fade show active" id="bcs6Info-tab-pane" role="tabpanel"
                                                                 aria-labelledby="bcs6Info-tab" tabIndex={0}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <p>
                                                                            Bar charts are good for comparing different values. This chart uses two series
                                                                            to allow Flotr2 to color each bar independently. The data has changed for this
                                                                            chart slightly, I replaced years with bagel type labels to create something
                                                                            one might expect to find in a Daily Sales report.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade show" id="bcs6Code-tab-pane" role="tabpanel"
                                                                 aria-labelledby="bcs6Code-tab" tabIndex={0}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
{/*<pre>
Flotr.draw(
  document.getElementById("barChart5"),
  <span className="text-danger">plottableBagelTypeData</span>,
    {
        <span className="text-danger">title: "Greco's Bakery Bagels Sold By Type (07-09-2024)"</span>,
        bars: {
        show: true,
        barWidth: 0.5,
        <span className="text-danger">fill: 1,
        lineWidth: 1</span>
    },
        xaxis: {
        <span className="text-danger">tickLength: 0,
        ticks: bagelTypes</span>
    },
        yaxis: {
        min: 0,
        tickDecimals: 0
    },
        grid: {
        horizontalLines: false,
        verticalLines: false
    }
    }
    );
</pre>*/}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="bcs6Data-tab-pane" role="tabpanel"
                                                                 aria-labelledby="bcs6Data-tab" tabIndex={1}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
{/*<pre>
let
  color01 = '#00cde2',
  color02 = '#ffb700',
  color03 = '#7ac70c',
  color04 = '#313541',
  color05 = '#fc3232',
  bagelTypes = [
    [0, "Blueberry"],
    [1, "Cinna-Raisin"],
    [2, "Jalapeño Cheese"],
    [3, "Sesame"],
    [4, "Vanilla Cherry"]
  ],
  plottableBagelTypeData = [
    {data: [[0, 75]], color: color01},
    {data: [[1, 34]], color: color02},
    {data: [[2, 27]], color: color03},
    {data: [[3, 13]], color: color04},
    {data: [[4, 40]], color: color05},
  ];
</pre>*/}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div id="barChart5"></div>
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
                </div>
            </div>
        </>
    );
}