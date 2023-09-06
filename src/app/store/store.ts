import { configureStore } from "@reduxjs/toolkit";
import tasksSliceReducer from "./reducers/tasks";
import userSliceReducer from "./reducers/user";
import modalSliceReducer from "./reducers/modal";
import formDataSliceReducer from "./reducers/formData";

const store = configureStore({
  reducer: {
    taskList: tasksSliceReducer,
    user: userSliceReducer,
    modal: modalSliceReducer,
    formData: formDataSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
