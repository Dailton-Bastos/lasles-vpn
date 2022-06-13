import { keyframes } from 'styled-components';

export const showup = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

export const slidein = keyframes`
  0% {
    margin-left: -900px;
    opacity: 0;
  }
  20% {
    margin-left: -900px;
    opacity: 0;
  }
  35% {
    margin-left: 0px;
    opacity: 1;
  }
  100% {
    margin-left: 0px;
    opacity: 1;
  }
`;

export const reveal = keyframes`
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 355px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    width: 355px;
  }
`;

export const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
    transform: none;
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
    transform: none;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)}

    to {
    opacity: 1;
    transform: none;
    transform: none
  }
`;

export const navLinkFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideCompanies = keyframes`
  0% {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(-50%,0,0);
  }
`;
