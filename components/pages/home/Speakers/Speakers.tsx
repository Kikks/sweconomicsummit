import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import AnimatedHeader from '../../../ui/AnimatedHeader';
import { guestsOfHonour, speakers } from './data';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.1,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 30,
    },
  },
};

const Speakers = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });
  const is2InView = useInView(ref2, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="w-full bg-blue-950 px-5 py-40 pt-20 text-white md:px-10 md:pt-40 lg:px-20">
      <div ref={ref} className="container space-y-20">
        <div className="">
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="Speaker Spotlight"
              visible={isInView}
              delay={0.1}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20"
        >
          {speakers.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              variants={itemVariants}
              viewport={{ once: true, margin: '-100px' }}
              whileInView="visible"
              className="relative flex aspect-[3/4] flex-col items-start justify-end space-y-3 overflow-hidden p-5 lg:col-start-2 lg:col-end-3 lg:px-14 lg:py-5"
            >
              <figure className="absolute left-0 top-0 z-[4] h-full w-full overflow-hidden">
                <img
                  src={item?.image}
                  alt={`${item.name}, ${item.title}`}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="absolute left-0 top-0 z-[10] !m-0 h-full w-full bg-gradient-to-t from-black via-black/20 to-black/0" />
              <h3 className="z-[10] font-poppins text-2xl font-bold md:text-2xl lg:text-3xl">
                {item?.name}
              </h3>
              <span className="z-[10]">{item?.title}</span>
            </motion.div>
          ))}
        </motion.div>

        <div ref={ref2} className="!mt-40 lg:!mt-64">
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="Special Guests"
              visible={is2InView}
              delay={0.1}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>

          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="of Honour"
              visible={is2InView}
              delay={0.2}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={is2InView ? 'visible' : 'hidden'}
          className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20"
        >
          {guestsOfHonour.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              variants={itemVariants}
              viewport={{ once: true, margin: '-100px' }}
              whileInView="visible"
              className="relative col-span-1 flex aspect-[3/4] flex-col items-start justify-end space-y-3 overflow-hidden p-5 lg:px-14 lg:py-5"
            >
              <figure className="absolute left-0 top-0 z-[4] h-full w-full overflow-hidden">
                <img
                  src={item?.image}
                  alt={`${item.name}, ${item.title}`}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="absolute left-0 top-0 z-[10] !m-0 h-full w-full bg-gradient-to-t from-black via-black/20 to-black/0" />
              <h3 className="z-[10] font-poppins text-2xl font-bold md:text-2xl lg:text-3xl">
                {item?.name}
              </h3>
              <span className="z-[10]">{item?.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
