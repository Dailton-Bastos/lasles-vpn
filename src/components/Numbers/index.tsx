import { ReactComponent as LocationIcon } from '~/assets/location.svg';
import { ReactComponent as ServerIcon } from '~/assets/server.svg';
import { ReactComponent as UserIcon } from '~/assets/user.svg';
import { Container } from '~/components/Container';

import { Card } from './Card';
import * as Styled from './styles';

export const Numbers = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Card icon={UserIcon} total={90} title="Users" />

          <Card icon={LocationIcon} total={30} title="Locations" />

          <Card icon={ServerIcon} total={50} title="Servers" />
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
