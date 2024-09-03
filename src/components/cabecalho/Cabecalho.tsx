import React, { useState, useEffect, useRef } from "react";
// import { usePageTitle } from "../../controles/PageTitleConext";
// import { useAuth } from "../../controles/autenticacaoCotenxto";
import { useNavigate } from 'react-router-dom';
import { icons } from "../../assets/icones/index";
import "./Cabecalho.css";

const Cabecalho: React.FC = () => {
  // const { pageTitle } = usePageTitle();
//   const { resetPageTitle } = usePageTitle();
  const [isUsuarioAberto, setIsUsuarioAberto] = useState(false);
//   const { logout } = useAuth();
  const [notificacoes] = useState<string[]>(["Meta da equipe X não cadastrada, no sistema do centro de custo M", "Erro ao calcular o valor da equipe Y", "Notificação 3", "Notificação 4"]);
  const username = localStorage.getItem("username");
  const [isNotificacaoAberto, setIsNotificacaoAberto] = useState(false);
  const notificacaoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNotificacaoClick = () => {
    setIsNotificacaoAberto(!isNotificacaoAberto);
  };

  const MouseEntrar = () => {
    setIsUsuarioAberto(true);
  };

  const MouseSair = () => {
    setIsUsuarioAberto(false);
  };

  const handleLogout = () => {
    // logout();
    // resetPageTitle();
    navigate("/login");
  };

  useEffect(() => {
    const MouseClicarFora = (event: MouseEvent) => {
      if (notificacaoRef.current && !notificacaoRef.current.contains(event.target as Node)) {
        setIsNotificacaoAberto(false);
      }
    };

    document.addEventListener("mousedown", MouseClicarFora);
    return () => {
      document.removeEventListener("mousedown", MouseClicarFora);
    };
  }, []);

  return (
    <header className="cabecalho">
      {/* <h1>{pageTitle}</h1> */}
      <div className="user-info">
        <div className="cabecalho-notificacao" ref={notificacaoRef}>
          <button className="cabecalho-notificacao-botao" onClick={handleNotificacaoClick}>
            <img src={icons.iconeNotificacao} alt="Icone de Notificacao" className="cabecalho-iconeNotificacao" />
            {notificacoes.length > 0 && <span className="notificacao-badge"></span>}
          </button>
          <img src={icons.iconeDivisor} alt="Icone de divisão" />
          {isNotificacaoAberto && notificacoes.length > 0 && (
            <div className="lista-notificacoes">
              <h3>Notificações</h3>
              {notificacoes.map((notificacao, index) => (
                <div key={index} className="notificacao-item">
                  <img src={icons.iconeNotificacao} alt="Notificação" className="notificacao-icon" />
                  <span>{notificacao}</span>
                </div>
              ))}
              <div className="notificacao-footer">
                <button onClick={() => alert("Ver todas as notificações")}>VER TUDO</button>
              </div>
            </div>
          )}
        </div>
        <span>{username}</span>
        <div className="cabecalho-icone" onMouseEnter={MouseEntrar} onMouseLeave={MouseSair}>
          <img src={icons.iconeLogin} alt="User Icon" />
          {isUsuarioAberto && (
            <div className="menu-suspenso">
              <button onClick={() => alert("Perfil Clicado")}>Ver Perfil</button>
              <button onClick={handleLogout}>Sair</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
