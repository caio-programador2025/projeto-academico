import React, { useState } from "react";

const FormCadAluno= ({adicionar_aluno}) =>{
    
    const [input_emailAluno, setInput_emailAluno] = useState("")
    
    const [input_tituloAluno, setInput_tituloAluno] = useState("")

    const handle_input_tituloAluno = (campo) =>{
setInput_tituloAluno(campo.target.value)
    }

    const handle_input_emailAluno = (campo)=>{
setInput_emailAluno(campo.target.value)
    }
 const handle_buttonClick_add_aluno = () =>{
        adicionar_aluno(input_tituloAluno,input_emailAluno)
        setInput_tituloAluno("")
        setInput_emailAluno("")
    }
    return(
<div style={{display:"flex"}}>nome: 
<input type="text" 
aria-label="nome" 
tabIndex={1}
style={{width:"80%"}} 
value={input_tituloAluno} 
onChange={handle_input_tituloAluno}
>
</input>

email:
<input type="text" 
aria-label="email" 
tabIndex={1}
style={{width:"80%"}} 
value={input_emailAluno} 
onChange={handle_input_emailAluno}
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