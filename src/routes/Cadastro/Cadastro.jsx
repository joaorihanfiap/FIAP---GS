import "./CadastroStyled.scss"
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 


export default function AdicionarUsuario() {
  document.title = "ADICIONAR Usuario";
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.nome === '' || usuario.email === '' || usuario.senha === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Usuario cadastrado.');
          navigate('/');
        } else {
          console.log('Usuario não Cadastrado. Status da resposta: ' + response.status);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <main className="cadastro-main">
        <h1>Formulário de cadastro</h1>

        <form name="Cadastro" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <label htmlFor="c-nome" id="l-nome">Nome</label>
            <input type="text" name="nome" id="c-nome" onChange={handleChange} value={usuario.nome} />
            <label htmlFor="c-email" id="l-email">Email</label>
            <input type="email" name="email" id="c-email" onChange={handleChange} value={usuario.email} />
            <label htmlFor="c-senha" id="l-senha">Senha</label>
            <input type="password" name="senha" id="c-senha" onChange={handleChange} value={usuario.senha} />
          </fieldset>
          <button type="submit">CADASTRAR</button>
        </form>
      </main>
    </>
  );
}
