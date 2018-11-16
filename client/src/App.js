import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import LogIn from "./components/login";
import LandingPage from "./components/landingPage";
import NewLetter from "./components/newLetter";
import LetterList from "./components/letterList";
import ViewLetter from "./components/viewLetter";
import TrackSanta from "./components/trackSanta";
import LetterSent from "./components/letterSent";
import Account from "./components/account";
import UpdateAccount from "./components/updateAccount";
import Snowstorm from 'react-snowstorm';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import lettersApp from './reducers'

const store = createStore(lettersApp);


const AppRouter = () => (
  <Provider store={store}>
  <Router>
    <React.Fragment>
      <Snowstorm />
      <Route path="/home" exact component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/" exact component={LandingPage} />
      <Route path="/letter" exact component={NewLetter} />
      <Route path="/letter/list" exact component={LetterList} />
      <Route path="/letter/view" exact component={ViewLetter} />
      <Route path="/tracker" exact component={TrackSanta} />
      <Route path="/letter/sent" exact component={LetterSent} />
      <Route path="/account" exact component={Account} />
      <Route path="/account/update" exact component={UpdateAccount} />
    </React.Fragment>
  </Router>
  </Provider>
);

export default AppRouter;
