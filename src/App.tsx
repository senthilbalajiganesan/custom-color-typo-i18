import React from "react";
import { Main } from "screens";
import "./App.scss";
import { initializeI18 } from "./i18";

initializeI18();

const App: React.FC = () => {
  return <Main />;
};

export default App;
