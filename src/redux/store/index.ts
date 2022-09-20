import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../slices/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// tipos para o RootState, o state geral da aplicação
export type RootState = ReturnType<typeof store.getState>;
