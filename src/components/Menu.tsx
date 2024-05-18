import React from "react";
import "./Menu.css";

function MenuHeader() {
  return (
    <>
      <nav className="header blueBackground">
        <div className="center">
        <img src="img/gitIcon.svg" alt="photo1" className="header__logo blueBackground" />
        <div className="search-content">
            <img src="img/iconSearch.svg" alt="photo1" className="header__icon" />
            <input type="text" className="header__input" onChange={(e) => {console.log(e.target.value);}}></input>
        </div>
        </div>
      </nav>
    </>
  );
}

export { MenuHeader };
