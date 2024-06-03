import React, { createContext, useState } from 'react';

// Cria o contexto
export const PathNameContext = createContext();

// Cria o provider
export const PathNameProvider = ({ children }) => {
  const [pageNames, setPageNames] = useState([]);

  const addPathName = (name) => {
    setPageNames((prevNames) => [...prevNames, name]);
  };

  return (
    <PathNameContext.Provider value={{ pageNames, addPathName }}>
      {children}
    </PathNameContext.Provider>
  );
};
