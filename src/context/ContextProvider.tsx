import { createContext, SetStateAction, useEffect, useState } from "react";
import { getUserProfile } from "@services/User";
import { getAccessToken } from "@helpers/auth";
import { User } from "../models/User";
import { Dispatch } from "react";

interface IAuthContext {
  user: User | null;
  loading: boolean;
  error: string | null;
  setUser: Dispatch<SetStateAction<User>>;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: false,
  error: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string>();

  const accessToken = getAccessToken();

  useEffect(() => {
    accessToken &&
      getUserProfile().then(({ data, error }) => {
        if (error) {
          setError(error.message);
          setUser(null);
        } else {
          setUser(data);
        }
      });
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
