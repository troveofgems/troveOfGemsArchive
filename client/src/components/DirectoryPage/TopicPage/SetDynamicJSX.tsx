// HTML Pages
import {default as HTMLStructure, SideNavigationData as HTMLStructureSideNavigationData} from "./topics/html-pages/structure/Structure";
import {default as HTMLText, SideNavigationData as HTMLTextSideNavigationData} from "./topics/html-pages/text/Text";
import {default as HTMLLists, SideNavigationData as HTMLListsSideNavigationData} from "./topics/html-pages/lists/Lists";
import {default as HTMLLinks, SideNavigationData as HTMLLinksSideNavigationData} from "./topics/html-pages/links/Links";
import {default as HTMLImages, SideNavigationData as HTMLImagesSideNavigationData} from "./topics/html-pages/images/Images";
import {default as HTMLTables, SideNavigationData as HTMLTablesSideNavigationData} from "./topics/html-pages/tables/Tables";
import {default as HTMLForms, SideNavigationData as HTMLFormsSideNavigationData} from "./topics/html-pages/forms/Forms";
import {default as HTML5Layout, SideNavigationData as HTML5LayoutSideNavigationData} from "./topics/html-pages/html5Layout/HTML5Layout";
import {default as HTML5FlashVideoAudio, SideNavigationData as HTML5FlashVideoAudioSideNavigationData} from "./topics/html-pages/flashVideoAudio/FlashVideoAudio";
import {default as HTML5ExtraMarkup, SideNavigationData as HTML5ExtraMarkupSideNavigationData} from "./topics/html-pages/extraMarkup/ExtraMarkup";

// CSS Pages
import {default as CSS3Color, SideNavigationData as CSS3ColorSideNavigationData} from "./topics/css-pages/color/Color";

// Data Visualization Pages
import {default as GraphingData, SideNavigationData as DVGraphingDataSideNavigationData} from "./topics/dv-pages/graphingData/GraphingData";


// @ts-ignore
export default function setDynamicJSX(directory: string, topic: string) {
    let topicContents = {
        element: undefined,
        directoryAnchors: undefined
    };
    switch(directory) {
        case "html":
            switch(topic) {
                case "structure":
                    // @ts-ignore
                    topicContents.element = <HTMLStructure />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTMLStructureSideNavigationData();
                    break;
                case "text":
                    // @ts-ignore
                    topicContents.element = <HTMLText />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTMLTextSideNavigationData();
                    break;
                case "lists":
                    // @ts-ignore
                    topicContents.element = <HTMLLists />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTMLListsSideNavigationData();
                    // code block
                    break;
                case "links":
                    // @ts-ignore
                    topicContents.element = <HTMLLinks />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTMLLinksSideNavigationData();
                    // code block
                    break;
                case "images":
                    // @ts-ignore
                    topicContents.element = <HTMLImages />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTMLImagesSideNavigationData();
                    // code block
                    break;
                case "tables":
                    // @ts-ignore
                    topicContents.element = <HTMLTables />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTMLTablesSideNavigationData();
                    // code block
                    break;
                case "forms":
                    // @ts-ignore
                    topicContents.element = <HTMLForms />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTMLFormsSideNavigationData();
                    // code block
                    break;
                case "layout":
                    // @ts-ignore
                    topicContents.element = <HTML5Layout />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTML5LayoutSideNavigationData();
                    // code block
                    break;
                case "flash-video-audio":
                    // @ts-ignore
                    topicContents.element = <HTML5FlashVideoAudio />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTML5FlashVideoAudioSideNavigationData();
                    // code block
                    break;
                case "extra-markup":
                    // @ts-ignore
                    topicContents.element = <HTML5ExtraMarkup />;
                    // @ts-ignore
                    topicContents.directoryAnchors = HTML5ExtraMarkupSideNavigationData();
                    // code block
                    break;
                default:
                // code block
            }
            break;
        case "css":
            switch(topic) {
                case "basic-css":
                    break;
                case "color":
                    // @ts-ignore
                    topicContents.element = <CSS3Color />;
                    // @ts-ignore
                    topicContents.directoryAnchors = CSS3ColorSideNavigationData();
                    break;
                case "lists":
                    // code block
                    break;
                case "links":
                    // code block
                    break;
                case "images":
                    // code block
                    break;
                case "tables":
                    // code block
                    break;
                case "forms":
                    // code block
                    break;
                case "html5Layout":
                    // code block
                    break;
                case "flash-video-audio":
                    // code block
                    break;
                case "extraMarkup":
                    // code block
                    break;
                default:
                // code block
            }
            break;
        case "data-visualizations":
            switch(topic) {
                case "graphing-data":
                    // @ts-ignore
                    topicContents.element = <GraphingData />;
                    // @ts-ignore
                    topicContents.directoryAnchors = DVGraphingDataSideNavigationData();
                    break;
                case "text":
                    break;
                case "lists":
                    break;
                case "links":
                    // code block
                    break;
                case "images":
                    // code block
                    break;
                case "tables":
                    // code block
                    break;
                case "forms":
                    // code block
                    break;
                case "html5Layout":
                    // code block
                    break;
                case "flashVideoAudio":
                    // code block
                    break;
                case "extraMarkup":
                    // code block
                    break;
                default:
                // code block
            }
            break;
        case "accessibility":
            switch(topic) {
                case "structure":
                    break;
                case "text":
                    break;
                case "lists":
                    break;
                case "links":
                    // code block
                    break;
                case "images":
                    // code block
                    break;
                case "tables":
                    // code block
                    break;
                case "forms":
                    // code block
                    break;
                case "html5Layout":
                    // code block
                    break;
                case "flashVideoAudio":
                    // code block
                    break;
                case "extraMarkup":
                    // code block
                    break;
                default:
                // code block
            }
            break;
        case "owasp":
            switch(topic) {
                case "structure":
                    break;
                case "text":
                    break;
                case "lists":
                    break;
                case "links":
                    // code block
                    break;
                case "images":
                    // code block
                    break;
                case "tables":
                    // code block
                    break;
                case "forms":
                    // code block
                    break;
                case "html5Layout":
                    // code block
                    break;
                case "flashVideoAudio":
                    // code block
                    break;
                case "extraMarkup":
                    // code block
                    break;
                default:
                // code block
            }
            break;
        default:
        // code block
    }

    return topicContents;
}