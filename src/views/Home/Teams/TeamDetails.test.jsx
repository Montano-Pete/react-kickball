import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamDetails from './TeamDetails';

it('should render a detailed view of an individual team', async () => {
  render(
    <MemoryRouter initialEntries={['/teams/1']}>
      <Route path="/teams/:teamId">
        <TeamDetails />
      </Route>
    </MemoryRouter>
  );

  screen.getByText('Loading...');

  const teamName = await screen.findByText('Bridge City Sneakers', {
    exact: false,
  });
  screen.debug();
  expect(teamName).toBeInTheDocument();
});
