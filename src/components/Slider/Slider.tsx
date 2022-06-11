import { A11y, Pagination, Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

import { SliderProps } from '~/@types/slider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

export const Slider = ({ children, settings }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};
