import React, { createContext, useState, useCallback } from "react";
import { fetchWithoutToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchWithoutToken("login", { email, password }, "POST");

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { userDB } = resp;

      setAuth({
        uid: userDB.uid,
        checking: false,
        logged: true,
        name: userDB.name,
        email: userDB.email,
      });

      console.log("Authenicated!");
    }

    return resp.ok;
  };

  const register = (name, email, password) => {};
  const logout = () => {};

  const validateToken = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{ login, register, logout, validateToken, auth }}
    >
      {children}
    </AuthContext.Provider>
  );
};