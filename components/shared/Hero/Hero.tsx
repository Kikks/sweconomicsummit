import { motion } from 'framer-motion';
import type { FC } from 'react';
import React from 'react';

import AnimatedHeader from '../../ui/AnimatedHeader';
import type HeroProps from './Hero.props';

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

const Hero: FC<HeroProps> = ({ title, subtitle, text }) => {
  return (
    <header className="relative w-full items-center justify-center overflow-hidden bg-gray-400 p-5 md:px-10 lg:min-h-screen lg:px-20">
      <motion.figure
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute left-0 top-0 z-[1] h-full w-full overflow-hidden"
      >
        <motion.img
          src="https://res.cloudinary.com/kikks/image/upload/ar_16:9,c_fill/c_scale,w_1200/dpr_auto/v1698944427/sweconomicsummit/tourarechwg9b6nnmano.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.figure>

      <div className="absolute left-0 top-0 z-[2] h-full w-full bg-green-500/90 mix-blend-darken" />
      <div className="absolute left-0 top-0 z-[2] h-full w-full bg-black/40" />

      <div className="container flex h-full flex-col items-start justify-center pb-14 pt-[15vh] sm:pt-[20vh] md:space-y-3 lg:pt-[40vh]">
        <div className="relative z-10 h-20 w-full sm:h-20 md:h-20 lg:h-[8.5rem]">
          <AnimatedHeader
            title={title}
            visible
            delay={0.2}
            className="inline-block !w-auto whitespace-nowrap font-poppins text-5xl font-bold leading-loose text-white drop-shadow-sm sm:text-5xl md:text-7xl lg:text-[7.5rem]"
          />
        </div>
        {subtitle && (
          <div className="relative z-10 h-8 w-full sm:h-12 md:h-14 lg:h-14">
            <AnimatedHeader
              title={subtitle}
              visible
              delay={0.4}
              className="inline-block !w-auto whitespace-nowrap font-heebo text-lg leading-loose text-white drop-shadow-sm sm:text-xl md:text-3xl lg:text-4xl"
            />
          </div>
        )}
        {text && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
                type: 'spring',
                damping: 30,
              },
            }}
            className="z-10 mt-10 flex flex-col space-y-5 font-heebo text-lg text-white md:!mt-10 md:max-w-[70vw] md:text-xl xl:max-w-[50vw]"
          >
            {text}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Hero;
