import { RiStarHalfFill } from 'react-icons/ri';

import * as Styled from './styles';

export const Testimonial = () => {
  return (
    <Styled.Testimonial>
      <header>
        <Styled.Profile>
          <Styled.Avatar>
            <img
              src="https://testimonialapi.toolcarton.com/avatar/1.jpg"
              alt="User"
            />
          </Styled.Avatar>

          <Styled.User>
            <h4>Dailton Bastos</h4>
            <span>London, UK</span>
          </Styled.User>
        </Styled.Profile>

        <Styled.Rating>
          <span>4.5</span>
          <RiStarHalfFill color="#FEA250" />
        </Styled.Rating>
      </header>

      <blockquote>
        <p>
          &quot;We have been using product for last one year, and I have to say
          that it has transformed the way we do business. Thank you for awesome
          service.&quot;
        </p>
      </blockquote>
    </Styled.Testimonial>
  );
};
