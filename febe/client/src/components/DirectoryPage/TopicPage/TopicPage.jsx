import "./TopicPage.scss"
import SidebarNavigator from "../../shared/SidebarNavigator/SidebarNavigator";
import {useParams} from "react-router-dom";
import SetDynamicJSX from "./SetDynamicJSX";

export default function TopicPage() {
    const {directory, topic} = useParams();
    const fetchedTopic = SetDynamicJSX(directory, topic);

    return (
        <main className="mainSubSection">
            <SidebarNavigator anchorList={fetchedTopic.directoryAnchors} />
            {fetchedTopic.element}
        </main>
    );
};