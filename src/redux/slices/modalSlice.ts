import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IModalState {
    visible: boolean,
    id: number | null
}

const initialState: IModalState = {
    visible: false,
    id: null
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalVisibility: (state, action: PayloadAction<{visible: boolean, id: number | null}>) => {
            state.visible = action.payload.visible
            state.id = action.payload.id
        }
    }
})

export const {setModalVisibility} = modalSlice.actions

export default modalSlice.reducer