/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';
import { getTeams, deleteTeamById } from '../../../services/teams';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const loadTeams = async () => {
    setLoading(true);
    const resp = await getTeams();
    setTeams(resp);
    setLoading(false);
  };

  useEffect(() => {
    loadTeams();
  }, []);

  const handleUpdate = (id) => {
    history.push(`/teams/updateTeam/${id}`);
  };

  const handleDelete = async ({ id, name }) => {
    const shouldDeleteTeam = confirm(
      `Are you sure you want to delete ${name}?`
    );

    if (shouldDeleteTeam) {
      await deleteTeamById(id);
      await loadTeams();
    }
  };

  if (loading) return <p>Loading teams...</p>;

  return (
    <>
      <Link to="/">Go to homepage</Link>{' '}
      <Link to="/players">Go to players</Link>
      <h1>Kickball Teams:</h1>
      <Link to="/teams/createTeam" className="App-Link">
        Create A Team
      </Link>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`} className="App-Link">
              {team.name}
            </Link>{' '}
            <button type="button" onClick={() => handleUpdate(team.id)}>
              Edit
            </button>
            <button
              type="button"
              aria-label={`delete team ${team.name}`}
              onClick={() => handleDelete({ id: team.id, name: team.name })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TeamList;
