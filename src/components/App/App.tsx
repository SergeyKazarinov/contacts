import React, { useState } from 'react';
import Authorization from '../Authorization/Authorization';
import { AuthorizationType, Users } from '../../types/types';
import app from './app.module.scss';
import { Route, Switch } from 'react-router';
import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';
import { signIn } from '../../util/Autho';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleAuthorization = async ({username, password}:AuthorizationType) => {
    try {
      const data = await signIn();
      const isLogin = data.some((element:Users) => {
        return (element.name === username && element.password === password)
      });
  
      if (isLogin) {
        alert('Вы вошли')
        setLoggedIn(true);
      } else {
        alert('Пользователь не найден')
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  return (
    <div className={app.page}>
      <Switch>
        <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} />
        <Route path="/login">
          <Authorization onSubmit={handleAuthorization} loggedIn={loggedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
