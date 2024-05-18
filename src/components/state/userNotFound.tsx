import React from "react";
import "./userNotFound.css";

function StartSearch() {
  return (
    <>
      <div className="flexCenterCenter">
        <div className="notFound">
          <img
            src="img/bigIconUser.svg"
            alt="user not search"
            className="notFound__icon"
          />
          <p className="notFound__text">User not found</p>
        </div>
      </div>
    </>
  );
}

export default StartSearch;
