import { useState } from 'react';
import PlayerForm from '../../../components/PlayerForm';
import { useHistory } from 'react-router-dom';
import { createPlayer } from '../../../services/player';

function AddPlayer() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await createPlayer({ name, position, teamId });

    history.push(`/players/${res[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Add a Player</legend>
        <PlayerForm
          name={name}
          setName={setName}
          position={position}
          setPosition={setPosition}
          teamId={teamId}
          setTeamId={setTeamId}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </>
  );
}

export default AddPlayer;
