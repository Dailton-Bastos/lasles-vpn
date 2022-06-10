import React from 'react';

import { plans } from '~/mock-components.json';

import { Plan } from './Plan';
import * as Styled from './styles';

export const Plans = () => {
  const [selectedId, setSelectedId] = React.useState<number>();

  return (
    <Styled.Content id="pricing">
      <h2>Choose Your Plan</h2>

      <p>
        Let&apos;s choose the package that is best for you and explore it
        happily and cheerfully.
      </p>

      <Styled.Plans>
        {plans &&
          plans.map((plan) => (
            <Plan
              key={plan.id}
              plan={plan}
              onClick={() => setSelectedId(plan.id)}
              selectedId={selectedId}
              recommended={plan.recommended}
            />
          ))}
      </Styled.Plans>
    </Styled.Content>
  );
};
