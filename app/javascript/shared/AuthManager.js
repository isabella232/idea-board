import React, { useContext, useState, useCallback } from "react";

export const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

const AuthManager = props => {
  const [user, setUser] = useState(null);
  const logout = useCallback(() => setUser(null), []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login: setUser, logout }}
      {...props}
    />
  );
};

export default AuthManager;
