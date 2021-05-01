import React from 'react'
import { StoreValidation } from '../../namespace/storeValidation'
import { useAppDispatch } from "../../app/state";
import { closeModal } from "../../app/books";
import './Modal.scss'


// TODO complete modal styles
export function Modal(props: { book: StoreValidation.ModalProps }) {
    const dispatch = useAppDispatch()
    const { book } = props;

    console.log('props from modal')

    return (
        <div className="modal-container">
            <div className="modal-header">
                <h3 className="modal-title">Книга</h3>
                <p className="close-modal" onClick={() => dispatch(closeModal())}>&#10006;</p>
            </div>
            <h1 className="book-title">Название: {book.title}</h1>
            <p className="book-author">Автор: {book.author}</p>
            <p className="first-publish-year">Год первой публикации: {book.firstyear}</p>
        </div>
    )
}