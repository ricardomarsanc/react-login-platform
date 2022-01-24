import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root";
import { loadState, saveState } from "./utils";

const persistedState = loadState();

export const store = configureStore({
  preloadedState: persistedState,
  reducer: rootReducer(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState(store.getState());
});
