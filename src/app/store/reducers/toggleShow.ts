import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowButtonsState {
  [taskId: string]: boolean;
}

const initialState: ShowButtonsState = {};

export const showButtonsSlice = createSlice({
  name: "showButtons",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<{ taskId: string }>) => {
      const { taskId } = action.payload;
      state[taskId] = !state[taskId] || false;
    },
  },
});

export const { toggle } = showButtonsSlice.actions;

export default showButtonsSlice;
