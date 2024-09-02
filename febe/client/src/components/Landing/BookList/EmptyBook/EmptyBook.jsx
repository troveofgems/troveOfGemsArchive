import "./EmptyBook.scss";
export default function EmptyBook() {
    return (
        <div className="col book">
            <section className={"bookCover bookMobileView mobile-book"}>
                <div className={"bookStamp"}>
                    <button type="button" className="btn btn-secondary bookTooltip"
                            data-bs-toggle="tooltip" data-bs-placement="top"
                            title="Book 0 - Kortee'nea - Empty Linking Book">
                        <span className="dnidings" title="Book 0 - Kortee'nea - Empty Linking Book">c</span>
                    </button>
                </div>
                <div className={"bookTitle"}>
                    <h2 className="linkingBookHeader">
                        <a className={"korteenea"} href={"https://archive.guildofarchivists.org/wiki/Book#Manufacture"}>Kortee'nea</a>
                    </h2>
                    <h2 className={"linkingBookMainHeader dnii"}>
                        kortee'nea
                    </h2>
                </div>
                <div className={"linkingPanel"}>
                    <div className="pageLinkingPanel">
                        <div className="radioStatic deadLinkingPanel">
                            <div className="linkToDir"></div>
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
                                    title="Book 0 - Empty Linking Book">
                                <span className="dnidings" title="Book 0 - Kortee'nea - Empty Linking Book">c</span>
                            </button>
                            <a className={"korteenea"}  href={"https://archive.guildofarchivists.org/wiki/Book/#Manufacture"}>Kortee'nea</a>
                        </h2>
                        <h2 className={"linkingBookMainHeader dnii"}>
                        kortee'nea
                        </h2>
                        <p className="bookP_1_small">
                            The next pages have yet to be written...
                        </p>
                        <p className="bookPQuote_1">
                            &ldquo;The reader is entertained by the journey of another, but the writer
                            is the changer of worlds.&rdquo;
                        </p>
                        <p className="bookPQuoteAuthor">
                            - Rand Miller
                        </p>
                    </div>
                    <div className={"col-lg-6 col-md-6 col-sm-6 openBookPage2"}>
                        <div className="pageLinkingPanel">
                            <div className="radioStatic deadLinkingPanel">
                                <div className="linkToDir"></div>
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
                                    title="Book 0 - Kortee'nea - Empty Linking Book">
                                <span className="dnidings" title="Book 0 - Kortee'nea - Empty Linking Book">c</span>
                            </button>
                            <a className={"korteenea"}  href={"https://archive.guildofarchivists.org/wiki/Book/#Manufacture"}>Kortee'nea</a>
                        </h2>
                        <h2 className={"linkingBookMainHeader dnii"}>
                            kortee'nea
                        </h2>
                        <p className="bookP_1_small">
                            The next pages have yet to be written...
                        </p>
                        <p className="bookPQuote_1">
                            &ldquo;The reader is entertained by the journey of another, but the writer
                            is the changer of worlds.&rdquo;
                        </p>
                        <p className="bookPQuoteAuthor">
                            - Rand Miller
                        </p>
                    </div>
                    <div className={"col-lg-6 col-md-6 col-sm-6 openBookPage2"}>
                        <div className="pageLinkingPanel">
                            <div className="radioStatic deadLinkingPanel">
                                <div className="linkToDir"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}