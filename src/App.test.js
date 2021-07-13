import { render, screen } from '@testing-library/react';
import Clock from './clock';

test('renders learn react link', () => {
  render(<Clock />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
