import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import * as Styled from './styles';

export const SocialIcons = () => {
  return (
    <Styled.Wrapper>
      <a href="#">
        <FaFacebookF color="#F53838" size={18} />
      </a>

      <a href="#">
        <FaTwitter color="#F53838" size={18} />
      </a>

      <a href="#">
        <FaInstagram color="#F53838" size={18} />
      </a>
    </Styled.Wrapper>
  );
};
