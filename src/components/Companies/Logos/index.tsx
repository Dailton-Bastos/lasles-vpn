import { ReactComponent as EazeLogo } from '~/assets/eaze.svg';
import { ReactComponent as GithubLogo } from '~/assets/github.svg';
import { ReactComponent as MagicLogo } from '~/assets/magic.svg';
import { ReactComponent as NetflixLogo } from '~/assets/netflix.svg';
import { ReactComponent as OpenLogo } from '~/assets/open.svg';
import { ReactComponent as TruliaLogo } from '~/assets/trulia.svg';

import * as Styled from './styles';

export const Logos = () => {
  return (
    <Styled.Wrapper>
      <Styled.LogosContainer>
        <div>
          <OpenLogo />
        </div>

        <div>
          <EazeLogo />
        </div>

        <div>
          <MagicLogo />
        </div>

        <div>
          <TruliaLogo />
        </div>

        <div>
          <NetflixLogo />
        </div>

        <div>
          <GithubLogo />
        </div>
      </Styled.LogosContainer>
    </Styled.Wrapper>
  );
};
