import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./reducers/tasks";
import userSlice from './reducers/user';
const store = configureStore({
  reducer: {
    tasks: tasksSlice, 
    user: userSlice
  },
});

export type TasksState = ReturnType<typeof tasksSlice>;
export type UserState = ReturnType<typeof userSlice>;

export default store;
