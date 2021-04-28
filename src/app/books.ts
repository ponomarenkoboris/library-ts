import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "./state";

interface Books {
    allBooks: any[],
    quantity: number
}

const initialState: Books = {
    allBooks: [],
    quantity: 0
}

export const booksSlice = createSlice({
    name: 'books-storage',
    initialState,
    reducers: {
        addNewBooks: (state, action: PayloadAction<any[]>) => {
            // state.allBooks = [ ...action.payload ]
            state.allBooks.push(action.payload)
            state.quantity = action.payload.length
        }
    }
});

export const { addNewBooks } = booksSlice.actions
export const getAllBooksInStorage = (state: RootState) => state.books.allBooks
export default booksSlice.reducer

