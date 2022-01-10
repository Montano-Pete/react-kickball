import { useState } from 'react';
import TeamForm from '../../../components/TeamForm';
import { createTeam } from '../../../services/teams';
import { useHistory } from 'react-router-dom';

function AddTeam() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await createTeam({ name, city, state });

    history.push(`/teams/${res[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Add a Team</legend>
        <TeamForm
          name={name}
          city={city}
          state={state}
          handleSubmit={handleSubmit}
          setName={setName}
          setCity={setCity}
          setState={setState}
        />
      </fieldset>
    </>
  );
}

export default AddTeam;
