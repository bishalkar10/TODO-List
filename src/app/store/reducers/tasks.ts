import { createSlice } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
  description: string;
  checked: boolean;
};

export type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [
    {
      id: "398fa766-309a-4cab-85ca-7997d2c972c0",
      title: "Task Title 1",
      description: "Lorem ipsum dolor...",
      checked: false,
    },
    {
      id: "b84d120e-3bbe-4298-a6b8-6b446e24df4a",
      title: "Task Title 2",
      description: "Lorem ipsum dolor...",
      checked: false,
    },
    {
      id: "65bc825d-a92f-45cb-b952-db1239614051",
      title: "Task Title 3",
      description: "Lorem ipsum dolor...",
      checked: false,
    },
    {
      id: "409a0555-4314-449a-9c91-1f8bb5435eb1",
      title: "Task Title 4",
      description: "Lorem ipsum dolor...",
      checked: false,
    },
    {
      id: "083a2dd0-f83d-488c-932f-de093b44bf24",
      title: "Task Title 5",
      description: "Lorem ipsum dolor...",
      checked: false,
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
        state.tasks[taskIndex] = action.payload;
      }
      return state;
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
