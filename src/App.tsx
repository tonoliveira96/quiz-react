import React from "react";

import GlobalStyle from "./styles/global";
import "leaflet/dist/leaflet.css";

import Routes from "./routes";

const App: React.FC =()=> {
  return (
    <>
    <Routes>
      <GlobalStyle />
    </Routes>
    </>
  );
}

export default App;
