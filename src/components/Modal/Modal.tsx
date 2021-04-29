import React from 'react'

interface ModalPropsType {
    imgSrc: string,
    title: string,
    author: string,
    firstPublishYear: number,
    ISBN: string | null
}

export function Modal(props: ModalPropsType) {
    return (
        <div className="modal-container">
            <h1>Modal Container</h1>
        </div>
    )
}