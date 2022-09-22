import React, { useState } from 'react';
import Authorization from '../Authorization/Authorization';
import { AuthorizationType } from '../../types/types';
import app from './app.module.scss';
import { Route, Switch } from 'react-router';
import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAuthorization = ({username, password}:AuthorizationType): void => {
    
  }
  return (
    <div className={app.page}>
      <ProtectedRoute path="/" loggedIn={loggedIn} component={Main} />
      <Switch>
        <Route path="/login">
          <Authorization onSubmit={handleAuthorization} loggedIn={loggedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
