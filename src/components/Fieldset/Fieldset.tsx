import React, { memo, useCallback, useState } from "react";
import style from "./Fieldset.module.css";
import {Fieldset} from "../../types/types";

const FieldSet = ({inputType, placeholder, id, minLength, maxLength, onChange, inputRef}:Fieldset) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleErrorMessage = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) {
      setIsValid(false);
      setErrorMessage(e.target.validationMessage);
    }
    else
    {
      setIsValid(true);
      setErrorMessage('');
    }

    onChange(e);
  }, [])

  return(
    <fieldset className={style.form__set}>
      <input 
        type={inputType}
        className={`${style.form__input_type_registration} ${style.form__input}  ${!isValid && style.form__input_type_error}`}
        placeholder={placeholder}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleErrorMessage}
        required
        ref={inputRef}
        />
      <span className={`${style.form__inputError} ${id}-error ${!isValid && style.form__inputError_active}`}>{errorMessage}</span>
    </fieldset>
  )
}

export default memo(FieldSet);