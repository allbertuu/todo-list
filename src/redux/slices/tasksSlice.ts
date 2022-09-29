import { createSlice } from "@reduxjs/toolkit";
import { sortNotDoneToDone } from "../../utils/sortNotDoneToDone";
import type { RootState } from "../store";

export interface TaskState {
  id: string;
  taskText: string;
  isDone: boolean;
}

const initialState: TaskState[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const taskAlreadyCreated = state.find(
        (task) =>
          task.taskText.toUpperCase() === action.payload.taskText.toUpperCase()
      );
      if (taskAlreadyCreated) {
        alert("Essa tarefa já existe.");
      } else {
        state.unshift(action.payload);
      }
    },
    removeTask: (state, action) => {
      const chosenTask = state.findIndex(
        (task) => task.id === action.payload.id
      );
      if (chosenTask !== -1) {
        state.splice(chosenTask, 1);
      }
    },
    updateTask: (state, action) => {
      state.forEach((task) => {
        if (task.id === action.payload.id) {
          task.isDone = !task.isDone;
        }
      });
      state.sort(sortNotDoneToDone);
    },
  },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
