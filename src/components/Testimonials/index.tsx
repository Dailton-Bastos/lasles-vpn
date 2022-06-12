import React from 'react';

import { TestimonialProps } from '~/@types/testemonial';
import { useObserver } from '~/hooks/useObserver';

import { SliderTestimonials } from './Slider';
import * as Styled from './styles';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState<TestimonialProps[]>(
    [],
  );

  const [error, setError] = React.useState(false);
  const { ref, inView } = useObserver();

  React.useEffect(() => {
    async function fetchTestimonial() {
      try {
        const response = await fetch(
          'https://testimonialapi.toolcarton.com/api',
        );

        const result = await response.json();

        if (result.length) {
          setTestimonials([...result]);
        } else {
          setTestimonials([{ ...result }]);
        }
      } catch (_) {
        setError(true);
      } finally {
        setError(false);
      }
    }

    fetchTestimonial();
  }, []);

  return (
    <Styled.Content id="testimonials" ref={ref} inView={inView}>
      <h2>Trusted by Thousands of Happy Customer</h2>

      <p>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>

      {!error && (
        <Styled.Testimonials>
          {testimonials && <SliderTestimonials testimonials={testimonials} />}
        </Styled.Testimonials>
      )}
    </Styled.Content>
  );
};
