import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';

import { useMediaQuery } from '~/hooks/useMediaQuery';

import * as Styled from './styles';

type CardProps = {
  icon: React.ElementType;
  total: number;
  title: string;
};

export const Card = ({ total, title, icon: Icon }: CardProps) => {
  const isMobile = useMediaQuery('(max-width: 1125px)');

  return (
    <Styled.Wrapper>
      <Icon />

      <div>
        <Styled.Anime>
          <AnimatedNumbers
            includeComma
            animateToNumber={total}
            fontStyle={{
              fontSize: isMobile ? 20 : 25,
              fontWeight: 700,
              fontFamily: 'Rubik',
              color: '#0B132A',
            }}
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
            ]}
          />
          <span>+</span>
        </Styled.Anime>
        <span>{title}</span>
      </div>
    </Styled.Wrapper>
  );
};
