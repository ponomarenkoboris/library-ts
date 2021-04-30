import React from 'react'

interface ModalProps {
    readonly title: string,
    readonly author: Array<string>,
    readonly firstPublishYear: number,
    readonly ISBN?: Array<string>,
    readonly publishPlace: Array<string>,
    readonly coverData?: {
        readonly key: string,
        readonly value: string
    }
}

export function Modal(props: ModalProps) {

    return (
        <div className="modal-container">
            <h1>{props.title}</h1>
        </div>
    )
}