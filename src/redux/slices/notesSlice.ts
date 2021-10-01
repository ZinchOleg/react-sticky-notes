import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICard} from "../../interfaceTypes/interfaceTypes";
import {todoAPI} from "../../api/api";

export interface INotesState {
    items: ICard[]
    isLoaded: boolean
    filtered: boolean,
}

const initialState: INotesState = {
    items: [],
    isLoaded: false,
    filtered: false
}

export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async () => {
        return await todoAPI.getNotes()
    }
)

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<ICard>) => {
            state.items = [...state.items, action.payload]
        },
        removeNote: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        changeNoteText: (state, action: PayloadAction<{id: number, value: string}>) => {
            const mutableItem = state.items.findIndex(item => item.id === action.payload.id)
            state.items[mutableItem].text = action.payload.value
        },
        changeFavouriteStatus: (state, action: PayloadAction<number>) => {
            const mutableItem = state.items.findIndex(item => item.id === action.payload)
            state.items[mutableItem].favourite = !state.items[mutableItem].favourite
        },
        changeNoteColor: (state, action: PayloadAction<{id: number, color: string}>) => {
            const mutableItem = state.items.findIndex(item => item.id === action.payload.id)
            state.items[mutableItem].color = action.payload.color
        },
        setFilteredStatus: (state, action: PayloadAction<boolean>) => {
            state.filtered = action.payload
        },
        setNotesOrder: (state, action: PayloadAction<{hoverID: number, cardID: number}>) => {
            const hoverCardIndex = state.items.findIndex(item => item.id === action.payload.hoverID)
            const dragCardIndex = state.items.findIndex(item => item.id === action.payload.cardID);
            [state.items[hoverCardIndex], state.items[dragCardIndex]] = [state.items[dragCardIndex], state.items[hoverCardIndex]]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNotes.fulfilled, (state, action: PayloadAction<ICard[]>) => {
            state.isLoaded = true
            state.items = action.payload
        })
    }
})

export const {addNote, removeNote, changeNoteText, changeFavouriteStatus, changeNoteColor, setFilteredStatus, setNotesOrder} = notesSlice.actions

export default notesSlice.reducer