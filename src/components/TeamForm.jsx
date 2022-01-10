import React from 'react';

function TeamForm({
  name,
  setName,
  city,
  setCity,
  state,
  setState,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="team-name">Name:</label>
      <input
        id="team-name"
        name="team-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <label htmlFor="state">State:</label>
      <input
        id="state"
        name="state"
        type="text"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />

      <button type="submit" aria-label="team-submit">
        Submit
      </button>
    </form>
  );
}

export default TeamForm;
