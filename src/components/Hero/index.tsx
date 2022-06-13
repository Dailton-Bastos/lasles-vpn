import heroImg from '~/assets/hero.png';
import { ReactComponent as HeroSVG } from '~/assets/hero.svg';
import { Container } from '~/components/Container';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import * as Styled from './styles';

export const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 1125px)');

  return (
    <Styled.Wrapper id="about">
      <Container>
        <Styled.Content>
          <Styled.About>
            <h1>
              <span>Want anything to be easy with</span>{' '}
              <div>
                <strong>LaslesVPN.</strong>
              </div>
            </h1>

            <p>
              Provide a network for all your needs with ease and fun using{' '}
              <strong>LaslesVPN</strong> discover interesting features from us.
            </p>

            <a href="#pricing">Get Started</a>
          </Styled.About>

          {isMobile && <img src={heroImg} alt="Hero" />}

          {!isMobile && (
            <Styled.Hero>
              <HeroSVG />
            </Styled.Hero>
          )}
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
