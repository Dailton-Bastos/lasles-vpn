import FeaturesImg from '~/assets/features.png';
import { Container } from '~/components/Container';
import { useObserver } from '~/hooks/useObserver';

import * as Styled from './styles';

export const Features = () => {
  const { ref, inView } = useObserver();

  return (
    <Styled.Wrapper id="features">
      <Container>
        <Styled.Content ref={ref}>
          <Styled.Hero inView={inView}>
            <img src={FeaturesImg} alt="User with a laptop" />
          </Styled.Hero>

          <Styled.About inView={inView}>
            <h2>We Provide Many Features You Can Use</h2>

            <p>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>

            <ul>
              <li>Powerfull online protection.</li>
              <li>Internet without borders.</li>
              <li>Supercharged VPN</li>
              <li>No specific time limits.</li>
            </ul>
          </Styled.About>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
