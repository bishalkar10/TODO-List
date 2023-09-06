import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    mode: "add",
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
      state.mode = action.payload.mode;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
