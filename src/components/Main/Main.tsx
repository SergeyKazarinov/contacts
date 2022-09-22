import React from 'react';
import style from './Main.module.scss';
import Contact from '../Contact/Contact';
import {RootState} from '../../store/index'
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const store = useSelector((State: RootState) => State.contacts)

  const contatcs = store.map((item, index) => <Contact key={index} name={item.name} phone={item.phone} />)

  return(
    <>
    <h2 className={style.title}>Контакты</h2>
    {contatcs}
    </>
  )
}

export default Main;