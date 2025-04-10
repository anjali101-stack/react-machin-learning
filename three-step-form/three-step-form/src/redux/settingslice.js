// redux/settingslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  notification: false,
  theme: "light",
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    updateSetting: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetSettings: () => initialState,
  },
});

export const { updateSetting, resetSettings } = settingSlice.actions;
export default settingSlice.reducer;
