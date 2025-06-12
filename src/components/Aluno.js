import React from "react";
import "./Alunos.css"
import {AiOutlinePlus } from"react-icons/ai";
import { CgClose } from"react-icons/cg";
const Aluno = (props) =>{
    const aluno = props.Aluno
    return(
    <>
    <div className="box" /*tabIndex={2}*/>
            <h1>{aluno.titulo}</h1>
        </div>
        <div className="box" /*tabIndex={2}*/>
            <h1>{aluno.email}</h1>
            <div className="grid-botoes">
                <button aria-label="detalhes" className="botao-grid" tabIndex={2} onClick={()=>{props.handle_detales_aluno(props.aluno.id)}}><AiOutlinePlus></AiOutlinePlus></button>
                <button aria-label="excluir" className="botao-grid" tabIndex={2}
                onClick={() => {props.handle_delete_aluno(props.aluno.id)}}><CgClose></CgClose></button>
        </div>
        </div>
        </>
    )
}
export default Aluno