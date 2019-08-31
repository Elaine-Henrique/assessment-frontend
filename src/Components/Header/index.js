import React from "react";
import './styles.css';

import PrimaryHeader from './PrimaryHeader';


const Header = ({word, buttonAction, changeWord}) => (
  <div>
    < PrimaryHeader />
    <div className="header">
      <div className="headerContainer">
        <img
          className="logo"
          src={require('../../images/download.png')}
          alt="webjump"
        />
        <div className="inputContainer">
          <input
            type="text"
            className="input"
            value={word}
            onChange={e => changeWord(e.target.value)}
          />
          <button className="btn-search" 
          onClick={buttonAction}>
            BUSCAR
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;