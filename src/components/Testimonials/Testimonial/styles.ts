import styled from 'styled-components';

export const Testimonial = styled.article`
  background: var(--white);
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 30px;
  height: 260px;
  overflow-y: auto;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &.isActive {
    border: 3px solid var(--red-500);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.20);
  }


  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: var(--white);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-400);
    border-radius: 10px;
    border: 3px solid var(--gray-400);
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  height: 50px;
  overflow: hidden;
  position: relative;
  width: 50px;

  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
  }
`;

export const User = styled.div`
  h4 {
    color: var(--gray-900);
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 5px;
  }

  span {
    font-size: 1.4rem;
  }
`;

export const Rating = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;

  span {
    color: var(--gray-900);
  }
`;
