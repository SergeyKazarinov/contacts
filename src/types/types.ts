import { RefObject } from "react";

export interface Contact {
  name: string,
  phone: string,
}

export interface Contacts {
  contacts: Contact[],
  error: string,
}

export interface Er {
  error: string
}

export interface Users {
  name: string,
  password: string,
  id: number
}

export interface AuthorizationType {
  username: string,
  password: string
}

export interface Fieldset {
  inputType: string,
  placeholder: string,
  id: string,
  minLength: number,
  maxLength: number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputRef: any
}

export type Ref = RefObject<HTMLInputElement>