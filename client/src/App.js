import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import LogIn from "./components/login";
import LandingPage from "./components/landingPage";


const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Route path="/home" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={LogIn} />
      <Route path="/" exact component={LandingPage} />
    </React.Fragment>
  </Router>
);

export default AppRouter;
