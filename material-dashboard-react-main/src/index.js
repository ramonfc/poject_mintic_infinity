/*!

=========================================================
* INFINITY INDEX - ENRUTADOR
* Los Estilos que se vayan a utilizar de manera Global
* Importalos aqui!
=========================================================

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// estilos css
import 'bootstrap/dist/css/bootstrap.min.css';

// Layouts
import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js"

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/user" component={Admin} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
