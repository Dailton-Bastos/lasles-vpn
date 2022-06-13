import styled from 'styled-components';

export const Wrapper = styled.header`
  align-items: center;
  background-color: var(--white);
  display: flex;
  position: fixed;
  height: 90px;
  padding: 0 50px;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;

  &.sticky {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: all 0.3s;
    height: 65px;
  }

  @media only screen and (max-width: 1125px) {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
    height: 65px;
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: space-between;
  width: 100%;
`;
