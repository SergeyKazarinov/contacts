import React from "react";
import style from "./Contact.module.scss";

interface ContactType {
  name: string,
  phone: string
}

const Contact = ({name, phone}: ContactType) => {
  return (
    <div className={style.container}>
      <p className={style.name}>{name}</p>
      <p className={style.phone}>{phone}</p>
      <div className={style.button}>
        <button type="button" className={style.button__edit}>edit</button>
        <button type="button" className={style.button__delete}>delete</button>
      </div>
    </div>
  )
}

export default Contact;