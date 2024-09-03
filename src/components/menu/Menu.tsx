import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../assets/icones/index";
import ListaMenu from "./listaMenu/ListaMenu";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string | null>(
    "Página Inicial"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [, setSelectedSubMenuItem] = useState<string | null>(
    null
  );

  const handleMenuItemClick = (item: string, route?: string) => {
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

//   const handleSubMenuItemClick = (
//     item: string,
//     label: string,
//     route: string
//   ) => {
//     setSelectedSubMenuItem(item);
//     navigate(route);
//   };

  const alternaMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu ${isMenuOpen ? "aberto" : "fechado"}`}>
      <div className="menu-top">
        <div className="menu-logoBotao">
          <div className="menu-logo">
            <img src={icons.logoSistema} alt="logo crm-2w" />
          </div>
          <span className="menu-titulo">Vendedor de Alta Performarce 2W</span>
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
        <Link
          to="/"
          onClick={() =>
            handleMenuItemClick("Página Inicial",  "/")
          }
        >
          <ListaMenu
            icone={icons.iconePGSelected}
            selectedIcon={icons.iconePG}
            alt="Icone de Pagina Inicial"
            label="Página Inicial"
            isSelected={selectedItem === "Página Inicial"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
