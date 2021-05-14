import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { StoreValidation } from "../namespace/storeValidation";

// TODO use namespace

interface Books {
    allBooks: any[],
    modalView: object
}

const initialState: Books = {
    allBooks: [],
    modalView: {}
}

export const booksSlice = createSlice({
    name: 'books-storage',
    initialState,
    reducers: {
        addNewBooks: (state, action: PayloadAction<any[]>) => {
            state.allBooks = [ ...action.payload ]
        },
        openModal: (state, action: { payload: any }) => {
            if (typeof action.payload === undefined) return
            state.modalView = { ...action.payload }
        },
        clearModalData: (state) => {
            state.modalView = {}
            const body: HTMLElement | null = document.querySelector('body');
            if (body?.style) body.style.overflowY = 'initial';
        }
    }
});

export const { addNewBooks, openModal, clearModalData } = booksSlice.actions
// export const getAllBooksInStorage = (state: RootState) => state.books.allBooks
export default booksSlice.reducer

