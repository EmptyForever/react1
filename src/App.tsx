import React, { useState } from "react";
import "./App.css";
import { MenuHeader } from "./components/Menu";
import StartSearch from "./components/state/startSearch";
import UserNotFound from "./components/state/userNotFound";
import UserPage from "./components/state/found/userPage";
import UserPageNotRepos from "./components/state/found/userPageNotRepos";


const App: React.FC = () => {
  const [key, setKey] = useState(1);
  const [component, setComponent] = useState(<>start</>);

  const changeNumber = () => {
    if (key === 1) {
      setKey(2);
    } else {
      setKey(1);
    }
  };

  const changeComponent = () => {
    switch (key) {
      case 1:
        setComponent(<StartSearch />);
        changeNumber();
        break;
      case 2:
        changeNumber();
        setComponent(<UserNotFound />);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <MenuHeader />
      {/* <StartSearch /> */}
      {/* <UserNotFound /> */}
      {/* <UserPageNotRepos /> */}
      <UserPage />
    </>
  );
};

export default App;
