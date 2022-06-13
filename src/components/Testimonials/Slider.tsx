import { TestimonialProps } from '~/@types/testemonial';
import { Slider, Slide, SliderProps } from '~/components/Slider';

import { Testimonial } from './Testimonial';

type Props = {
  testimonials: TestimonialProps[];
};

export const SliderTestimonials = ({ testimonials = [] }: Props) => {
  if (testimonials.length === 1) {
    return <Testimonial testimonial={testimonials[0]} one={true} />;
  }

  const settings: SliderProps = {
    spaceBetween: 10,
    slidesPerView: 1.2,
    navigation: true,
    draggable: testimonials.length >= 3,
    allowTouchMove: true,
    pagination: {
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2.2,
      },

      1024: {
        spaceBetween: 50,
        slidesPerView: 3,
        allowTouchMove: false,
        pagination: {
          clickable: false,
        },
      },
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
