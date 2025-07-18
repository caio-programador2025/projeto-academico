import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import useUsuario from "../hooks/useUsuario";
import M from 'materialize-css'

const TelaMenu = ()=>{

const {fazerLogout} = useUsuario()

useEffect(
    () =>{
    const itens = document.querySelectorAll(".sidenav")
    M.Sidenav.init(itens)
    },[]
)

return(

<>
<nav className="nav-wrapper blue darken-3" style={{whiteSpace:"nowrap"}}>
<div>
    <a href="/alunos">App-Gestão de Alunos.</a>
    <a href="#" data-target="mobile-    
    
    menu" className="sidenav-trigger">
        <i className="material-icons">menu</i>
            '''''''     </a>
    <ul className="right hide-on-med-and-down">
        
        <li>
            <Link to="/"    >Login</Link>
        </li>
        <li>
            <Link to="/alunos">Alunos</Link>
        </li>
        <li>
            <Link to="#" onClick={fazerLogout}>Sair</Link>
        </li>
    </ul>
</div>

</nav>
<ul id="mobile-menu" className="sidenav">
    <li>

        <a href="#!" className="sidenav-close">
<i className="material-icons" aria-label="fechar menu" translate="no">close</i>
    
        </a>
    </li>
<li>
            <Link to="/">Login</Link>
        </li>
        <li>
            <Link to="/alunos">Alunos</Link>
        </li>
        <li>
            <Link to="#" onClick={fazerLogout}>Sair</Link>
        </li>
</ul>
</>
)
}
export default TelaMenu