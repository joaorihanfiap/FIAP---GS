import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeStyled.scss"
import { isAuthenticated } from "./authentication";
import img from "../../img/img.png"


export default function Home() {
    const navigate = useNavigate();
    
    if (!isAuthenticated()) {
        navigate("/");
        alert("Faça o login primeiro")
        return null;
      }

    const storedUser = sessionStorage.getItem("user");
    const storedName = storedUser ? JSON.parse(storedUser).nome : "";

    const handleLogout = () => {
      sessionStorage.removeItem("user");
      navigate("/");
    }

    return (
        <>
            <main>
                <h2>Bem-Vindo(a), {storedName}!</h2>

                <button onClick={handleLogout} className="img btn-img" >
                    <img src={img} className="img"/>
                </button>
                <p>Logout</p>
                <section className="grid">

                    <section className="conteudo-imagem">
                        <figure>
                            <img src="./src/img/app-med2.jpg" alt="imagem ilustrativa"/>
                        </figure>
                    </section>
                    <section className="conteudo-principal">
                        <h2>Sistema de Triagem Automatizado</h2>
                        <p>O panorama atual da prestação de cuidados de saúde evidencia desafios significativos no processo de triagem, onde ineficiências e lacunas de informação podem comprometer a qualidade do atendimento. </p>
                    </section>
                    <section className="conteudo-lateral">
                        <div className="solução">
                            <h3>O que é a Solução</h3>
                            <p>Nosso projeto aborda a constante problemática de espera em hospitais públicos e particulares do nosso país, propondo a implementação de um sistema de Triagem Automático, que busca facilitar e agilizar o trabalho dos médicos e enfermeiros responsáveis. Nosso projeto busca utilizar de algoritmos de seleção, possivelmente treinados com inteligências artificiais, para ajudar a manter um ambiente mais ágil em hospitais e clínicas, enquanto ao mesmo tempo, mantendo a sensação de um atendimento humanizado. O sistema utilizaria de algumas perguntas e exames, e adaptaria sua resposta e personalizaria o prontuário de acordo com cada situação apresentada.</p>
                        </div>
                        <div className="sobre">
                            <h3>O que ela fará</h3>
                            <p>O êxito deste projeto se traduzirá em uma mudança paradigmática na prestação de cuidados de saúde, onde o Sistema de Triagem Automática não apenas otimiza processos, mas redefine a experiência do paciente e do profissional de saúde. Antecipamos uma série de resultados tangíveis e intangíveis que solidificarão a posição desse sistema como uma inovação disruptiva na indústria da saúde.</p>
                        </div>
                        <div className="funcionamento">
                            <h3>Como irá funcionar</h3>
                            <p>O Sistema, também, tem capacidade de criar e estruturar dados de utilização, possibilitando ao centro de saúde organizar seus funcionários de forma mais ergonômica, em dias de maior fluxo estatisticamente, ou dispensar alguns outros funcionários em dias menos movimentados. Com estes dados, também é possível que os hospitais disponibilizem suas taxas de lotação em tempo real aos seus clientes, possivelmente proporcionando mais confiança e transparência.</p>
                        </div>
                    </section>
                </section>
                <section className="um">
                    <h3>Vantagens</h3>
                    <section className="vantagens">

                        <div className="vantagem1">
                            <p>Ao automatizar a coleta de informações e a realização de medições físicas, o sistema elimina gargalos no processo de triagem, resultando em uma diminuição considerável nos tempos de espera. Os pacientes experimentarão um fluxo mais ágil desde a chegada até a consulta médica, contribuindo para uma experiência mais eficiente e satisfatória.</p>
                        </div>
                        <div className="vantagem2">
                            <p>A análise de dados avançada proporcionada pela Inteligência Artificial permite uma avaliação mais rápida e precisa das informações coletadas. Os profissionais de saúde terão acesso a um prontuário eletrônico dinâmico, enriquecido por algoritmos que identificam padrões sutis e alertam para possíveis condições de saúde. Isso resultará em diagnósticos mais rápidos e tratamentos mais eficazes</p>
                        </div>
                        <div className="vantagem3">
                            <p>A introdução de feedback interativo durante a entrevista automatizada não apenas incentiva a participação ativa dos pacientes, mas também proporciona uma compreensão mais profunda de suas necessidades e preocupações. Isso cria uma experiência mais centrada no paciente, fortalecendo a comunicação entre o paciente e o profissional de saúde.</p>
                        </div>
                    </section>
                </section>
                
                
            </main>

        </>
    )
  }