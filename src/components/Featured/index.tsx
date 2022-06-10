import React from 'react';

import { Container } from '~/components/Container';
import { Plans } from '~/components/Plans';

import * as Styled from './styles';

export const Featured = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Plans />
      </Container>
    </Styled.Wrapper>
  );
};
