import { createSlice } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
  description: string;
};

export type TasksState = {
  tasks: Map<string, Task>;
};

const initialState: TasksState = {
  tasks: new Map([
    [
      "ab1",
      {
        id: "ab1",
        title: "Task Title 1",
        description: "Lorem ipsum dolor...",
      },
    ],
    [
      "ab2",
      {
        id: "ab2",
        title: "Task Title 2",
        description: "Lorem ipsum dolor...",
      },
    ],
    [
      "x@1",
      {
        id: "x@1",
        title: "Task Title 3",
        description: "Lorem ipsum dolor...",
      },
    ],
    [
      "xy2",
      {
        id: "xy2",
        title: "Task Title 4",
        description: "Lorem ipsum dolor...",
      },
    ],
    [
      "a2y",
      {
        id: "a2y",
        title: "Task Title 5",
        description: "Lorem ipsum dolor...",
      },
    ],
  ]),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.set(action.payload.id, action.payload.task);
      return state;
    },
    deleteTask: (state, action) => {
      state.tasks.delete(action.payload.id);
      return state;
    },
    updateTask: (state, action) => {
      state.tasks.set(action.payload.id, action.payload.task);
      return state;
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
