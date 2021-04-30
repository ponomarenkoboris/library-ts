import React from 'react'
// import { Modal } from './components/Modal/Modal';
import { Results } from './components/Results/Results'
import { Search } from './components/Search/Search'
import { LoaderProvider } from "./context/LoaderContext";
import './App.scss'
// import {useAppSelector} from "./app/state";

// TODO complete modal
export function App() {
    // const book: any = useAppSelector(state => state.books.modalView)

    return (
        <div className="app-container">
            {/*{!Object.keys(book).length ?*/}
            {/*    <div className="modal-container">*/}
            {/*        <Modal />*/}
            {/*    </div> : ''}*/}
            <LoaderProvider>
                <div className="search-container">
                    <Search />
                </div>
                <div className="results-container">
                    <Results />
                </div>
            </LoaderProvider>
        </div>
    )
}