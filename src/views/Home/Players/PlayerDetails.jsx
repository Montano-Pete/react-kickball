import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlayerById } from '../../../services/player';

function PlayerDetails() {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerById(playerId)
      .then((resp) => setPlayer(resp))
      .then(() => setLoading(false));
  }, [playerId]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Link to="/">Go to homepage</Link> <Link to="/teams">Go to teams</Link>
      <h1>{player.name}</h1>
      <p>
        {player.position} for the {player.teams.name}
      </p>
    </>
  );
}

export default PlayerDetails;
