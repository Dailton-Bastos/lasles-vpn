import React from 'react';

import { ReactComponent as FreeSVG } from '~/assets/plan.svg';

import * as Styled from './styles';

type Plan = {
  id: number;
  title: string;
  value: number;
  benefits: string[];
};

type PlanProps = {
  selectedId?: number;
  plan: Plan;
  onClick: () => void;
  recommended?: boolean;
};

export const Plan = ({
  plan,
  selectedId,
  onClick,
  recommended = false,
}: PlanProps) => {
  return (
    <Styled.Wrapper
      className={`${selectedId === plan.id ? 'selected' : ''} ${
        recommended ? 'recommended' : ''
      }`}
    >
      <FreeSVG />

      <h3>{plan.title}</h3>

      <ul>
        {plan.benefits.map((benefit) => {
          return <li key={benefit}>{benefit}</li>;
        })}
      </ul>

      <Styled.Bottom>
        {plan.value >= 1 ? (
          <p>
            <strong>${plan.value}</strong> / mo
          </p>
        ) : (
          <p>
            <strong>Free</strong>
          </p>
        )}

        <button onClick={onClick}>Select</button>
      </Styled.Bottom>
    </Styled.Wrapper>
  );
};
