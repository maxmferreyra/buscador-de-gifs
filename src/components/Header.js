import React from "react";

function Header({ handleDarkmode, isDark }) {
  return (
    <>
      <header>
        {isDark ? (
          <img src="./images/logo-desktop.svg" alt="LOGO GIFOS" />
        ) : (
          <img
            src="./images/logo-mobile-modo-noct.svg"
            alt="LOGO GIFOS MODO DARK"
          />
        )}
        <button onClick={handleDarkmode}>{` ${
          isDark ? "LIGHT" : "DARK"
        } MOOD `}</button>
      </header>
    </>
  );
}

export default Header;