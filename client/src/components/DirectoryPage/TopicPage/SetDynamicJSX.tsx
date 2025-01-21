// HTML Pages
import {default as HTMLStructure, SideNavigationData as HTMLStructureSideNavigationData} from "./topics/html-pages/structure/Structure";
import {default as HTMLText, SideNavigationData as HTMLTextSideNavigationData} from "./topics/html-pages/text/Text";
import {default as HTMLLists, SideNavigationData as HTMLListsSideNavigationData} from "./topics/html-pages/lists/Lists";
import {default as HTMLLinks, SideNavigationData as HTMLLinksSideNavigationData} from "./topics/html-pages/links/Links";
import {default as HTMLImages, SideNavigationData as HTMLImagesSideNavigationData} from "./topics/html-pages/images/Images";

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
        case "css":
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
        case "data":
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