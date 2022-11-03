import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
  const [authData, setAuthData] = useState(false);

  return (
    <AuthContext.Provider value={[authData, setAuthData]}>
      {children}
    </AuthContext.Provider>
  );
};
