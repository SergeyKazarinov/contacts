import React from 'react';
import Authorization from '../Authorization/Authorization';
import { AuthorizationType } from '../../types/types';
import app from './app.module.css';

function App() {

  const handleAuthorization = ({username, password}:AuthorizationType): void => {
    
  }
  return (
    <div className={app.page}>
      <Authorization onSubmit={handleAuthorization}/>
    </div>
  );
}

export default App;
