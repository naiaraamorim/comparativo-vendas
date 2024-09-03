import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../assets/icones/index";
import ListaMenu from "./listaMenu/ListaMenu";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string | null>("Página Inicial");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState<string | null>(null);

  const handleMenuItemClick = (item: string, label: string, route?: string) => {
    if (selectedItem !== item) {
      setSelectedItem(item);
      if (item === "Cadastros") {
        setSelectedSubMenuItem("usuarios");
        navigate("/cadastros/usuarios");
      } else {
        setSelectedSubMenuItem(null);
        if (route) {
          navigate(route);
        }
      }
    }
  };

  const handleSubMenuItemClick = (item: string, label: string, route: string) => {
    setSelectedSubMenuItem(item);
    navigate(route);
  };

  const alternaMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu ${isMenuOpen ? "aberto" : "fechado"}`}>
      <div className="menu-top">
        <div className="menu-logo">
          REVE<span>COM</span>
        </div>
        <div className="menu-botao">
          <label className="buttons__burger" htmlFor="burger">
            <input type="checkbox" id="burger" onClick={alternaMenu} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <div className="menu-lista">
        <Link to="/" onClick={() => handleMenuItemClick("Página Inicial", "Página Inicial", "/")}>
          <ListaMenu
            icone={icons.iconePG}
            selectedIcon={icons.iconePGSelected}
            alt="Icone de Pagina Inicial"
            label="Página Inicial"
            isSelected={selectedItem === "Página Inicial"}
          />
        </Link>
        <Link to="/empresas" onClick={() => handleMenuItemClick("Empresas", "Empresas", "/empresas")}>
          <ListaMenu
            icone={icons.iconeEmpresas}
            selectedIcon={icons.iconeEmpresasSelected}
            alt="Icone Empresas"
            label="Empresas"
            isSelected={selectedItem === "Empresas"}
          />
        </Link>
        <div onClick={() => handleMenuItemClick("Cadastros", "Usuários")}>
          <ListaMenu
            icone={icons.iconeCadastro}
            selectedIcon={icons.iconeCadastroSelected}
            alt="Icone de Cadastro"
            label="Cadastros"
            isSelected={selectedItem === "Cadastros"}
            setas={icons.iconeSeta}
            selectedSetas={icons.iconeSetasSelected}
          />
        </div>
        {selectedItem === "Cadastros" && (
          <div className={`submenu ${selectedItem === "Cadastros" ? "aberto" : ""}`}>
            <Link
              to="/cadastros/usuarios"
              onClick={() => handleSubMenuItemClick("usuarios", "Usuários", "/cadastros/usuarios")}
            >
              <div
                className={`submenu-item ${selectedSubMenuItem === "usuarios" ? "selected" : ""}`}
              >
                <img
                  src={selectedSubMenuItem === "usuarios" ? icons.iconeUsuariosPreto : icons.iconeUsuarios}
                  alt="usuário"
                  className="submenu-icon"
                />
                <span className="submenu-text">Usuários</span>
              </div>
            </Link>
            <Link
              to="/cadastros/grupos"
              onClick={() => handleSubMenuItemClick("grupos", "Grupos", "/cadastros/grupos")}
            >
              <div className={`submenu-item ${selectedSubMenuItem === "grupos" ? "selected" : ""}`}>
                <img
                  src={selectedSubMenuItem === "grupos" ? icons.iconeGruposPreto : icons.iconeGrupos}
                  alt="usuário"
                  className="submenu-icon"
                />
                <span className="submenu-text">Grupos</span>
              </div>
            </Link>
            <Link
              to="/cadastros/centro-custos"
              onClick={() => handleSubMenuItemClick("centro-custos", "Centro de Custos", "/cadastros/centro-custos")}
            >
              <div
                className={`submenu-item ${selectedSubMenuItem === "centro-custos" ? "selected" : ""}`}
              >
                <img
                  src={selectedSubMenuItem === "centro-custos" ? icons.iconeCentroCustoPreto : icons.iconeCentroCusto}
                  alt="usuário"
                  className="submenu-icon"
                />
                <span className="submenu-text">Centro de Custos</span>
              </div>
            </Link>
            <Link
              to="/cadastros/faturamento-geral"
              onClick={() => handleSubMenuItemClick("faturamento", "FaturamentoGeral", "/cadastros/faturamento-geral")}
            >
              <div className={`submenu-item ${selectedSubMenuItem === "faturamento" ? "selected" : ""}`}>
                <img
                  src={selectedSubMenuItem === "faturamento" ? icons.iconeFaturamentoGeralPreto : icons.iconeFaturamentoGeral}
                  alt="usuário"
                  className="submenu-icon"
                />
                <span className="submenu-text">Faturamento Geral</span>
              </div>
            </Link>
            <Link
              to="/cadastros/equipe"
              onClick={() => handleSubMenuItemClick("equipe", "Equipe", "/cadastros/equipe")}
            >
              <div className={`submenu-item ${selectedSubMenuItem === "equipe" ? "selected" : ""}`}>
                <img
                  src={selectedSubMenuItem === "equipe" ? icons.equipePreto : icons.equipe}
                  alt="usuário"
                  className="submenu-icon"
                />
                <span className="submenu-text">Equipe</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
