import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modalSlice'
import notesReducer from './slices/notesSlice'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        notes: notesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>