import React, { useState } from "react";
import"./app.css"
const App=()=>{
  const [msg, setMsg] = useState("app do caio.")
  const [cont, setCont] = useState(0)
  

  return(
<>
    <h1   className="box">{msg} Tela de cadastro de alunos</h1>
 <div style={{textAlign:"center"}}>
       <button onClick={() => {
          setMsg("Hello React!!")
          setCont(cont + 1)
          }}>Nova Mensagem</button>
      </div>
      <h2 className="box" role="">Qtde de clicks: {cont}.</h2>
     

</>     

  )
}
export default App