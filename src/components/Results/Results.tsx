import React, {ReactElement} from 'react';
import { useAppSelector } from "../../app/state";
import { useLoaderContext } from "../../context/LoaderContext";
import loaderStyles from './Loader.module.scss'
import resultsStyles from './Results.module.scss'

// Loader component
const Loader = (): ReactElement => <div className={loaderStyles.loader}></div>

// Book cover
const FindCover = ({ book }: any): ReactElement => {
    const avaliableFormat: Array<string> = ['isbn', 'oclc', 'lccn', 'olid', 'id']
    let key, value = '';
    Object.keys(book).forEach(item => {
        avaliableFormat.forEach(format => {
            if (item === format) {
                key = format
                value = book[format][0]
            }
        })
    })

    return <img src={`http://covers.openlibrary.org/b/${key}/${value}-S.jpg`} alt='Обложка книги' className={resultsStyles.coverPicture}/>
}

export function Results() {
    const books: Array<any> = useAppSelector(state => state.books.allBooks);
    const { loaderStatus } = useLoaderContext();

    if (loaderStatus === 'enable') return <Loader />
    if (books.length === 0) return <p className={resultsStyles.emptyStoreMessage}>Добро пожаловать!</p>

    return (
        <>
            {books.map((book, idx) =>
                <div className={resultsStyles.bookWrapper}
                     key={idx}
                     data-title={book.title}
                     data-author={book.author_name}
                     data-firstyear={book.first_publish_year}
                     data-isbn={book.isbn}
                >
                    <p className={resultsStyles.bookTitle}>Название: {book.title}</p>
                    <FindCover book={book} />
                    <div className={resultsStyles.bookAuthorNameWrapper}>Автор: {book.author_name ? book.author_name.map((name: string, idx: number) =>
                        <p key={idx} className={resultsStyles.authorName}>{idx === 0 ? name : `${name},`}</p>) :
                        <p className={resultsStyles.authorName}>Unknown</p>
                    }
                    </div>
                </div>
            )}
        </>
    )
}