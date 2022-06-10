import { render, screen } from '@testing-library/react';

import { Map } from '.';

describe('Map component', () => {
  it('renders correctly', () => {
    render(<Map />);

    expect(
      screen.getByText('Huge Global Network of Fast VPN'),
    ).toBeInTheDocument();
  });
});
