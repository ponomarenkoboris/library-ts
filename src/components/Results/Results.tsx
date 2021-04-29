import React from 'react'
import { useAppSelector } from "../../app/state";
import { useLoaderContext } from "../../context/LoaderContext";
import './Loader.scss'
import './Results.scss'

// Loader component
const Loader = () => <div className="loader"></div>

export function Results() {
    const books = useAppSelector(state => state.books.allBooks);
    const { status } = useLoaderContext()

    return (
        <>
            {status === 'enable' ? <Loader /> : ''}
            {!books.length ? <h1>Введите название книги</h1> : books.map((book, idx) => (
                <div key={idx} className="book-wrapper">
                    {/*TODO add image*/}
                    {/*<img src={`http://covers.openlibrary.org/b/isbn/$value-M.jpg`} alt=""/>*/}
                    <p className="book-title">{book.title}</p>
                    <p className="book-author-name">{book.author_name}</p>
                </div>
            ))}
        </>
    )
}