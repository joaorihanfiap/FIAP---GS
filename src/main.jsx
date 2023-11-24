// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import "./estiloGlobal.scss"


// BLOCO DE ROTAS
import Home from './routes/Home/Home.jsx';
import Login from './routes/Login/Login.jsx';
import Erro404 from './routes/Error404.jsx';
import Cadastro from './routes/Cadastro/Cadastro.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro404 />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/home', element: <Home /> },
      { path: '/cadastro', element: <Cadastro /> }
    ],
  },
]);

// BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
