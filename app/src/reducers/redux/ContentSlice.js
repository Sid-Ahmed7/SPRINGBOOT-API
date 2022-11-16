import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contenue: []
}

const contenueSlice = createSlice({
    name:'contenue',
    initialState,
    reducers: {
        ReadContent: (state, {payload}) => {
            state.contenue = payload;
        },
        CheckWord: (state, action) => {
            state.contenue.push(action.payload);
        },
        deleteU: (state, action) => {
            state.contenue = action.payload;
        }



    }
});

export const {ReadContent,CheckContenue,deleteU} = contenueSlice.actions;

export default contenueSlice.reducer;