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

  const playerOne = await screen.findByText('Alonzo Baller', {
    exact: false,
  });
  const playerTwo = await screen.findByText('Benny Rodriguez', {
    exact: false,
  });
  const playerThree = await screen.findByText('Johnny B. Gooding', {
    exact: false,
  });
  const playerFour = await screen.findByText('Pete Harmoney', {
    exact: false,
  });

  expect(playerOne).toBeInTheDocument();
  expect(playerTwo).toBeInTheDocument();
  expect(playerThree).toBeInTheDocument();
  expect(playerFour).toBeInTheDocument();
});
