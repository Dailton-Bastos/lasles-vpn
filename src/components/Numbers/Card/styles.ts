import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 36px;
  justify-content: center;

  & + div {
    border-left: 1px solid #EEEFF2;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      font-size: 2rem;
      line-height: 30px;
    }
  }
`;

export const Anime = styled.div`
  align-items: center;
  display: flex;

  span {
    color: var(--gray-900);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 30px;
  }
`;
