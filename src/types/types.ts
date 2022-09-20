import { RefObject } from "react";

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