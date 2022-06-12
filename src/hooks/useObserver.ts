import { useInView } from 'react-intersection-observer';

export const useObserver = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return { ref, inView, entry };
};
