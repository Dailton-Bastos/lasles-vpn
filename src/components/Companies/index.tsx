import { Logos } from './Logos';
import * as Styled from './styles';

export const Companies = () => {
  return (
    <Styled.Content>
      <Styled.SliderContainer>
        <Styled.SliderWrapper>
          <Logos />
          <Logos />
          <Logos />
          <Logos />
        </Styled.SliderWrapper>
      </Styled.SliderContainer>
    </Styled.Content>
  );
};
