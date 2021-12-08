import { useEffect, useState } from 'react';
import { getTeams } from '../../../services/teams';
import { Link } from 'react-router-dom';

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  return (
    <>
      <Link to="/">Go to homepage</Link>{' '}
      <Link to="/players">Go to players</Link>
      <h1>Kickball Teams:</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`} className="App-Link">
              {team.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TeamList;
