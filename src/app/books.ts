import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "./state";

interface Books {
    allBooks: any[],
}

const initialState: Books = {
    allBooks: [],
}

export const booksSlice = createSlice({
    name: 'books-storage',
    initialState,
    reducers: {
        addNewBooks: (state, action: PayloadAction<any[]>) => {
            state.allBooks = [ ...action.payload ]
        }
    }
});

export const { addNewBooks } = booksSlice.actions
export const getAllBooksInStorage = (state: RootState) => state.books.allBooks
export default booksSlice.reducer

