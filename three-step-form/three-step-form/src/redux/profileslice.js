import { createSlice } from '@reduxjs/toolkit';


const initialState   = {
    name : " ",
    age : " ",
    dob : "",
    email: "",
    phone  : " "
}


const ProfileSlice  = createSlice({
    name  : "profile",
    initialState,
    reducers:{
        updateProfileform : (state , action) => {
            const {field , value } =  action.payload
            state[field] = value
        },
        resetProfile : () => initialState
    }
})


export const {updateProfileform ,  resetProfile} = ProfileSlice.actions;
export default ProfileSlice.reducer