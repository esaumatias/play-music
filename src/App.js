import React from 'react';
import Routes from './Routes/Routes';
import AppProvider from './Context/AppProvider';


function App() {
  
  return (
    <AppProvider>
     <Routes />
    </AppProvider>
  );
}

export default App;
