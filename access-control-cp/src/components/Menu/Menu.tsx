import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav  >
            <Link to="/" >Home</Link>
            <Link to="/LogUsuario">Login</Link>
            <Link to="/CadUsuario">Cadastro</Link>
        </nav>
    );
}