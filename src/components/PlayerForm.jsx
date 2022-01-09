import React from 'react';

function PlayerForm({
  name,
  setName,
  position,
  setPosition,
  teamId,
  setTeamId,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="player-name">Name:</label>
      <input
        id="player-name"
        name="player-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        id="position"
        name="position"
        type="text"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
      />

      <label htmlFor="teamId">Team:</label>
      <input
        id="teamId"
        name="teamId"
        type="text"
        value={teamId}
        onChange={(event) => setTeamId(event.target.value)}
      />

      <button type="submit" aria-label="submit form">
        Submit
      </button>
    </form>
  );
}

export default PlayerForm;
