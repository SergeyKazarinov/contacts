import {createReducer, createAction} from "@reduxjs/toolkit";
import { Contacts } from "../../types/types";
import { initialState } from "../store";

const ADD_PROFILE = createAction('ADD_PROFILE')

export const contactDataReducer = (state = initialState, action:any): Contacts => {
  switch(action.type) {
    case ADD_PROFILE:
      return {...state, contacts: [...state.contacts, action.payload]}

    default:
      return state
  }
}