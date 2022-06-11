import styled from 'styled-components';

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0 65px;
  justify-content: center;
  width: 100%;

  h2 {
    color: var(--gray-900);
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 447px;
  }

  p {
    line-height: 30px;
    max-width: 555px;
    text-align: center;
  }
`;

export const Testimonials = styled.div`
  margin: 60px 0 0 auto;
  max-width: 1310px;
  position: relative;

  &::after {
    content: '';
    background: linear-gradient(270deg, #fff 0%, rgba(255,255,255,0) 100%);
    display: block;
    height: 110%;
    position: absolute;
    right: 0;
    top: -10px;
    width: 8.5vw;
    z-index: 1;
  }
`;
