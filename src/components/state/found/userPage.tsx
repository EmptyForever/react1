import React, { useState } from "react";
import "./userPage.css";
import "./userRepos.css";
import UserInfo from "./userInfo";

import { UserGitHub, UserEx , UserEx2 } from "../../../types/data";
import UserReposNew from "./userRepos";


function UserPage( user: UserEx) {
  return (
    <>
      <div className="user center">
        <UserInfo user={user}/>
        <UserReposNew user={user}/>
      </div>
    </>
  );
}

export default UserPage;
