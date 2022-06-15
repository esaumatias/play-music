import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [albuns , setAlbuns] = useState({});

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        albuns,
        setAlbuns,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;