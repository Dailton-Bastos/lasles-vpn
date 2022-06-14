import styled from 'styled-components';

export const Wrapper = styled.button`
  align-items: center;
  background: #dee2e6;
  border: none;
  bottom: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  display: flex;
  height: 30px;
  justify-content: center;
  position: absolute;
  right: 10%;
  transition: background 0.3s;
  width: 32.6px;

  &:hover {
    background: #adb5bd;
  }
`;
