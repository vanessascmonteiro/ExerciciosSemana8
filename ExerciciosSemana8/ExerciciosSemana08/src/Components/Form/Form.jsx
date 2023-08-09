import { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext"; 
import "./styles.css";

export default function Formulario() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(false);
  const { usuariosCadastrados } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = usuariosCadastrados.find(
      item => item.email == email && item.senha == senha
    );
    if (response) {
      login(response);
      navigate("/");
    }else{
      setError(true);
      senhaRef.current.style.borderColor = "red";
      emailRef.current.style.borderColor = "red";
      return;
      }
  };

  useEffect(() => {
    setError(false);
    senhaRef.current.style.borderColor = "blue";
    emailRef.current.style.borderColor = "blue";
  }, [senha, email]);

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={email}
          ref={emailRef}
          onChange={handleemailChange}
          placeholder="Digite seu email"
        />
        
        <input
          required
          type="password"
          value={senha}
          ref={senhaRef}
          onChange={handleSenhaChange}
          placeholder="Digite sua senha"
        />
        {error && <span>Usuário ou senha inválidos.</span>}
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}