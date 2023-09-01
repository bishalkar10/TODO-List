import { configureStore } from "@reduxjs/toolkit";
import showButtonsSlice from "./reducers/toggleShow";
import tasksSlice from "./reducers/tasks";

const store = configureStore({
  reducer: {
    showButtons: showButtonsSlice.reducer,
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
