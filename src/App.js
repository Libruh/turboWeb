import React from 'react';
import 'normalize.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import datePlaylist from './components/datePlaylist'
import userPage from './components/userPage'
import DiscordButton from './components/discordbutton'

// Pages
import badRoute from './pages/404';
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import MusicPage from './pages/musicpage';
import ConstructionPage from './pages/constructionpage';
import SecretSanta from './pages/secretsantapage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="appPad">
      <Switch>
        <Route exact path="/music" component={MusicPage}/>
        <Route path="/music/user/:userID" component={userPage}/>
        <Route path="/music/:playlistDate" component={datePlaylist}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/events" component={ConstructionPage}/>
        <Route exact path="/events/secretsanta" component={SecretSanta}/>
        <Route exact path="/404" component={badRoute}/>
        <Redirect exact from="/" to='/Home'></Redirect>
        <Redirect to='/404'></Redirect>
      </Switch>
      </div>
    </Router>
  );
}
export default App;
