import React from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

import * as Styled from './styles';

export const ToTop = () => {
  const scrollToTop = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Styled.Wrapper onClick={scrollToTop}>
      <RiArrowUpSLine color="#fff" size={22} />
    </Styled.Wrapper>
  );
};
