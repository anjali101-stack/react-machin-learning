import { createSlice } from "@reduxjs/toolkit";


const initialState = "profile";

const ActivebarSlice = createSlice({
    name : 'active',
    initialState,
    reducers : {
        setActivebar :  (state, action) => action.payload
    }
})
export const {setActivebar} = ActivebarSlice.actions
export default ActivebarSlice.reducer