import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./reducers/tasks";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
