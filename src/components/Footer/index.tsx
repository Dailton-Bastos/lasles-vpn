import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import { footer } from '~/mock-components.json';

import { Institutional } from './Institutional';
import { SocialIcons } from './Social';
import * as Styled from './styles';

export const Footer = () => {
  const { institutional } = footer;
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.Social>
            <Logo />

            <p>
              <strong>LaslesVPN</strong> is a private virtual network that has
              unique features and has high security.
            </p>

            <SocialIcons />

            <span>
              &copy;2022Lasles<strong>VPN</strong>
            </span>
          </Styled.Social>

          <Institutional
            title={institutional.product.title}
            links={institutional.product.links}
          />

          <Institutional
            title={institutional.engage.title}
            links={institutional.engage.links}
          />

          <Institutional
            title={institutional.earn_money.title}
            links={institutional.earn_money.links}
          />
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
