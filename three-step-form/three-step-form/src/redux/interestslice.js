import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    javascript: false,
    python: false,
    php: false,
    css: false,
    html: false
}


const interestSlice = createSlice({
    name: "interest",
    initialState,
    reducers: {
        toggleInterest: (state, action) => {
            const key = action.payload
            if (state.hasOwnProperty(key)) {
                state[key] = !state[key]
            }
        },
        resetInterest: () => initialState,

    }

})


export const { toggleInterest, resetInterest } = interestSlice.actions
export default interestSlice.reducer