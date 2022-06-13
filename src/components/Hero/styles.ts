import styled from 'styled-components';

import { showup, reveal, slidein, fadein } from '~/styles/animation';

export const Wrapper = styled.section`
  padding: 0 50px;
  margin-top: 40px;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  margin: 0 auto;
  max-width: 1207px;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    flex-direction: column-reverse;
    justify-content: center;

    img {
      display: block;
      max-width: 100%;
    }
  }
`;

export const About = styled.div`
  margin-left: 30px;
  width: 45%;

  @media only screen and (max-width: 1125px) {
    margin-left: 0;
    width: 100%;
  }

  h1 {
    color: var(--gray-900);
    font-size: 5rem;
    font-weight: 500;
    line-height: 70px;
    margin-bottom: 20px;

    @media only screen and (max-width: 1125px) {
      font-size: 3rem;
      line-height: 50px;
    }

    span {
      animation: ${showup} 3s ease;
    }

    div {
      display: inline;
      animation: ${reveal} 3s ease;

      strong {
        position: relative;
        animation: ${slidein} 5s ease-in-out;
      }
    }
  }

  p {
    animation: ${fadein} 2s;
    line-height: 30px;
    strong {
      font-weight: 500;
    }
  }

  a {
    align-items: center;
    background: var(--red-500);
    border: 1px solid var(--red-500);
    border-radius: 10px;
    box-shadow: 0 25px 50px -12px rgba(245, 56, 56, 0.35);
    color: var(--white);
    display: flex;
    font-weight: 700;
    flex-shrink: 0;
    justify-content: center;
    height: 60px;
    line-height: 25px;
    transition: background 0.3s;
    margin-top: 50px;
    width: 250px;

    &:hover {
      background: #dd324d;
    }

    @media only screen and (max-width: 1125px) {
      margin-top: 30px;
      height: 45px;
      width: 100%;
    }
  }
`;

export const Hero = styled.div`
  animation: ${fadein} 3s;
  flex-shrink: 0;
`;
