import "./Book.scss";
import {Link} from "react-router-dom";

export default function Book({bookData}) {
    const setImgClass =
        bookData.bookStamp.bookId === 3 ? "roundLogo grow imgLogo" :
        bookData.bookStamp.bookId === 5 ? "invertLogoColor grow imgLogo" :
        "grow imgLogo";

    return (
        <div className="col book">
            <section className={"bookCover bookMobileView mobile-book"}>
                <div className={"bookStamp"}>
                    <button type="button" className="btn btn-secondary bookTooltip"
                            data-bs-toggle="tooltip" data-bs-placement="top"
                            title={bookData.bookStamp.title}>
                        <span className="dnii">{bookData.bookStamp.bookId}</span>
                    </button>
                </div>
                <div className={"bookTitle"}>
                    <h2 className="linkingBookHeader">
                        Book of
                    </h2>
                    <h2 className={"linkingBookMainHeader"}>
                        {bookData.bookTitle.title}
                    </h2>
                </div>
                <div className={"linkingPanel"}>
                    <div className="pageLinkingPanel">
                        <div className="radioStatic">
                            <div className="linkToDir">
                                <a className="directoryLink"
                                   href={bookData.linkingPanel.hrefLink}>
                                    <img className={setImgClass} src={bookData.linkingPanel.logoSrc}
                                         alt={`${bookData.bookTitle.title} Directory Navigator Logo`}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"bookCover bookTabletView tablet-book"}>
                <div className={"row openBookContent"}>
                    <div className={"col-lg-6 col-md-6 col-sm-6 openBookPage1"}>
                        <h2 className="linkingBookHeader">
                            <button type="button" className="btn btn-secondary bookTooltip"
                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                    title={bookData.bookStamp.title}>
                                <span className="dnii">{bookData.bookStamp.bookId}</span>
                            </button>
                            Book of
                        </h2>
                        <h2 className={"linkingBookMainHeader"}>
                            {bookData.bookTitle.title}
                        </h2>
                        <p className="bookP_1">
                            {bookData.bookEntry.p1}
                        </p>
                        <p className="bookP_2">
                            {bookData.bookEntry.p2}
                        </p>
                    </div>
                    <div className={"col-lg-6 col-md-6 col-sm-6 openBookPage2"}>
                        <div className="pageLinkingPanel">
                            <div className="radioStatic">
                                <div className="linkToDir">
                                    <Link className="directoryLink"
                                          to={bookData.linkingPanel.hrefLink}>
                                        <img className={setImgClass} src={bookData.linkingPanel.logoSrc}
                                             alt={`${bookData.bookTitle.title} Directory Navigator Logo`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"bookCover bookDesktopView desktop-book"}>
                <div className={"row openBookContent"}>
                    <div className={"col-lg-6 col-md-6 col-sm-6 openBookPage1"}>
                        <h2 className="linkingBookHeader">
                            <button type="button" className="btn btn-secondary bookTooltip"
                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                    title={bookData.bookStamp.title}>
                                <span className="dnii">{bookData.bookStamp.bookId}</span>
                            </button>
                            Book of
                        </h2>
                        <h2 className={"linkingBookMainHeader"}>
                            {bookData.bookTitle.title}
                        </h2>
                        <p className="bookP_1">
                            {bookData.bookEntry.p1}
                        </p>
                        <p className="bookP_2">
                            {bookData.bookEntry.p2}
                        </p>
                    </div>
                    <div className={"col-lg-6 col-md-6 col-sm-6 openBookPage2"}>
                        <div className="pageLinkingPanel">
                            <div className="radioStatic">
                                <div className="linkToDir">
                                    <Link className="directoryLink"
                                          to={bookData.linkingPanel.hrefLink}>
                                        <img className={setImgClass} src={bookData.linkingPanel.logoSrc}
                                             alt={`${bookData.bookTitle.title} Directory Navigator Logo`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}