import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import PlayerDetails from './views/Home/Players/PlayerDetails';
import PlayerList from './views/Home/Players/PlayerList';
import TeamDetails from './views/Home/Teams/TeamDetails';
import TeamList from './views/Home/Teams/TeamList';
import UpdateTeam from './views/Home/Teams/UpdateTeam';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamList} />
          <Route exact path="/teams/:teamId" component={TeamDetails} />
          <Route
            exact
            path="/teams/updateTeam/:teamId"
            component={UpdateTeam}
          />
          <Route exact path="/players" component={PlayerList} />
          <Route exact path="/players/:playerId" component={PlayerDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
