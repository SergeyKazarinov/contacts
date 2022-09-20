import React from 'react';
import Authorization from '../Authorization/Authorization';
import { AuthorizationType } from '../../types/types';

function App() {

  const handleAuthorization = ({username, password}:AuthorizationType): void => {
    
  }
  return (
    <div>
      <Authorization onSubmit={handleAuthorization}/>
    </div>
  );
}

export default App;
