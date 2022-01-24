import { RootState } from "../root";

export const selectUser = (state: RootState) => state.user.user;
