import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./reducers/tasks";
import userSlice from "./reducers/user";
const store = configureStore({
  reducer: {
    taskList: tasksSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
