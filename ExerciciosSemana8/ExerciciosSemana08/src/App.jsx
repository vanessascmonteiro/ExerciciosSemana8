import { useContext } from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Contato from "./Pages/Contato/Contato.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Perfil from "./Pages/Perfil/Perfil.jsx";
import { AuthContext } from "./Context/AuthContext/AuthContext.jsx";
import "./App.css";

function App() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={isLoggedIn ? <Home/> : <Navigate to = "/login"/>} />
          <Route path="login" element={!isLoggedIn ? <Login/> : <Navigate to= "/"/>} />
          <Route path="contato" element={isLoggedIn ? <Contato/> : <Navigate to = "/login"/>} />
          <Route path="perfil" element={isLoggedIn ? <Perfil/> : <Navigate to= "/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
