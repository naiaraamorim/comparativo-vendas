import React from "react";
import "./ListaMenu.css";

interface ListaMenuProps {
  isSelected: boolean;
  selectedSetas?: string;
  setas?: string;
  selectedIcon?: string;
  icone: string;
  alt: string;
  label: string;
  onClick?: () => void;
}

const ListaMenu: React.FC<ListaMenuProps> = (props) => {
  const comSeta = props.isSelected ? props.selectedSetas : props.setas;
  const icone = props.isSelected ? props.selectedIcon : props.icone;

  return (
    <div
      className={`listaMenu-botao ${comSeta ? "com-seta" : "sem-seta"} ${
        props.isSelected ? "selected" : ""
      }`}
      onClick={props.onClick}
    >
      <img src={icone} alt={props.alt} className="listaMenu-icone" />
      <label>{props.label}</label>
      {comSeta && <img src={comSeta} alt={props.alt} className={`listaMenu-seta ${props.isSelected ? "selected" : ""}`}/>}
    </div>
  );
};

export default ListaMenu;




/*
Mudar o botão para esse formato

const Botao = (props) => {
    return (<button className='botao'>
        {props.children} 
    </button>)
}
 */

/*
  <div className={`listaMenu-botao ${comSeta ? 'com-seta' : 'sem-seta'}`}>
            <img src={props.icone} alt={props.alt} className='listaMenu-icone' />
            <label>{props.label}</label>
            {comSeta && <img src={props.setas} alt={props.alt}/>}
        </div>
        
*/
