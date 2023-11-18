import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import useCarousel from '../../../../hooks/useCarousel';
import AnimatedHeader from '../../../ui/AnimatedHeader';
import { slides } from './data';

const imageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1,
    },
  },
};

const Header = () => {
  const { current } = useCarousel(slides.length, 10000);

  return (
    <header className="relative h-screen w-full items-center justify-center overflow-hidden bg-gray-400 p-5 md:px-10 lg:px-20">
      <AnimatePresence>
        {slides.map((item, index) => (
          <motion.figure
            key={index}
            variants={imageVariants}
            initial={{ opacity: 0 }}
            animate={{
              opacity: current === index ? 1 : 0,
              transition: {
                duration: 2,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 2,
              },
            }}
            className="absolute left-0 top-0 z-[1] h-full w-full overflow-hidden"
          >
            <motion.img
              src={item?.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.figure>
        ))}
      </AnimatePresence>

      <div className="absolute left-0 top-0 z-[2] h-full w-full bg-green-500/90 mix-blend-darken" />
      <div className="absolute left-0 top-0 z-[2] h-full w-full bg-black/40" />

      <div className="container flex h-full flex-col items-start justify-center space-y-1">
        <div className="relative z-10 h-10 w-full sm:h-12 md:h-14 lg:h-20">
          {slides.map((item, index) => (
            <AnimatedHeader
              key={index}
              title={item?.title?.[0] || ''}
              visible={current === index}
              delay={0.1}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-2xl font-bold leading-loose text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-7xl"
            />
          ))}
        </div>
        <div className="relative z-10 h-10 w-full sm:h-12 md:h-14 lg:h-20">
          {slides.map((item, index) => (
            <AnimatedHeader
              key={index}
              title={item?.title?.[1] || ''}
              visible={current === index}
              delay={0.2}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-2xl font-bold leading-loose text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-7xl"
            />
          ))}
        </div>
        <motion.div
          className="z-10 !mt-10 opacity-0"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          <Link
            href="/register"
            className="relative z-10 block overflow-hidden rounded-sm bg-white px-5 py-3 text-lg font-semibold text-green-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-green-500 before:mix-blend-difference before:duration-300 md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-5 lg:text-2xl lg:hover:before:w-full"
          >
            <span className="z-20">Register Now</span>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
