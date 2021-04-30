import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {RootState} from "./state";

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
        lookClose: (state, action: PayloadAction<any>) => {
            state.modalView = { ...action.payload }
        }
    }
});

export const { addNewBooks, lookClose } = booksSlice.actions
// export const getAllBooksInStorage = (state: RootState) => state.books.allBooks
export default booksSlice.reducer

