// slices/formDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  id: string;
  title: string;
  description: string;
  checked: boolean;
};
const initialState: initialStateType = {
  id: "",
  title: "",
  description: "",
  checked: false,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearFormData: (state) => {
      return {
        id: "",
        title: "",
        description: "",
        checked: false,
      };
    },
  },
});

export const { updateFormData, clearFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
