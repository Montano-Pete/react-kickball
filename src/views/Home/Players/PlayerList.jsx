import { useEffect, useState } from 'react';
import { getPlayers } from '../../../services/player';
import { Link } from 'react-router-dom';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  return (
    <>
      <Link to="/">Go to homepage</Link> <Link to="/teams">Go to teams</Link>
      <h1>Kickball Players:</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`} className="App-Link">
              {player.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlayerList;
