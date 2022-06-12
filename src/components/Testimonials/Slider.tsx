import { TestimonialProps } from '~/@types/testemonial';
import { Slider, Slide, SliderProps } from '~/components/Slider';

import { Testimonial } from './Testimonial';

type Props = {
  testimonials: TestimonialProps[];
};

export const SliderTestimonials = ({ testimonials = [] }: Props) => {
  if (testimonials.length === 1) {
    return <Testimonial testimonial={testimonials[0]} />;
  }

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: testimonials.length < 3 ? testimonials.length : 3,
    navigation: testimonials.length >= 3,
    draggable: testimonials.length >= 3,
    allowTouchMove: false,
    pagination: {
      clickable: false,
    },
  };

  return (
    <Slider settings={settings}>
      {testimonials.map((testimonial) => (
        <Slide key={testimonial.id}>
          {({ isActive }) => (
            <Testimonial testimonial={testimonial} isActive={isActive} />
          )}
        </Slide>
      ))}
    </Slider>
  );
};
