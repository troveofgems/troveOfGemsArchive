import "./Tables.scss";

import {MainPageHeader} from "../../../../../shared/PageSections/MainPageHeader/MainPageHeader";
import {PageIntroduction} from "../../../../../shared/PageSections/PageIntroduction/PageIntroduction";
import {PElement} from "../../../../../shared/HTML_Elements/PElement/PElement";
import {SectionPageHeader} from "../../../../../shared/PageSections/SectionPageHeader/SectionPageHeader";
import {H3Sectional} from "../../../../../shared/PageSections/H3Sectional/H3Sectional";

export function SideNavigationData() {
    return {
        directory: "html-tables",
        linksViewable: true,
        directoryAnchors: {
            directoryLabel: "HTML/5 Tables",
            links: [
                {
                    listOrder: 0,
                    text: "1. Basic Table Text",
                    url: "#htmlDir_5_1"
                },
                {
                    listOrder: 1,
                    text: "2. Table Headings",
                    url: "#htmlDir_5_2"
                },
                {
                    listOrder: 2,
                    text: "3. Spanning Columns",
                    url: "#htmlDir_5_3"
                },
                {
                    listOrder: 3,
                    text: "4. Spanning Rows",
                    url: "#htmlDir_5_4"
                },
                {
                    listOrder: 4,
                    text: "5. Long Tables",
                    url: "#htmlDir_5_5"
                },
                {
                    listOrder: 5,
                    text: "6. Deprecated Table Code",
                    url: "#htmlDir_5_6"
                }
            ]
        }
    };
}

