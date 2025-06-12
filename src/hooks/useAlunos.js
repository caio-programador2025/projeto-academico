import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useAluno = () =>{
    const [aluno, setAluno] = useState({
        id:null,
        titulo:"",
        concluido: false

    })
const [listaAluno, setlistaAluno] = useState (
    () =>{
        const listaAluno_storage = localStorage.getItem("listaAluno") 
        return listaAluno_storage?JSON.parse(listaAluno_storage):[]
    }
)
useEffect(
    () =>{
localStorage.setItem("listaAluno", JSON.stringify(listaAluno))

    },[listaAluno]
)

const adicionar_aluno = (titulo) =>{
setAluno({
    id: Math.random(),
    titulo: titulo,
    concluido: false
}
)
const novaListaaluno = [...listaAluno, aluno]
setlistaAluno(novaListaaluno)
alert("Aluno adicionado com sucesso:")
}

const excluir_aluno = (id) =>{
const novaListaaluno = listaAluno.filter(aluno=> aluno.id !== id)
setlistaAluno(novaListaaluno)
alert("aluno excluido com sucesso:")
}

const navigate = useNavigate()
const exibir_detalhes_aluno = (id) =>{
const aluno =listaAluno.find(aluno => aluno.id == id) 
navigate("/alunoDetalhes", {state:aluno})
}

const alterar_aluno = (aluno_editado) =>{
const novaListaaluno = listaAluno.map(aluno =>{
    if(aluno.id == aluno_editado){
return aluno_editado
    }else{
        return aluno
}
})
setlistaAluno(novaListaaluno)
alert("aluno editado com sucesso:")
}

return({

    listaAluno, 
    adicionar_aluno,
    excluir_aluno,
    exibir_detalhes_aluno,
alterar_aluno
})
}
export default useAluno