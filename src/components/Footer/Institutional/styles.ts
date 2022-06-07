import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;

  h3 {
    color: var(--gray-900);
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  li {
    a {
      display: block;
      padding: 10px 0;

      &:hover {
        color: var(--gray-900);
      }
    }
  }
`;
