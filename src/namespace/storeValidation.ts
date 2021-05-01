export namespace StoreValidation {
    export interface ModalProps {
        title: string,
        author: Array<string> | string,
        firstyear: number,
        isbn: Array<string> | string,
        publishPlace?: Array<string> | string,
        coverData?: {
            key: string,
            value: string
        }
    }
}