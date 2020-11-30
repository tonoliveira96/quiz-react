import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import ThankYou from "./components/ThankYou";

const Routes: React.FC = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/thankyou" exact component={ThankYou} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
