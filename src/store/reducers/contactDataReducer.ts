import {createReducer, createAction} from "@reduxjs/toolkit";

interface Contact {
  name: string,
  phone: string
}

interface Contacts {
  contacts: Array<Contact>
}

const initialState: Contacts = {
  contacts: [
    {
      name: 'Казаринов Сергей Сергеевич',
      phone: '89068625530',
    },
    {
      name: 'Казаринов Антон Сергеевич',
      phone: '89223666001'
    }
  ]
}

const ADD_PROFILE = createAction('ADD_PROFILE')

export const contactDataReducer = (state = initialState, action:any): Contacts => {
  switch(action.type) {
    case ADD_PROFILE:
      return {...state, contacts: [...state.contacts, action.payload]}

    default:
      return state
  }
}