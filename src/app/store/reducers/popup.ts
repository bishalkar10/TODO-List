import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isOpen: string;
};

const initialState: initialStateType = {
  isOpen: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    closePopup: (state) => {
      state.isOpen = false;
    },
    togglePopup: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openPopup, closePopup, togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
