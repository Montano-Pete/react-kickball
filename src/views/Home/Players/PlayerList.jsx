/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';
import { getPlayers, deletePlayerById } from '../../../services/player';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState();
  const history = useHistory();

  const loadPlayers = async () => {
    setLoading(true);
    const response = await getPlayers();
    setPlayers(response);
    setLoading(false);
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleUpdate = (id) => {
    history.push(`/players/update/${id}`);
  };

  const handleDelete = async ({ id, name }) => {
    const shouldDeleteTeam = confirm(
      `Are you sure you want to delete player ${name}?`
    );

    if (shouldDeleteTeam) {
      await deletePlayerById(id);
      await loadPlayers();
    }
  };

  if (loading) return <p>Loading Players...</p>;

  return (
    <>
      <Link to="/">Go to homepage</Link> <Link to="/teams">Go to teams</Link>
      <h1>Kickball Players:</h1>
      <Link to="/players/createPlayer" className="App-Link">
        Create A Player
      </Link>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`} className="App-Link">
              {player.name}
            </Link>
            <button
              type="button"
              aria-label={`Edit ${player.name}`}
              onClick={() => handleUpdate(player.id)}
            >
              Edit
            </button>
            <button
              type="button"
              aria-label={`Delete ${player.name}`}
              onClick={() => handleDelete({ id: player.id, name: player.name })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlayerList;
