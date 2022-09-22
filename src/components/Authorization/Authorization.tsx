import React, { useRef, memo, useCallback } from "react";
import style from "./Authorization.module.scss";
import useFormValidation from "../../hooks/useFormValidation";
import FieldSet from "../Fieldset/Fieldset";


const Authorization:React.FC<{onSubmit: any, loggedIn: boolean}> = ({ onSubmit, loggedIn }) => {
  const userName = useRef<HTMLInputElement>();
  const userPassword = useRef<HTMLInputElement>();
  const {isButtonValid, handleTheFirstInputChange, handleTheSecondInputChange} = useFormValidation(userName, userPassword);

  const handleSubmit = useCallback((e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    onSubmit({
      username: userName.current!.value,
      password: userPassword.current!.value
    })
  }, [])

  return (
    <div className={style.container}>
      <h2 className={style.form__title}>Войти</h2>
      <form className={`${style.form} ${style.form_type_page}`} name="sing-in" onSubmit={handleSubmit}>
        <FieldSet 
          inputType="text"
          placeholder="Имя"
          id="input-name"
          minLength={2}
          maxLength={40}
          inputRef={userName}
          onChange={handleTheFirstInputChange}
        />

        <FieldSet 
          inputType="password"
          placeholder="Пароль"
          id="input-password"
          minLength={6}
          maxLength={50}
          inputRef={userPassword}
          onChange={handleTheSecondInputChange}
        />
        <button
          className={`${style.button} ${style.button_type_authorization} ${!isButtonValid && style.button_inactive}`}
          value="Войти"
          id="button-save"
          disabled={!isButtonValid}
        >
          Войти
        </button>
      </form>
    </div>
  )
}

export default Authorization;