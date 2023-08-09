import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState();
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([
    {
      nome: "Grazi",
      email: "grazi@gmail.com",
      senha: "123456",
    },
    {
      nome: "Eduardo",
      email: "eduardo@gmail.com",
      senha: "654321",
    },
    {
      nome : "Marlene",
      email : "marlene@gmail.com",
      senha : "135790"
    }
  ]);

  const login = (response) => {
    setLoggedIn(true);
    setUsuarioLogado(response);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, usuarioLogado, usuariosCadastrados, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};