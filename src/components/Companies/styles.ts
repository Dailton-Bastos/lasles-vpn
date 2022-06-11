import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(-50%,0,0);
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 208px;
  margin: 0 auto;
  max-width: 1140px;
  position: relative;
  width: 100%;

  &::after,
  &::before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 134px;
    z-index: 1;
  }

  &::before {
    background: linear-gradient(-270deg, #fff 0%, rgba(255,255,255,0) 100%);
    left: 0;
  }

  &::after {
    background: linear-gradient(270deg, #fff 0%, rgba(255,255,255,0) 100%);
    right: 0;
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

export const SliderWrapper = styled.div`
  animation: ${slide} 70s linear infinite;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;
