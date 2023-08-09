import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import './styles.css'

function Home () {
    const { usuarioLogado } = useContext(AuthContext);
    const prefixo = usuarioLogado.email.split("@").shift();

    return (
        <>
        <h1>Home</h1>
        <h2>Bem vindo {prefixo}</h2>
        </>
    )
}

export default Home