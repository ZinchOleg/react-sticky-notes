import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

export const getNotes = createSelector(
        (state: RootState) => state.notes,
        ({items, filtered}) => {
            if(!filtered) {
                return items
            } else {
                return items.filter(item => item.favourite)
            }
        }
    )

export const getLoadedStatus = (state: RootState) => state.notes.isLoaded

export const getNoteById = ((state: RootState, id: number | null) => state.notes.items.find(item => item.id === id))

export const getFilteredStatus = (state: RootState) => state.notes.filtered