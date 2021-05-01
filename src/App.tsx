import React from 'react'
import { Modal } from './components/Modal/Modal';
import { Results } from './components/Results/Results'
import { Search } from './components/Search/Search'
import { LoaderProvider } from "./context/LoaderContext";
import './App.scss'
import {useAppDispatch, useAppSelector} from "./app/state";
import { openModal } from "./app/books";
// import {StoreValidation} from "./namespace/storeValidation";

// TODO complete modal and use namespace
export function App() {
    const book: any = useAppSelector(state => state.books.modalView)
    const dispatch = useAppDispatch()

    function openInModal(event: any): void {
        const wrapper: HTMLDivElement | null = event.target.closest('.book-wrapper')
        if (typeof wrapper !== null) {
            if (wrapper?.dataset) dispatch(openModal({ ...wrapper.dataset }))
        }
        return
    }

    return (
        <div className="app-container">
            {Object.entries(book).length !== 0 &&
                <div className="modal-container">
                    <Modal book={book} />
                </div>
            }
            <LoaderProvider>
                <div className="search-container">
                    <Search />
                </div>
                <div onClick={openInModal} className="results-container">
                    <Results />
                </div>
            </LoaderProvider>
        </div>
    )
}