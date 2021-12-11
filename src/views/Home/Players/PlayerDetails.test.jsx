import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayerDetails from './PlayerDetails';

it('should render a detailed view of an individual player', async () => {
  render(
    <MemoryRouter initialEntries={['/players/6']}>
      <Route path="/players/:playerId">
        <PlayerDetails />
      </Route>
    </MemoryRouter>
  );

  const playerName = await screen.findByText('Terry Cruise', { exact: false });
  const playerDescription = await screen.findByText(
    'Catcher for the Stumptown Lumberjacks',
    { exact: false }
  );

  expect(playerName).toBeInTheDocument();
  expect(playerDescription).toBeInTheDocument();
});
