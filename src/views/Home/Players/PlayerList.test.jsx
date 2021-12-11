import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayerList from './PlayerList';

it('should render a view of a list of players', async () => {
  render(
    <MemoryRouter initialEntries={['/players']}>
      <Route path="/players">
        <PlayerList />
      </Route>
    </MemoryRouter>
  );

  const playerOne = await screen.findByText('Bennie Jetts', {
    exact: false,
  });
  const playerTwo = await screen.findByText('Buster Rimes', {
    exact: false,
  });
  const playerThree = await screen.findByText('Ron Long', {
    exact: false,
  });

  expect(playerOne).toBeInTheDocument();
  expect(playerTwo).toBeInTheDocument();
  expect(playerThree).toBeInTheDocument();
});
