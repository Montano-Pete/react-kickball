import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PlayerForm from '../../../components/PlayerForm';
import { updatePlayerById } from '../../../services/player';

export default function UpdatePlayer() {
  const { playerId } = useParams();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await updatePlayerById(playerId, {
      name,
      position,
      teamId,
    });

    history.push(`/players/${response[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Update Player</legend>
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
