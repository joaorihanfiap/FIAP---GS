import "./LoginStyled.scss"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ConteudoLogin() {
    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
          setUsuario((prevUsuario) => ({ ...prevUsuario, ...JSON.parse(storedUser) }));
        }
      }, []);

  const [msgstatus, setMsgstatus] = useState("");
  const [classStatus, setClassStatus] = useState("");
  const navigate = useNavigate();


  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user;

    try {
      const response = await fetch("http://localhost:5000/login");
      if (response.ok) {
        const users = await response.json();
        for (let x = 0; x < users.length; x++) {
          const u = users[x];
          if (u.email === usuario.email && u.senha === usuario.senha) {
            user = u;
            break;
          }
        }
        if (user) {

          sessionStorage.setItem("user", JSON.stringify(user));


          setMsgstatus("Login realizado com SUCESSO!!");
          setClassStatus("login-sucesso");
          navigate("/home");
        } else {
          setMsgstatus("Usuário e ou Senha incorretos!");
          setClassStatus("login-erro");
        }
      } else {
        setMsgstatus("Erro ao processar a solicitação");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setMsgstatus("Erro ao processar a solicitação");
    }
  };
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUsuario((prevUsuario) => ({ ...prevUsuario, ...JSON.parse(storedUser) }));
    }
  }, []);
  return (
    <>
      <main className="login-main">
        <h1>Login - Informações do Usuário</h1>

        <h2 className={classStatus}>{msgstatus}</h2>

        <form name="Login" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais</legend>
            
            <label htmlFor="idEmail">Email:</label>
            <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite o seu Email."
                value={usuario.email}
                onChange={handleChange}
            />
            <label htmlFor="idSenha">Senha:</label>
            <input
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite a sua Senha."
              value={usuario.senha}
              onChange={handleChange}
            />
          </fieldset>
          <div className="btn_lc">
            <div className="bt">
              <button>LOGAR</button>
            </div>
            
            
            <div className="bt">
              <p>Ainda não possui uma Conta?</p>
              <button onClick={() => navigate("/cadastro")}>CADASTRE-SE</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
