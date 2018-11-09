import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import LogIn from "./components/login";


const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={LogIn} />
    </React.Fragment>
  </Router>
);

export default AppRouter;
