import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext"; 
import { UserContext } from "../../Context/UserContext/UserContext"; 

export default function FormEdicao() {
  const { usuarioLogado } = useContext(AuthContext);
  const {editarUsuario} = useContext (UserContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const Enviar = (event) => {
    event.preventDefault();
    editarUsuario(nome, email, senha);
  };

  const handleNomeChange = (e) => setNome(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  return (
    <>
      <form onSubmit={Enviar}>
        <label>Nome:</label>
        <input
          required
          type="text"
          value={nome}
          onChange={handleNomeChange}
          placeholder={usuarioLogado.nome}
        />


        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={usuarioLogado.email}
        />


        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={handleSenhaChange}
        />


        <button type="submit">Salvar</button>
      </form>
    </>
  );
}