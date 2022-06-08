import { render, screen } from '@testing-library/react';

import { Hero } from '.';

describe('Hero component', () => {
  it('renders correctly', () => {
    render(<Hero />);

    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});
