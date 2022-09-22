import React from 'react';
import style from './Main.module.scss';
import Contact from '../Contact/Contact';

const Main = () => {
  return(
    <>
    <h2 className={style.title}>Контакты</h2>
    <Contact />
    </>
  )
}

export default Main;