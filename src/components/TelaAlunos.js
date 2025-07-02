import React from "react";
import "./Alunos.css";
import FormCadAluno from "./FormCadAluno";
import { AiOutlinePlus } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import useAlunos from "../hooks/useAlunos";
import useAlunofirebase from "../hooks/useAlunofirebase";

const TelaAlunos = () =>{

const {
    adicionar_aluno, usuario, listaAlunos, exibir_detalhe_aluno,excluir_aluno, alterar_aluno
} = useAlunofirebase()

return(
    <>
    <h4
    style={{textAlign:"center"}}
    tabIndex={1}
    >
        Meus Alunos  -  {usuario.email}
        </h4>
    <div className="box">
        <FormCadAluno 
        adicionar_aluno={adicionar_aluno} />
        {
            listaAlunos.length==0?(<p>Nenhum aluno cadastrado.</p>):
        listaAlunos.map(aluno => 
            
        <div className="aluno-box"
        key={aluno.id}
        tabIndex={1}
        style={aluno.concluido?{borderLeft:"6px solid green"}:{borderLeft: "6px solid red"}}
        aria-label={aluno.concluido?"Aluno concluído. ":"Aluno não concluído."}
        >
            <p>
                {aluno.titulo}-{aluno.email}
            </p>
            <div className="grid-botoes">
                <button
                aria-label="detalhes" 
                className="botao-grid" 
                tabIndex={2} 
                onClick={() => 
                    {exibir_detalhe_aluno(aluno.id)}
                }>
                    <AiOutlinePlus />
                </button>

<button 
aria-label="excluir" 
className="botao-grid" 
tabIndex={2} 
onClick={() =>
{excluir_aluno(aluno.id)}
}>
    <CgClose />
    </button>
            </div>
        </div>
        )}
    </div>
    </>
)
}
export default TelaAlunos;