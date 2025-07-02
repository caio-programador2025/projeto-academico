import React, {useState} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import "./Alunos.css"
import useAlunofirebase from "../hooks/useAlunofirebase";

const TelaAlunoDetalhes = () =>{

const location = useLocation()

    const aluno = location.state||{}

    const navigate = useNavigate()

    const handle_button_click_voltar = () =>{
navigate(-1)
    }

    const [input_tituloAluno, setInput_tituloAluno] = useState(aluno.titulo)

const[input_emailAluno, setInput_emailAluno]= useState(aluno.email)

const [radio_concluido, setRadio_concluido] = useState(aluno.concluido)

const {alterar_aluno} = useAlunofirebase()

const handle_button_click_alterar = () =>{
const alunoEditado = {...aluno, titulo: input_tituloAluno, email:input_emailAluno, concluido: radio_concluido}
alterar_aluno(alunoEditado)

navigate("/alunos")    
}

return(
<>
<h1 
style={{textAlign:"center"}}
tabIndex={1}
>    
Tela de Detalhamento - Aluno
</h1>
<div className="box">
<div style={{textAlign:"left", padding:"10px"}}
>
    <strong>
        Nome: 
        </strong>
<input type="text" 
aria-label="título" 
value={input_tituloAluno} 
size={50}
onChange={(campo) =>{
setInput_tituloAluno(campo.target.value)
}}
>
</input>

<strong>
        Email: 
        </strong>
<input type="text" 
aria-label="email" 
value={input_emailAluno} 
size={50}
onChange={(campo) =>{
setInput_emailAluno(campo.target.value)
}}
>
</input>

</div>
<div style={{textAlign:"left", padding:"10px"}}>
<strong>
    concluido:
</strong>
<label>
    <input type="radio"
    name="concluido"
    value={true}
    checked={radio_concluido===true}
    onChange={(campo) =>{
setRadio_concluido(JSON.parse(campo.target.value))
    }}
    aria-label="concluido sim"
    >
    </input>
    <span>sim</span>
</label>
<label>
<input type="radio"
name="concluido"
    value={false}
    checked={radio_concluido===false}
    onChange={(campo) =>{
setRadio_concluido(JSON.parse(campo.target.value))
    }}
    aria-label="concluido não"
    >
    </input>
    <span>não</span>
</label>
</div>
<button 
onClick={() =>{
    handle_button_click_alterar()
}}
>
    Alterar
    </button>
        <button 
        onClick={() =>{
            handle_button_click_voltar()
        }}
        >
            Voltar
            </button>
</div>
</>
)
}
export default TelaAlunoDetalhes;