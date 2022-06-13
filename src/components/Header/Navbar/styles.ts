import styled from 'styled-components';

type NavListProps = {
  isActive: boolean;
};

export const Nav = styled.nav`
  @media only screen and (max-width: 1125px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const NavList = styled.ul<NavListProps>`
  align-items: center;
  display: flex;
  gap: 40px;
  list-style: none;
  justify-content: center;

  @media only screen and (max-width: 1125px) {
    background: var(--white);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    padding: 50px 30px;
    position: absolute;
    height: calc(100vh - 65px);
    top: 65px;
    transform: ${({ isActive }) =>
      isActive ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    right: 0;
    width: 90%;

  }

  li {
    line-height: 18px;
    padding: 15px 8px;

    @media only screen and (max-width: 1125px) {
      border-bottom: 1px solid var(--gray-100);
      padding: 0;
      width: 100%;
    }

    a {
      position: relative;

      @media only screen and (max-width: 1125px) {
        display: block;
        padding: 15px 8px;
      }

      &::after {
        content: '';
        background: var(--red-500);
        bottom: -5px;
        left: 0;
        height: 2px;
        position: absolute;
        transition: width 0.3s;
        width: 0;

        @media only screen and (max-width: 1125px) {
          display: none;
        }
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;
