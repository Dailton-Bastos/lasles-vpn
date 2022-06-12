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
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: space-between;
  width: 100%;
`;

export const Nav = styled.nav`
  ul {
    align-items: center;
    display: flex;
    gap: 40px;
    list-style: none;
    justify-content: center;

    li {
      line-height: 18px;
      padding: 15px 8px;

      a {
        position: relative;

        &::after {
          content: '';
          background: var(--red-500);
          bottom: -5px;
          left: 0;
          height: 2px;
          position: absolute;
          transition: width 0.3s;
          width: 0;
        }

        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 30px;

  a {
    color: var(--gray-900);
    font-weight: 500;

    &:last-of-type {
      align-items: center;
      border: 1px solid var(--red-500);
      border-radius: 50px;
      color: var(--red-500);
      display: flex;
      height: 45px;
      justify-content: center;
      transition: all 0.3s;
      width: 150px;

      &:hover {
        background-color: var(--red-500);
        color: var(--white);
      }
    }
  }
`;
