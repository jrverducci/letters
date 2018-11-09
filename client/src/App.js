import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import LogIn from "./components/login";
import LandingPage from "./components/landingPage";
import NewLetter from "./components/newLetter";
import LetterList from "./components/letterList";


const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Route path="/home" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/" exact component={LandingPage} />
      <Route path="/letter" exact component={NewLetter} />
      <Route path="/letter/list" exact component={LetterList} />
    </React.Fragment>
  </Router>
);

export default AppRouter;
