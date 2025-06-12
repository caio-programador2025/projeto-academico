import React, { useState } from "react";

const FormCadAluno= ({adicionar_aluno}) =>{
    const [input_tituloAluno, setInput_tituloAluno] = useState("")
    const handle_input_tituloAluno = (campo) =>{
setInput_tituloAluno(campo.target.value)
    }
 const handle_buttonClick_add_aluno = () =>{
        adicionar_aluno(input_tituloAluno)
        setInput_tituloAluno("")
    }
    return(
<div style={{display:"flex"}}>
<input type="text" 
aria-label="aluno" 
tabIndex={1}
style={{width:"80%"}} 
value={input_tituloAluno} 
onChange={handle_input_tituloAluno}
>
</input>

    <button 
onClick={handle_buttonClick_add_aluno}
tabIndex={1}
>
    Adicionar Aluno
       </button>
</div>    
    )
}
export default FormCadAluno;