import React from 'react'
import { useAppSelector } from "../../app/state";
import { useLoaderContext } from "../../context/LoaderContext";

export function Results() {
    const books = useAppSelector(state => state.books.allBooks);

    return (
        <>
            {!books.length ? <h1>Введите название книги</h1> : JSON.stringify(books)}
        </>
    )
}