import { render, screen } from '@testing-library/react';

import { Features } from '.';

describe('Hero component', () => {
  it('renders correctly', () => {
    render(<Features />);

    expect(
      screen.getByText('We Provide Many Features You Can Use'),
    ).toBeInTheDocument();
  });
});
