import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import TeamForm from '../../../components/TeamForm';
import { updateTeamById } from '../../../services/teams';

function UpdateTeam() {
  const { teamId } = useParams();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await updateTeamById(teamId, { name, city, state });
    history.push(`/teams/${res[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Update Team</legend>
        <TeamForm
          name={name}
          setName={setName}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </>
  );
}

export default UpdateTeam;
