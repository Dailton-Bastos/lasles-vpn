import { Companies } from '~/components/Companies';
import { Container } from '~/components/Container';
import { Map } from '~/components/Map';
import { Plans } from '~/components/Plans';
import { Testimonials } from '~/components/Testimonials';

import * as Styled from './styles';

export const Featured = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Plans />
        <Map />
        <Companies />
        <Testimonials />
      </Container>
    </Styled.Wrapper>
  );
};
