import { Companies } from '~/components/Companies';
import { Container } from '~/components/Container';
import { Map } from '~/components/Map';
import { Plans } from '~/components/Plans';

import * as Styled from './styles';

export const Featured = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Plans />
        <Map />
        <Companies />
      </Container>
    </Styled.Wrapper>
  );
};
