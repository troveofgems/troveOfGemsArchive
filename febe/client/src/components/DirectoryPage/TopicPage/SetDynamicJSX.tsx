// HTML Pages
import {default as HTMLStructure, SideNavigationData as HTMLStructureSideNavigationData} from "./topics/html-pages/structure/Structure";
import {default as HTMLText, SideNavigationData as HTMLTextSideNavigationData} from "./topics/html-pages/text/Text";

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
        case "css":
            // code block
            break;
        case "data":
            // code block
            break;
        case "accessibility":
            // code block
            break;
        case "owasp":
            // code block
            break;
        default:
        // code block
    }

    return topicContents;
}