import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamList from './TeamList';

it('should render a view of the list of teams', async () => {
  render(
    <MemoryRouter initialEntries={['/teams']}>
      <Route path="/teams">
        <TeamList />
      </Route>
    </MemoryRouter>
  );

  const teamOne = await screen.findByText('Bridge City Sneakers', {
    exact: false,
  });
  const teamTwo = await screen.findByText('Lakeville Thunderfeet', {
    exact: false,
  });
  const teamThree = await screen.findByText('Mt. Hoodies', {
    exact: false,
  });

  expect(teamOne).toBeInTheDocument();
  expect(teamTwo).toBeInTheDocument();
  expect(teamThree).toBeInTheDocument();
});
