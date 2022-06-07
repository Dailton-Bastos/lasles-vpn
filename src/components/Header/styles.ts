import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 45px 50px;
  width: 100%;
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
