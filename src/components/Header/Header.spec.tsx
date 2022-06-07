import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
  });
});
