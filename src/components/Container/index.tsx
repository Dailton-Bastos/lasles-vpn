import React from 'react';

import * as Styled from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
