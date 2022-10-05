import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, Contacts, Er } from "../../types/types";
import { initialState } from "../store";

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetchingSuccess(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload;
    },
    userFetchingError(state, action: PayloadAction<any>) {
      state.error = action.payload
    }
  }
})

export default userSlice.reducer