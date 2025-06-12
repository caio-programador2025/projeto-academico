import { getAuth } from "firebase/auth";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore/lite";


const useAlunofirebase = () => {
    const [id , setId] = useState(null)
    const [titulo, settitulo] = useState("")
    const [concluido, setconcluido] = useState(false)
    const [listaAlunos, setListaAluno] = useState([])



const auth = getAuth()
const usuario = auth.currentUser

const navigate = useNavigate()


const buscaAlunos = async() => {
const colecao_Alunos = collection(db, "alunos")
 
 const docs_Alunos = await getDocs( colecao_Alunos)

 const listaAlunoUsuario = docs_Alunos.docs.map(
    doc => ({id: doc.id, 
        ... doc.data()
    }))
    .filter(aluno => aluno.uid === usuario.uid)
    setListaAluno(listaAlunoUsuario)
 


}

    useEffect( () => {
        buscaAlunos() 
    },[usuario ])


    const adicionar_aluno = async(titulo) => {
const novoAluno = {

    titulo: titulo,
concluido: false, 
uid: usuario.uid
}
try {
    const novoRegistro = await addDoc(collection(db, "alunos"), novoAluno)
     alert ("Aluno Adicionado com sucesso")

} catch (error) {
    alert ("Erro ao adicionar a aluno" + error)
}
    }


    const exibir_detalhe_aluno = (id) => {
        const aluno = listaAlunos.find(aluno => aluno.id = id)
        navigate("/alunoDetalhes", {state: aluno})
    }
    const excluir_aluno = async(id) => {
try {
    await deleteDoc(doc(db, "alunos" , id))

    buscaAlunos()

    alert ("Aluno excluido com sucesso")  
} catch (error) {
    alert("Aluno não encontrado." + error)
}
    }
    
    
    const alterar_aluno = async(aluno_editado) =>{
try {
    const registro_aluno = doc(db,"aluno", aluno_editado.id)
    await updateDoc(registro_aluno,{
        titulo: aluno_editado.titulo,
        concluido: aluno_editado.concluido
    }
    )
    buscaAlunos()
    alert(" Aluno alterado com sucesso:")
} catch (error) {
    alert("Erro ao alterar aluno:")
    
}
    }
    return {
        id, setId,
        titulo, settitulo,
        concluido, setconcluido,
        listaAlunos,setListaAluno,
        exibir_detalhe_aluno,
        excluir_aluno,
        usuario,
        adicionar_aluno,
        alterar_aluno 
}
}
export default useAlunofirebase