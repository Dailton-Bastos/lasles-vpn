import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
`;

export const LogosContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;

  > div {
    display: inline-block;
    padding: 0 4.2rem;
    vertical-align: middle;
    outline: none;
    cursor: default;

    svg {
      opacity: 0.25;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
