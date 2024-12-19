import "./BookList.scss";

import Book from "./Book/Book";
import EmptyBook from "./EmptyBook/EmptyBook";

import BookListData from "../../../assets/data/bookList.data";

export default function BookList() {
    let bookListData = new BookListData();
    return (
        <>
            {
                bookListData.map((book, index) => <Book bookData={book} key={`${book.bookKey}-book-${index}`}/>)
            }
            <EmptyBook key={"empty-book-placement"}/>
        </>
    );
}