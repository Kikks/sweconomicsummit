import { useEffect, useState } from 'react';

const useCarousel = (length: number, time = 5000) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  return {
    current,
  };
};

export default useCarousel;
