import React from 'react';

import { useObserver } from '~/hooks/useObserver';
import { plans } from '~/mock-components.json';

import { Plan } from './Plan';
import * as Styled from './styles';

export const Plans = () => {
  const [selectedId, setSelectedId] = React.useState<number>();
  const { ref, inView } = useObserver();

  return (
    <Styled.Content id="pricing" ref={ref}>
      <h2>Choose Your Plan</h2>

      <p>
        Let&apos;s choose the package that is best for you and explore it
        happily and cheerfully.
      </p>

      <Styled.Plans inView={inView}>
        {plans &&
          plans.map((plan) => (
            <Plan
              key={plan.id}
              plan={plan}
              onClick={() => setSelectedId(plan.id)}
              selected={selectedId === plan.id}
              recommended={plan.recommended}
            />
          ))}
      </Styled.Plans>
    </Styled.Content>
  );
};
