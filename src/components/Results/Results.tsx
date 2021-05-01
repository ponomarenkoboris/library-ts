import React from 'react';
import { useAppSelector, useAppDispatch } from "../../app/state";
import { useLoaderContext } from "../../context/LoaderContext";
import './Loader.scss'
import './Results.scss'

// Loader component
const Loader = () => <div className="loader"></div>

//TODO complete render
export function Results() {
    const books: Array<any> = useAppSelector(state => state.books.allBooks);
    const { loaderStatus } = useLoaderContext();

    if (loaderStatus === 'enable') return <Loader />
    if (books.length === 0) return <p className="empty-store-message">Добро пожаловать!</p>

    return (
        <>
            {books.map((book, idx) =>
                <div className="book-wrapper"
                     key={idx}
                     data-title={book.title}
                     data-author={book.author_name}
                     data-firstyear={book.first_publish_year}
                     data-isbn={book.isbn}
                >
                    <p className="book-title">Название: {book.title}</p>
                    <div className="book-author-name-wrapper">Автор: {book.author_name ? book.author_name.map((name: string, idx: number) =>
                        <p key={idx} className="author-name">{idx === 0 ? name : `${name},`}</p>) :
                        <p className="author-name">Unknown</p>
                    }
                    </div>
                </div>

            )}
        </>
    )
}