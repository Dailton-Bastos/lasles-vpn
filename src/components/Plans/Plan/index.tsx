import { PlanProps } from '~/@types/plan';
import { ReactComponent as FreeSVG } from '~/assets/plan.svg';

import * as Styled from './styles';

export const Plan = ({
  plan,
  selected,
  onClick,
  recommended = false,
}: PlanProps) => {
  return (
    <Styled.Wrapper selected={selected} recommended={recommended}>
      <FreeSVG />

      <h3>{plan.title}</h3>

      <ul>
        {plan.benefits.map((benefit) => {
          return <li key={benefit}>{benefit}</li>;
        })}
      </ul>

      <Styled.Bottom selected={selected}>
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
