import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from './profileslice'
import activeReducer from './activebarslic'
import interestReducer from './interestslice'
import settingReducer from './settingslice'
export const store  =  configureStore({
    reducer: {
        profile : ProfileReducer, 
        active  : activeReducer,
        interest : interestReducer,
        setting : settingReducer
    }
})