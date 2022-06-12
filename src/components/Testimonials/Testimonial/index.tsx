import { RiStarHalfFill, RiStarSFill } from 'react-icons/ri';

import { TestimonialProps } from '~/@types/testemonial';

import { Expand } from '../Expand';
import * as Styled from './styles';

type Props = {
  testimonial: TestimonialProps;
  isActive?: boolean;
};

export const Testimonial = ({ testimonial, isActive = false }: Props) => {
  return (
    <Styled.Testimonial className={isActive ? 'isActive' : ''}>
      <header>
        <Styled.Profile>
          <Styled.Avatar>
            <img src={testimonial.avatar} alt={testimonial.name} />
          </Styled.Avatar>

          <Styled.User>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.location}</span>
          </Styled.User>
        </Styled.Profile>

        <Styled.Rating>
          <span>{testimonial.rating}</span>

          {testimonial.rating <= 3 ? (
            <RiStarHalfFill color="#FEA250" />
          ) : (
            <RiStarSFill color="#FEA250" />
          )}
        </Styled.Rating>
      </header>

      <Expand>{testimonial.message}</Expand>
    </Styled.Testimonial>
  );
};
