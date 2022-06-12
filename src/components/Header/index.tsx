import React from 'react';

import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';

import * as Styled from './styles';

export const Header = () => {
  const refHeader = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        refHeader.current?.classList.add('sticky');
      } else {
        refHeader.current?.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Styled.Wrapper ref={refHeader}>
      <Container>
        <Styled.Content>
          <Logo />

          <Styled.Nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
            </ul>
          </Styled.Nav>

          <Styled.Buttons>
            <a href="/login">Sign In</a>
            <a href="/account">Sign Up</a>
          </Styled.Buttons>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
