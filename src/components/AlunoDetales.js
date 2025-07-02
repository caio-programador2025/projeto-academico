import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handle_edite_aluno } from "./TelaAlunos";

const alunoDetalhes = () =>{
  

const location = useLocation()
const Aluno = location.state || {}

    const Navigate = useNavigate()
    const handle_aluno_buttomclick_voltar = () =>{
        Navigate("/")
    }
    const[input_tituloAluno, setinput_tituloAluno] = useState(aluno.titulo)
    const handle_input_tituloAluno = (campo) =>{
setinput_tituloAluno(campo.target.value)
    }
    const [radio_concluido, setradio_concluido]= useState(aluno.concluido)
    const hadle_radioconcluido = (campo)=>{
setradio_concluido(JSON.parse(campo.target.value))
    }

    const handle_buttonclick_salvar =() => {
        alert("Aluno alterado com sucesso:")
    const Alunoeditada = {...aluno, titulo:input_tituloAluno, concluido: radio_concluido}
    handle_edite_aluno(Alunoeditada)
    navigate("/")
    }
return(
<>
<div className="box">
   {/* <h1 style={{backgroundcolor:"aqua"}}>
        Aluno
        : {aluno.titulo}
    </h1>

    <h2>
Concluido: {aluno.concluido== true?"sim" : "não"}
</h2>*/}

    <div style={{textAlign:"left"}}>
<strong>aluno:
</strong>
<input type="text" aria-label="titulo" value={input_tituloAluno} 
onChange={handle_input_tituloAluno}></input>
</div>
<br></br>
<div style={{textAlign:"left"}}>
<strong>concluido:<label>
    <input type="radio" value={true} checked={radio_concluido=== true} onChange={hadle_radioconcluido}>
    </input>

    <span>sim</span>
    </label></strong>
    <label>
        <input type="radio" value={false}
        checked={radio_concluido==false} 
        onChange={hadle_radioconcluido}></input>
    </label>
    <span>não</span>
</div>
<br></br><br></br>
<button onClick={handle_buttonclick_salvar}>Editar</button>
<button onClick={handle_aluno_buttomclick_voltar}>Voltar</button>

   </div>



</>

)
}
export default alunoDetalhes