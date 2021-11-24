import React from "react";

function Header(props) {
  const handleDarkmode = () => {
    props.setDark(!props.isDark);
  };

  return (
    <header>
      {props.isDark ? (
        <img src="./images/logo-desktop.svg" alt="LOGO GIFOS" />
      ) : (
        <img
          src="./images/logo-mobile-modo-noct.svg"
          alt="LOGO GIFOS MODO DARK"
        />
      )}
      <button onClick={handleDarkmode}>{` ${
        props.isDark ? "LIGHT" : "DARK"
      } MOOD `}</button>
    </header>
  );
}

export default Header;