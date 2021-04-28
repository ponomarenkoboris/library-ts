import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        books: booksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// dispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>()

// selector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector