import { createSlice } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
  description: string;
};

export type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [
    {
      id: "ab1",
      title: "Task Title 1",
      description: "Lorem ipsum dolor...",
    },
    {
      id: "ab2",
      title: "Task Title 2",
      description: "Lorem ipsum dolor...",
    },
    {
      id: "x@1",
      title: "Task Title 3",
      description: "Lorem ipsum dolor...",
    },
    {
      id: "xy2",
      title: "Task Title 4",
      description: "Lorem ipsum dolor...",
    },
    {
      id: "a2y",
      title: "Task Title 5",
      description: "Lorem ipsum dolor...",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload.task);
      return state;
    },
    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1);
      }
      return state;
    },
    updateTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload.task;
      }
      return state;
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
