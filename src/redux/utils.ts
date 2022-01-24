import { CombinedState } from "redux";
import { RootState } from "./store";

export const saveState = (state: CombinedState<RootState>): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {}
};

export const loadState = () => {
  try {
    const state = JSON.parse(localStorage.getItem("state") || "");
    return state;
  } catch {}
};
