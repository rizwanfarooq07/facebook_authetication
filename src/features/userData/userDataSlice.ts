import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserDataInterface } from "../../../typings";

export interface UserDataState {
  userData: {} | UserDataInterface;
}

const initialState: UserDataState = {
  userData: {},
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    clearData: (state) => {
      state.userData = {};
    },
    getData: (state, action: PayloadAction<number>) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearData, getData } = userDataSlice.actions;
export const getUserData = (state: any) => state.userData.userData;
export default userDataSlice.reducer;
