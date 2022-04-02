/**
 * This context provider is responsible
 * for validating access token to certain views.
 */

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: null,
  isLoading: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    //TODO: Create function or import for check access token.

    setUser({
      user: true,
      isLoading: false,
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
