import { render, screen } from '@testing-library/react';

import { Plans } from '.';

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Plans />);

    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument();
  });
});
