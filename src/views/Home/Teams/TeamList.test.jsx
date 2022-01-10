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
  const teamTwo = await screen.findByText('Desert Plains Dust Devils', {
    exact: false,
  });
  const teamThree = await screen.findByText('Industrial Gloomers', {
    exact: false,
  });
  const teamFour = await screen.findByText("Sebastopol Ace's", {
    exact: false,
  });

  expect(teamOne).toBeInTheDocument();
  expect(teamTwo).toBeInTheDocument();
  expect(teamThree).toBeInTheDocument();
  expect(teamFour).toBeInTheDocument();
});
