import { configureStore } from "@reduxjs/toolkit";
import {contactDataReducer} from "./reducers/contactDataReducer";

export const store = configureStore({
  reducer: contactDataReducer,
})

export type RootState = ReturnType<typeof store.getState>