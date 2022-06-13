import React from 'react';

import { Logo } from '~/components/Logo';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { navbar } from '~/mock-components.json';

import { Auth } from '../Auth';
import { MobileMenuIcon } from '../MobileMenuIcon';
import * as Styled from './styles';

export const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);

  const isMobile = useMediaQuery('(max-width: 1125px)');

  const handleToggle = React.useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <Styled.Nav>
      {isMobile && (
        <>
          <Logo />
          <MobileMenuIcon isActive={isActive} onToggle={handleToggle} />
        </>
      )}

      <Styled.NavList isActive={isActive}>
        {navbar.map((nav) => (
          <li key={nav.url} onClick={() => setIsActive(false)}>
            <a href={nav.url}>{nav.title}</a>
          </li>
        ))}

        {isMobile && <Auth />}
      </Styled.NavList>
    </Styled.Nav>
  );
};
