import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

it('should render the homepage', () => {
  const { container } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
