import React from 'react'
import { Modal } from './components/Modal/Modal';
import { Results } from './components/Results/Results'
import { Search } from './components/Search/Search'
import { LoaderProvider } from "./context/LoaderContext";
import appStyles from './App.module.scss'
import resultsStyles from './components/Results/Results.module.scss'
import modalStyles from './components/Modal/Modal.module.scss'
import { useAppDispatch, useAppSelector } from "./app/state";
import { clearModalData, openModal } from "./app/books";
// import {StoreValidation} from "./namespace/storeValidation";

// TODO complete modal and use namespace
export function App() {
    const modalData: any = useAppSelector(state => state.books.modalView)
    const dispatch = useAppDispatch()

    function openInModal(event: any): void {
        const wrapper: HTMLDivElement | null = event.target.closest(`.${resultsStyles.bookWrapper}`)
        if (typeof wrapper !== null) {
            if (wrapper?.dataset) dispatch(openModal({ ...wrapper.dataset }))
        }
        return
    }

    const closeModalView = (event: any):void => {
        if (!event.target.closest(`.${modalStyles.modalContainer}`) || event.target.className === modalStyles.closeModal) dispatch(clearModalData())
    }

    return (
        <div className={appStyles.appContainer}>
            {Object.entries(modalData).length !== 0 &&
                <div className={appStyles.modalContainer} onClick={closeModalView}>
                    <Modal book={modalData} />
                </div>
            }
            <LoaderProvider>
                <div className={appStyles.searchContainer}>
                    <Search />
                </div>
                <div onClick={openInModal} className={appStyles.resultsContainer}>
                    <Results />
                </div>
            </LoaderProvider>
        </div>
    )
}