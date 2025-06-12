import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TelaAlunos from './components/TelaAlunos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TelaAlunoDetalhes from './components/TelaAlunoDetalhes';
import TelaLogin from './components/TelaLogin';
import RotaPrivada from './rotas/RotaPrivada';
import TelaCadUsuario from './components/TelaCadUsuario';
import AppLayout from './components/AppLayout';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <AppLayout></AppLayout>,
      children:[
    {
     index:true, 
      element: <TelaLogin/>
    },
    {
path:"/cadUsuario",
element:<TelaCadUsuario></TelaCadUsuario>
    },
    {
      path: "/alunoDetalhes",
      element: <TelaAlunoDetalhes/>
    },
    {
      path: "/alunos",
      element: (
        <RotaPrivada>
      <TelaAlunos/>
        </RotaPrivada>
        )
    }
  ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
