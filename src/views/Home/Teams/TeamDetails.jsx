import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTeamById } from '../../../services/teams';

function TeamDetails() {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamById(teamId)
      .then((resp) => setTeam(resp))
      .then(() => setLoading(false));
  }, [teamId]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Link to="/">Go to homepage</Link> <Link to="/teams">Go to teams</Link>{' '}
      <Link to="/players">Go to players</Link>
      <h1>{team.name}</h1>
      <p>
        {team.city}, {team.state}
      </p>
      <menu>
        {team.players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`} className="App-Link">
              {player.name}:
            </Link>{' '}
            {player.position}
          </li>
        ))}
      </menu>
    </>
  );
}

export default TeamDetails;
