import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { footer } from '~/mock-components.json';

import { Accordion } from './Accordion';
import { Institutional } from './Institutional';
import { Newsletter } from './Newsletter';
import { SocialIcons } from './Social';
import * as Styled from './styles';

export const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 1125px)');

  const { institutionals } = footer;

  return (
    <Styled.Wrapper>
      <Container>
        <Newsletter />

        <Styled.Content>
          <Styled.Social>
            <Logo />

            <p>
              <strong>LaslesVPN</strong> is a private virtual network that has
              unique features and has high security.
            </p>

            {!isMobile && (
              <>
                <SocialIcons />

                <span>
                  &copy;2022Lasles<strong>VPN</strong>
                </span>
              </>
            )}
          </Styled.Social>

          {!isMobile &&
            institutionals.map((item) => (
              <Institutional
                key={item.title}
                title={item.title}
                links={item.links}
              />
            ))}

          {isMobile && <Accordion items={institutionals} />}

          {isMobile && (
            <>
              <SocialIcons />

              <span>
                &copy;2022Lasles<strong>VPN</strong>
              </span>
            </>
          )}
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
