import { render, screen } from '@testing-library/react';

import { Footer } from '.';

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />);

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Engage')).toBeInTheDocument();
    expect(screen.getByText('Earn Money')).toBeInTheDocument();
  });
});
