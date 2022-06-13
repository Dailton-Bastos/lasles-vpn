import styled from 'styled-components';

import { slideCompanies } from '~/styles/animation';

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 208px;
  margin: 0 auto;
  max-width: 1140px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    height: 90px;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 134px;
    z-index: 1;

    @media only screen and (max-width: 1125px) {
      width: 35px;
    }
  }

  &::before {
    background: linear-gradient(-270deg, #fff 0%, rgba(255,255,255,0) 100%);
    left: -1px;
  }

  &::after {
    background: linear-gradient(270deg, #fff 0%, rgba(255,255,255,0) 100%);
    right: -1px;
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

export const SliderWrapper = styled.div`
  animation: ${slideCompanies} 70s linear infinite;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;
