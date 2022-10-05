import React, { useEffect } from 'react';
import style from './Main.module.scss';
import Contact from '../Contact/Contact';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUser } from '../../store/reducers/ActionCreator';

const Main = () => {
  const store = useAppSelector(state => state.userReducer.contacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  const contatcs = store.map((item, index) => <Contact key={index} name={item.name} phone={item.phone} />)

  return(
    <>
    <h2 className={style.title}>Контакты</h2>
    {contatcs}
    </>
  )
}

export default Main;