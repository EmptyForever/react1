import React, { useState } from "react";
import "./userPage.css";
import UserInfo from "./userInfo";
import ReposNot from "./reposNot";

function UserPageNotRepos() {
  return (
    <>
      <div className="user center">
        <UserInfo />
        <ReposNot />
      </div>
    </>
  );
}

export default UserPageNotRepos;
