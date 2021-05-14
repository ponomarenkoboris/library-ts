import React from 'react'
import { StoreValidation } from '../../namespace/storeValidation'
import modalStyles from './Modal.module.scss'


// TODO complete modal styles
export function Modal(props: { book: StoreValidation.ModalProps }) {
    const { book } = props;
    const body: HTMLElement | null = document.querySelector('body');
    if (body?.style) body.style.overflowY = 'hidden';

    return (
        <div className={modalStyles.modalContainer}>
            <div className={modalStyles.modalHeader}>
                <h3 className={modalStyles.modalTitle}>Книга</h3>
                <p className={modalStyles.closeModal}>&#10006;</p>
            </div>
            <h1 className={modalStyles.bookTitle}>Название: {book.title}</h1>
            <p className={modalStyles.bookAuthor}>Автор: {book.author}</p>
            <p className={modalStyles.firstPublishYear}>Год первой публикации: {book.firstyear}</p>
        </div>
    )
}