import React from "react"; //Importa o React
import "header.css";
import smallRight from "../assets/icons/small-right.png"
import smallLeft from "../assets/icons/small-left.png"
import search from "../assets/icons/search.png"

const Header = () => {
    return (
        <nav classNamename="header__navigation">
          <div className="navigation">
            <button className="arrow-left">
              <img
                src={smallLeft}
                alt="seta à esquerda"
              />
            </button>
            <button className="arrow-right">
              <img
                src={smallRight}
                alt="seta à direita"
              />
            </button>
            <div className="header__search">
              <img src= {search} alt="" />
              <input
                id="search-input"
                type="text"
                maxlength="800"
                placeholder="O que você quer ouvir?"
              />
            </div>
          </div>

          <div className="header__login">
            <button className="subscribe">Increva-se</button>
            <button className="login">Entrar</button>
          </div>
        </nav>
    )
};

export default Header; // precisa exportar tudo que for usar