export default function Tables() {
    const
        pageTitle = "HTML/5 Tables",
        pageIntroduction = (
            <>
                {PElement(
                    <>
                        There are several types of information that need to be displayed in a grid or table. For example:
                        Sports Results, Stock Reports, Train Timetables.
                    </>
                )}
                {PElement(
                    <>
                        A table represents information in a grid format. Examples of tables include financial reports, TV schedules,
                        etc. Grids enable us to better understand complex data by referencing information on two axes. Each block
                        in the grid is referred to as a <strong>table cell</strong>. In HTML a table is written out row by row.
                        In some browsers, lines around the table will automatically be drawn around the table and individual cells.
                        It is better to control the styles using CSS.
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
                        <div id="htmlDir_5_1">
                            {SectionPageHeader("Basic Table Text", "Building A Basic Table")}
                            <div id="creatingATable">
                                {H3Sectional("Creating a Table")}
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3">
                                                To create a basic table, three (3) tags are used: &lt;table&gt; and its children tags &lt;tr&gt; &amp; &lt;td&gt;
                                            </p>
                                            <ol className={"introductionList__outerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;table&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used to create a table. The contents of the table are written out row by row.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;tr&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used to indicate the start of each row using the opening tr Tag. It is followed by one or more td
                                                            Tags (one for each cell in that row). At the end of the row, a closing &lt;tr&gt; Tag is used.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;td&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Each cell of a table is represented using a &lt;td&gt; Tag. At the end of each cell the closing
                                                            &lt;/td&gt; Tag is used.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div className="example p-3 text-center">
                                                <table className="tablePanel2">
                                                    <tr>
                                                        <td>15</td>
                                                        <td>30</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>14</td>
                                                        <td>21</td>
                                                    </tr>
                                                    <tr>
                                                        <td>-1</td>
                                                        <td>0</td>
                                                        <td>1</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="example p-3">
<pre>
&lt;table className="tablePanel2"&gt;
    &lt;tr&gt;
    &lt;td&gt;15&lt;/td&gt;
    &lt;td&gt;30&lt;/td&gt;
    &lt;td&gt;45&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;7&lt;/td&gt;
    &lt;td&gt;14&lt;/td&gt;
    &lt;td&gt;21&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;-1&lt;/td&gt;
    &lt;td&gt;0&lt;/td&gt;
    &lt;td&gt;1&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
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
                        <div id="htmlDir_5_2">
                            {SectionPageHeader("Table Headings", "Setting A Table's Headings")}
                            <div id="tableHeadings">
                                <h3>Creating Table Headings</h3>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="col-lg-12">
                                            <p className="textEntry_1">
                                                To create a table heading, use the &lt;th&gt; Tag
                                            </p>
                                            <ol className={"introductionList__outerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;th&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            The &lt;th&gt; Tag is used just like the  &lt;td&gt; Tag but its purpose is to represent the heading for either
                                                            a column or a row. Even if a cell has no content, a &lt;td&gt; or &lt;th&gt; Tag should still be used to represent
                                                            the presence of an empty cell otherwise the table will not render correctly (The first cell in the
                                                            first row of this example shows an empty cell).
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Using the &lt;th&gt; Tag helps people who use screen readers, improves the ability for search engines to
                                                            index a site's pages, and also provides greater control over the appearance of tables when CSS
                                                            is used to style them.
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            The &lt;th&gt; Tag provides a <strong>scope</strong> attribute to indicate whether it is a heading for a column
                                                            or row. It can take the values "row" to indicate a heading for a row or, "col" to indicate a heading for a column.
                                                            Browsers will usually show the content of a &lt;th&gt; Tag in bold and in the middle of the cell.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div className="example p-3 text-center">
                                                <table className="tablePanel2">
                                                    <tr>
                                                        <th></th>
                                                        <th>Monday</th>
                                                        <th>Tuesday</th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Fruit Crates Sold:</th>
                                                        <td>75</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Total Fruit Crates Sales:</th>
                                                        <td>$816.13</td>
                                                        <td>$125.08</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="example p-3">
<pre>
&lt;table className="tablePanel2" style="padding: 1rem; margin: 1rem;"&gt;
    &lt;tr&gt;
    &lt;th&gt;&lt;/th&gt;
    &lt;th&gt;Monday&lt;/th&gt;
    &lt;th&gt;Tuesday&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th scope="row"&gt;Fruit Crates Sold:&lt;/th&gt;
    &lt;td&gt;75&lt;/td&gt;
    &lt;td&gt;100&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th scope="row"&gt;Total Fruit Crates Sales:&lt;/th&gt;
    &lt;td&gt;$816.13&lt;/td&gt;
    &lt;td&gt;$125.08&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
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
                        <div id="htmlDir_5_3">
                            {SectionPageHeader("Spanning Columns", "How to Span Columns")}
                            <div id="spanningColumns">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3">
                                                Sometimes entries are needed in a table to stretch across more than one column. The <strong>colspan</strong>
                                                attribute can be used on the &lt;th&gt; or  &lt;td&gt; Tags and indicates how man columns that cell should run across.
                                            </p>
                                            <p className="bodyText_3">
                                                Spanned Columns are shown with the <span>darkened background and off-white text color in the following example.</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="example p-3 text-center">
                                            <table id="schoolSchedule" className="tablePanel2">
                                                <tr>
                                                    <th>B.S. Botany</th>
                                                    <th>9AM</th>
                                                    <th>10AM</th>
                                                    <th>11AM</th>
                                                    <th>12PM</th>
                                                    <th>1PM</th>
                                                    <th>2PM</th>
                                                    <th>3PM</th>
                                                    <th>4PM</th>
                                                </tr>
                                                <tr>
                                                    <th>Monday</th>
                                                    <td className={"bgShader"}>Cell & Molecular Biology</td>
                                                    <td>Calculus For Management & Social Science</td>
                                                    <td>Lunch</td>
                                                    <td>Elementary Biochemistry</td>
                                                    <td>Intro to Statistics</td>
                                                    <td>Plant Ecology</td>
                                                    <td>Lichenology</td>
                                                </tr>
                                                <tr>
                                                    <th>Tuesday</th>
                                                    <td>Gym</td>
                                                    <td>Czech Level 2</td>
                                                    <td>Lunch</td>
                                                    <td>Bryology</td>
                                                    <td className={"bgShader"}>Flowering Plants of the World</td>
                                                    <td>Plant Text</td>
                                                </tr>
                                                <tr>
                                                    <th>Wednesday</th>
                                                    <td className={"bgShader"}>Discrete Mathematics</td>
                                                    <td>Aquatic Botany</td>
                                                    <td>Lunch</td>
                                                    <td>World Soils</td>
                                                    <td>Plant Systematics</td>
                                                    <td>Plant Ecology</td>
                                                    <td>Methods of Data Analysis</td>
                                                </tr>
                                                <tr>
                                                    <th>Thursday</th>
                                                    <td className={"bgShader"}>Cell & Molecular Biology</td>
                                                    <td>Calculus For Management & Social Science</td>
                                                    <td>Lunch</td>
                                                    <td>Elementary Biochemistry</td>
                                                    <td>Intro to Statistics</td>
                                                    <td>Plant Ecology</td>
                                                    <td>Lichenology</td>
                                                </tr>
                                                <tr>
                                                    <th>Friday</th>
                                                    <td className={"bgShader"}>Gym</td>
                                                    <td>Czech Level 2</td>
                                                    <td>Lunch</td>
                                                    <td>Bryology</td>
                                                    <td className={"bgShader"}>Flowering Plants of the World</td>
                                                    <td>Plant Text</td>
                                                </tr>
                                                <tr>
                                                    <th>Saturday</th>
                                                    <td className={"bgShader"}>Gym</td>
                                                    <td>Aquatic Botany</td>
                                                    <td>Lunch</td>
                                                    <td>World Soils</td>
                                                    <td>Plant Systematics</td>
                                                    <td>Plant Ecology</td>
                                                    <td>Methods of Data Analysis</td>
                                                </tr>
                                                <tr>
                                                    <th>Sunday</th>
                                                    <td className={"bgShader text-center"}>No School</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="example p-3">
<pre>
&lt;table id="schoolSchedule" className="tablePanel2"&gt;
    &lt;tr&gt;
    &lt;th&gt;B.S. Botany&lt;/th&gt;
    &lt;th&gt;9AM&lt;/th&gt;
    &lt;th&gt;10AM&lt;/th&gt;
    &lt;th&gt;11AM&lt;/th&gt;
    &lt;th&gt;12PM&lt;/th&gt;
    &lt;th&gt;1PM&lt;/th&gt;
    &lt;th&gt;2PM&lt;/th&gt;
    &lt;th&gt;3PM&lt;/th&gt;
    &lt;th&gt;4PM&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;Monday&lt;/th&gt;
    &lt;td colspan="2"&gt;Cell & Molecular Biology&lt;/td&gt;
    &lt;td&gt;Calculus For Management & Social Science&lt;/td&gt;
    &lt;td&gt;Lunch&lt;/td&gt;
    &lt;td&gt;Elementary Biochemistry&lt;/td&gt;
    &lt;td&gt;Intro to Statistics&lt;/td&gt;
    &lt;td&gt;Plant Ecology&lt;/td&gt;
    &lt;td&gt;Lichenology&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;Tuesday&lt;/th&gt;
    &lt;td colspan="2"&gt;Gym&lt;/td&gt;
    &lt;td&gt;Czech Level 2&lt;/td&gt;
    &lt;td&gt;Lunch&lt;/td&gt;
    &lt;td&gt;Bryology&lt;/td&gt;
    &lt;td colspan="2"&gt;Flowering Plants of the World&lt;/td&gt;
    &lt;td&gt;Plant Text&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;Wednesday&lt;/th&gt;
    &lt;td colspan="2"&gt;Discrete Mathematics&lt;/td&gt;
    &lt;td&gt;Aquatic Botany&lt;/td&gt;
    &lt;td&gt;Lunch&lt;/td&gt;
    &lt;td&gt;World Soils&lt;/td&gt;
    &lt;td&gt;Plant Systematics&lt;/td&gt;
    &lt;td&gt;Plant Ecology&lt;/td&gt;
    &lt;td&gt;Methods of Data Analysis&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;Thursday&lt;/th&gt;
    &lt;td colspan="2"&gt;Cell & Molecular Biology&lt;/td&gt;
    &lt;td&gt;Calculus For Management & Social Science&lt;/td&gt;
    &lt;td&gt;Lunch&lt;/td&gt;
    &lt;td&gt;Elementary Biochemistry&lt;/td&gt;
    &lt;td&gt;Intro to Statistics&lt;/td&gt;
    &lt;td&gt;Plant Ecology&lt;/td&gt;
    &lt;td&gt;Lichenology&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;Friday&lt;/th&gt;
    &lt;td colspan="2"&gt;Gym&lt;/td&gt;
    &lt;td&gt;Czech Level 2&lt;/td&gt;
    &lt;td&gt;Lunch&lt;/td&gt;
    &lt;td&gt;Bryology&lt;/td&gt;
    &lt;td colspan="2"&gt;Flowering Plants of the World&lt;/td&gt;
    &lt;td&gt;Plant Text&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;Saturday&lt;/th&gt;
    &lt;td colspan="2"&gt;Gym&lt;/td&gt;
    &lt;td&gt;Aquatic Botany&lt;/td&gt;
    &lt;td&gt;Lunch&lt;/td&gt;
    &lt;td&gt;World Soils&lt;/td&gt;
    &lt;td&gt;Plant Systematics&lt;/td&gt;
    &lt;td&gt;Plant Ecology&lt;/td&gt;
    &lt;td&gt;Methods of Data Analysis&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;Sunday&lt;/th&gt;
    &lt;td className="text-center" colspan="8"&gt;No School&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_5_4">
                            {SectionPageHeader("Spanning Rows", "How to Span Rows")}
                            <div id="spanningRows">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3">
                                                Some entries in a table may need to stretch down across more than one row. The <strong>rowspan</strong> attribute can be used on the &lt;th&gt; or  &lt;td&gt; Tags to indicate how many rows a cell should span down the
                                                table.
                                            </p>
                                            <p className="bodyText_3">
                                                Spanned Rows are shown with the <span className={"bgShader"}>darkened background and off-white text color in the following example.</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="example p-3 text-center">
                                            <table id="gymSchedule" className="tablePanel2">
                                                <tr>
                                                    <th>Gym Schedule</th>
                                                    <th>Back: Deadlift</th>
                                                    <th>Back: T-Bar Row</th>
                                                    <th>Back: Bird-Dog</th>
                                                    <th>Back: 30-Degree Lat Pulldown</th>
                                                    <th>End & Cleanup</th>
                                                </tr>
                                                <tr>
                                                    <th>9AM-9:15AM</th>
                                                    <td>2-3 Sets, 6-12 Reps, 1-2 minute rest.</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th>9:15AM-9:30AM</th>
                                                    <td>-</td>
                                                    <td>2-3 Sets, 6-12 Reps, 1-2 minute rest.</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th>9:30AM-9:45AM</th>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>2-3 Sets, 6-12 Reps, 1-2 minute rest.</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th>9:45AM-10:00AM</th>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>2-3 Sets, 6-12 Reps, 1-2 minute rest.</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th>10:00AM-10:15AM</th>
                                                    <td className={"bgShader"}>2-3 Sets, 6-12 Reps, 1-2 minute rest.</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th>10:15AM-10:30AM</th>
                                                    <td>-</td>
                                                    <td>2-3 Sets, 6-12 Reps, 1-2 minute rest.</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th>10:30AM-10:45AM</th>
                                                    <td>-</td>
                                                    <td></td>
                                                    <td>-</td>
                                                    <td>2-3 Sets, 6-12 Reps, 1-2 minute rest.</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th>10:45AM-11:00AM</th>
                                                    <td>-</td>
                                                    <td></td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>Workout Complete</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="example p-3">
<pre>
 &lt;table id="gymSchedule" className="tablePanel2"&gt;
    &lt;tr&gt;
    &lt;th&gt;Gym Schedule&lt;/th&gt;
    &lt;th&gt;Back: Deadlift&lt;/th&gt;
    &lt;th&gt;Back: T-Bar Row&lt;/th&gt;
    &lt;th&gt;Back: Bird-Dog&lt;/th&gt;
    &lt;th&gt;Back: 30-Degree Lat Pulldown&lt;/th&gt;
    &lt;th&gt;End & Cleanup&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;9AM-9:15AM&lt;/th&gt;
    &lt;td&gt;2-3 Sets, 6-12 Reps, 1-2 minute rest.&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;9:15AM-9:30AM&lt;/th&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;2-3 Sets, 6-12 Reps, 1-2 minute rest.&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;9:30AM-9:45AM&lt;/th&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;2-3 Sets, 6-12 Reps, 1-2 minute rest.&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;9:45AM-10:00AM&lt;/th&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;2-3 Sets, 6-12 Reps, 1-2 minute rest.&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;10:00AM-10:15AM&lt;/th&gt;
    &lt;td rowspan="2" style="background-color: var(--book-cover-4); color: var(--tiana-off-white);"&gt;2-3 Sets, 6-12 Reps, 1-2 minute rest.&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;10:15AM-10:30AM&lt;/th&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;2-3 Sets, 6-12 Reps, 1-2 minute rest.&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;10:30AM-10:45AM&lt;/th&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;2-3 Sets, 6-12 Reps, 1-2 minute rest.&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;10:45AM-11:00AM&lt;/th&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;-&lt;/td&gt;
    &lt;td&gt;Workout Complete&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>
                    <div className="col-lg-9 col-sm-12 topicContents pb-5 px-4">
                        <div id="htmlDir_5_5">
                            {SectionPageHeader("Long Tables", "")}
                            <div id="longTables">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3">
                                                There are three (3) elements that help distinguish between the main content of a table and the
                                                first and last rows (Which may contain different content). These elements are used to help screen
                                                readers as well as managing styling.
                                            </p>
                                            <p className="textEbodyText_3ntry_1">
                                                The three (3) elements are:
                                            </p>
                                            <ol className={"introductionList__outerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;thead&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used to encapsulate all headings for the table.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;tbody&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used to encapsulate all data for the table.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    &lt;tfoot&gt;
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used to encapsulate footer data.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="example p-3 text-center">
                                                <table id="longTable" className="tablePanel2">
                                                    <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Income</th>
                                                        <th>Expenditure</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1<sup>st</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2<sup>nd</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3<sup>rd</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>11<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>13<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>14<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>15<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>17<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>18<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>19<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>20<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>21<sup>st</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>22<sup>nd</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>23<sup>rd</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>24<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>25<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>26<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>27<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>28<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>29<sup>th</sup> Feb</td>
                                                        <td>250</td>
                                                        <td>36</td>
                                                    </tr>
                                                    </tbody>
                                                    <tfoot>
                                                    <tr>
                                                        <td>EOM Totals:</td>
                                                        <td>7250</td>
                                                        <td>1044</td>
                                                    </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="example p-3">
<pre>
&lt;table id="longTable" className="tablePanel2"&gt;
    &lt;thead&gt;
    &lt;tr&gt;
    &lt;th&gt;Date&lt;/th&gt;
    &lt;th&gt;Income&lt;/th&gt;
    &lt;th&gt;Expenditure&lt;/th&gt;
    &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    &lt;tr&gt;
    &lt;td&gt;1&lt;sup&gt;st&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;2&lt;sup&gt;nd&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;3&lt;sup&gt;rd&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;4&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;5&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;6&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;7&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;8&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;9&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;10&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;11&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;12&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;13&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;14&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;15&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;16&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;17&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;18&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;19&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;20&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;21&lt;sup&gt;st&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;22&lt;sup&gt;nd&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;23&lt;sup&gt;rd&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;24&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;25&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;26&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;27&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;28&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;td&gt;29&lt;sup&gt;th&lt;/sup&gt; Feb&lt;/td&gt;
    &lt;td&gt;250&lt;/td&gt;
    &lt;td&gt;36&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;tfoot&gt;
    &lt;tr&gt;
    &lt;td&gt;EOM Totals:&lt;/td&gt;
    &lt;td&gt;7250&lt;/td&gt;
    &lt;td&gt;1044&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/tfoot&gt;
    &lt;/table&gt;
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
                        <div id="htmlDir_5_6">
                            {SectionPageHeader("Deprecated Table Code", "")}
                            <div id="deprecatedTableCode">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="col-lg-12">
                                            <p className="bodyText_3">
                                                In older versions of HTML, there are attributes that were used that are now deprecated and should not
                                                be used on newer websites. All attributes mentioned in this section have been replaced by CSS.
                                                The attributes are:
                                            </p>
                                            <ul className={"introductionList__outerList"}>
                                                <li className={"pb-3 bulletItem"}>
                                                    <strong>width</strong>
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            Used on the opening &lt;table&gt; Tag to indicate how wide that table should be, as well as, the &lt;th&gt; and
                                                            &lt;td&gt; Tags to specify the width of individual cells. The value is provided in pixels. The columns in a
                                                            table need to form a straight line, so it's often that width will be placed on the first row (and all
                                                            subsequent rows would use that setting).
                                                        </li>
                                                        <li className={"pb-3 bulletItem"}>
                                                            The opening &lt;table&gt; Tag could also use the <strong>cellpadding</strong> attribute to add space inside
                                                            each cell of the table, and the <strong>cellspacing</strong> attribute to create space between each
                                                            cell of the table. The values provided should be specified in pixels.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    <strong>border</strong>
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            The <strong>border</strong> attribute was used on both the &lt;table&gt; and &lt;td&gt; Tags to indicate
                                                            width of the border in pixels.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={"pb-3 bulletItem"}>
                                                    <strong>bgcolor</strong>
                                                    <ul className={"introductionList__innerList"}>
                                                        <li className={"pb-3 bulletItem"}>
                                                            The <strong>bgcolor</strong> attribute was used to indicate background colors of either the entire
                                                            table or individual table cells. The value is usually a hex code.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row col-sm-12 col-lg-12">
                                        <div className="col col-lg-6 col-sm-12">
                                            <div className="col-lg-12">
                                                <div className="example p-3">
                                                    <small>Example Using Width & Spacing</small>
                                                    <table className="tablePanel2">
                                                        <tr>
                                                            <th></th>
                                                            <th>Withdrawn</th>
                                                            <th>Credit</th>
                                                            <th>Balance</th>
                                                        </tr>
                                                        <tr>
                                                            <th>January</th>
                                                            <td>250.00</td>
                                                            <td>660.50</td>
                                                            <td>410.50</td>
                                                        </tr>
                                                        <tr>
                                                            <th>February</th>
                                                            <td>135.55</td>
                                                            <td>895.20</td>
                                                            <td>1170.15</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="example p-3">
<pre>
&lt;table className="tablePanel2" width="400" cellpadding="10" cellspacing="5"&gt;
    &lt;tr&gt;
    &lt;th width="150"&gt;&lt;/th&gt;
    &lt;th&gt;Withdrawn&lt;/th&gt;
    &lt;th&gt;Credit&lt;/th&gt;
    &lt;th width="150"&gt;Balance&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;January&lt;/th&gt;
    &lt;td&gt;250.00&lt;/td&gt;
    &lt;td&gt;660.50&lt;/td&gt;
    &lt;td&gt;410.50&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;February&lt;/th&gt;
    &lt;td&gt;135.55&lt;/td&gt;
    &lt;td&gt;895.20&lt;/td&gt;
    &lt;td&gt;1170.15&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-sm-12">
                                            <div className="col-lg-12">
                                                <div className="example p-3">
                                                    <small>Example Using Border & Background</small>
                                                    <table className="tablePanel2">
                                                        <tr>
                                                            <th></th>
                                                            <th>Withdrawn</th>
                                                            <th>Credit</th>
                                                            <th>Balance</th>
                                                        </tr>
                                                        <tr>
                                                            <th>January</th>
                                                            <td>250.00</td>
                                                            <td>660.50</td>
                                                            <td>410.50</td>
                                                        </tr>
                                                        <tr>
                                                            <th>February</th>
                                                            <td>135.55</td>
                                                            <td>895.20</td>
                                                            <td>1170.15</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="example p-3">
<pre>
&lt;table className="tablePanel2" border="3" bgcolor="#efefef" cellpadding="10" cellspacing="5"&gt;
    &lt;tr&gt;
    &lt;th width="150"&gt;&lt;/th&gt;
    &lt;th&gt;Withdrawn&lt;/th&gt;
    &lt;th&gt;Credit&lt;/th&gt;
    &lt;th width="150" bgcolor="#ccc"&gt;Balance&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;January&lt;/th&gt;
    &lt;td&gt;250.00&lt;/td&gt;
    &lt;td&gt;660.50&lt;/td&gt;
    &lt;td bgcolor="#ccc"&gt;410.50&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;th&gt;February&lt;/th&gt;
    &lt;td&gt;135.55&lt;/td&gt;
    &lt;td&gt;895.20&lt;/td&gt;
    &lt;td bgcolor="#ccc"&gt;1170.15&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/table&gt;
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