import React from 'react'
// import { Modal } from './components/Modal/Modal'
import { Results } from './components/Results/Results'
import { Search } from './components/Search/Search'
import { LoaderProvider } from "./context/LoaderContext";
import './App.scss'

export function App() {
    return (
        <div className="app-container">
            <div className="modal-container">
                {/*<Modal />*/}
            </div>
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