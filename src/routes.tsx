import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";



const Routes: React.FC = ()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Quiz} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
