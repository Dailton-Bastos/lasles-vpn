import * as Styled from './styles';
import { Testimonial } from './Testimonial';

export const Testimonials = () => {
  return (
    <Styled.Content>
      <h2>Trusted by Thousands of Happy Customer</h2>

      <p>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>

      <Styled.Testimonials>
        <Testimonial />
      </Styled.Testimonials>
    </Styled.Content>
  );
};
