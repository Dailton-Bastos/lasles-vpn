import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 36px;
  justify-content: center;

  @media only screen and (max-width: 1125px) {
    border-radius: 5px;
    border: 1px solid #EEEFF2;
    justify-content: space-between;
    padding: 10px 50px;
  }

  & + div {
    border-left: 1px solid #EEEFF2;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 2rem;

    @media only screen and (max-width: 1125px) {
      align-items: center;
      font-size: 1.6rem;
      justify-content: center;
    }

    span {
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

    @media only screen and (max-width: 1125px) {
      font-size: 2rem;
    }
  }
`;
