import React from "react";
import style from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={style.container}>
      <p className={style.name}>Казаринов Сергей Сергеевич</p>
      <p className={style.phone}>89058625530</p>
      <div className={style.button}>
        <button type="button" className={style.button__edit}>edit</button>
        <button type="button" className={style.button__delete}>delete</button>
      </div>
    </div>
  )
}

export default Contact;