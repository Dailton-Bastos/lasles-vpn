import React from 'react';

import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import { Auth } from './Auth';
import { Navbar } from './Navbar';
import * as Styled from './styles';

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1125px)');

  const refHeader = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60 && !isMobile) {
        refHeader.current?.classList.add('sticky');
      } else {
        refHeader.current?.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <Styled.Wrapper ref={refHeader}>
      <Container>
        <Styled.Content>
          {!isMobile && <Logo />}

          <Navbar />

          {!isMobile && <Auth />}
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
