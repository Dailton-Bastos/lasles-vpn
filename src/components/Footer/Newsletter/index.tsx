import { useObserver } from '~/hooks/useObserver';
import { footer } from '~/mock-components.json';

import * as Styled from './styles';

export const Newsletter = () => {
  const { ref, inView } = useObserver();
  const { newsletter } = footer;

  return (
    <Styled.Content ref={ref} inView={inView}>
      <Styled.Title>
        <h2>{newsletter.title}</h2>

        <p>{newsletter.subtitle}</p>
      </Styled.Title>

      <Styled.Subscribe>Subscribe Now</Styled.Subscribe>
    </Styled.Content>
  );
};
