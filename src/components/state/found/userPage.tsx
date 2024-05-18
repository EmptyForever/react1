import React, { useState } from "react";
import "./userPage.css";
import "./userRepos.css";
import UserInfo from "./userInfo";
import UserRepos from "./userRepos";

function UserPage() {

    return (
      <>
        <div className="user center">
          <UserInfo />
          <UserRepos />
        </div>
      </>
    );
}

export default UserPage;
