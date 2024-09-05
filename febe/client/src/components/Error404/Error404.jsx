import {useRouteError} from "react-router-dom";
import "./Error404.scss";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className={"inheritHeight fallingThroughSpaceBackground d-flex justify-content-center"}>
            <div className={"container-fluid m-0 p-0 errorMessageContainer"}>
                <h1 className={"e404Title"}>Error 404: Broken Link</h1>
                <figure className={"text-center tablePanelBackground_darker"}>
                    <blockquote className="blockquote p-3">
                        <p className={"blockquoteOverrideStyles"}>
                            Atrus stepped back, out over the lip of the fissure, falling, tumbling down into that
                            great expanse of stars, his hands gripping the book, opening the cover as he fell into
                            the darkness.
                        </p>
                        <p className={"blockquoteOverrideStyles "}>
                            What do you see Atrus?
                        </p>
                        <p className={"blockquoteOverrideStyles "}>
                            I see stars Grandmother. A great ocean of stars...
                        </p>
                    </blockquote>
                    <figcaption className="blockquote-footer blockquote-footer-fs p-1">
                        Atrus in
                        <cite title="Myst: The Book of Atrus">
                            <a className={"bookArchiveLink"}
                               href={"https://archive.org/details/bookofatrusmystb00rand"}>Myst: The Book of Atrus</a>
                        </cite>
                        <br/>by Rand and Robyn Miller with David Wingrove
                    </figcaption>
                    <div className="row row-cols-sm-12">
                        <div className="col-sm">
                        </div>
                        <div className="col-sm p-2">
                            <a className={"externalSiteLink"} href={"/"}>Back To Archival Index</a>
                        </div>
                        <div className="col-sm p-2">
                            <a className={"externalSiteLink"} href={"https://lematworks.tumblr.com/"}>About Background Gif</a>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    );
}
