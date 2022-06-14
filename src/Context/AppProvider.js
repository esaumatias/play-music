import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [allNotes, setAllNotes] = useState({});

  return (
    <AppContext.Provider
      value={{
        allNotes,
        setAllNotes,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;