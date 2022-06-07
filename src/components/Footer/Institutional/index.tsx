import { InstitutionalProps } from '~/@types/footer';

import * as Styled from './styles';

export const Institutional = ({ title, links = [] }: InstitutionalProps) => {
  return (
    <Styled.Wrapper>
      <h3>{title}</h3>

      {links.map((link) => (
        <li key={link.title}>
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </Styled.Wrapper>
  );
};
