import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { panalists, speakers } from './data';

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

const SpeakersAndPanelists = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="w-full px-5 py-40 pt-20 md:px-10 md:pt-40 lg:px-20">
      <div ref={ref} className="container space-y-40">
        <div className="w-full space-y-5">
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                type: 'spring',
                damping: 30,
              },
            }}
            viewport={{ once: true }}
            className="font-poppins text-sm font-bold capitalize text-green-500 md:text-base"
          >
            MAIN SPEAKERS
          </motion.h2>

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
                className="relative col-span-1 flex aspect-[3/4] flex-col items-start justify-end space-y-3 overflow-hidden p-5 text-white lg:px-14 lg:py-5"
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

        <div className="w-full space-y-5">
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                type: 'spring',
                damping: 30,
              },
            }}
            viewport={{ once: true }}
            className="font-poppins text-sm font-bold capitalize text-green-500 md:text-base"
          >
            PANEL LIST
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-3"
          >
            {panalists.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                variants={itemVariants}
                viewport={{ once: true, margin: '-100px' }}
                whileInView="visible"
                className="relative col-span-1 flex flex-col items-start justify-end space-y-3 overflow-hidden"
              >
                <h3 className="z-[10] max-w-[15ch] font-poppins text-2xl font-bold text-green-500 md:text-2xl lg:text-3xl">
                  {item.name.split(' ').map((name) => (
                    <span className="block" key={name}>
                      {name}
                    </span>
                  ))}
                </h3>
                <span className="z-[10] text-green-950">{item?.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersAndPanelists;
