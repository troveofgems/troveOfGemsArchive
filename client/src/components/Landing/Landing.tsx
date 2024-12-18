import "./Landing.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BookList from "./BookList/BookList";

export default function Landing() {
    return (
        <>
            <Header />
            <main>
                <div className="container-fluid inheritHeight">
                    <div id="notViewableMessage">
                        <figure className={"text-center tablePanelBackground_darker"}>
                            <blockquote className="blockquote p-3">
                                <p className={"text-start"}>
                                    This site is not configured to render below 359px width viewports. Please resize the
                                    browser
                                    width to be greater than 359px.
                                </p>
                            </blockquote>
                        </figure>
                    </div>
                    <div id="trulyFalling"></div>
                    <div
                        className="row row-cols-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-2 row-cols-xxl-3 containerMargins bookList">
                        <BookList/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};