import mapImg from '~/assets/map.png';

import * as Styled from './styles';

export const Map = () => {
  return (
    <Styled.Content>
      <h2>Huge Global Network of Fast VPN</h2>

      <p>
        See <strong>LaslesVPN</strong> everywhere to make it easier for you when
        you move locations.
      </p>

      <Styled.Map>
        <img src={mapImg} alt="Huge Global Network of Fast VPN" />
      </Styled.Map>
    </Styled.Content>
  );
};
