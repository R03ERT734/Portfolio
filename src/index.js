import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App'
import Description from "./components/Description";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={Description} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
