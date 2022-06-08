import { footer } from '~/mock-components.json';

import * as Styled from './styles';

export const Newsletter = () => {
  const { newsletter } = footer;

  return (
    <Styled.Content>
      <Styled.Title>
        <h2>{newsletter.title}</h2>

        <p>{newsletter.subtitle}</p>
      </Styled.Title>

      <Styled.Subscribe>Subscribe Now</Styled.Subscribe>
    </Styled.Content>
  );
};
