import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import AnimatedHeader from '../../../ui/AnimatedHeader';
import { goldPartners } from './data';

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

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });
  const ref2 = useRef(null);
  const is2InView = useInView(ref2, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="w-full px-5 py-40 md:px-10 lg:px-20">
      <div ref={ref} className="container space-y-40">
        <div className="flex w-full flex-col space-y-5">
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
            className="font-poppins text-sm font-bold capitalize text-blue-500 md:text-base"
          >
            PARTNERS
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          >
            {goldPartners.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                variants={itemVariants}
                viewport={{ once: true, margin: '-100px' }}
                whileInView="visible"
                className={`group col-span-1 flex aspect-square items-center justify-center border border-blue-950/10 p-10 `}
              >
                <figure className="h-full w-full">
                  <img
                    src={item.Icon}
                    alt={item?.name || ''}
                    className="h-full w-full object-contain"
                  />
                </figure>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div ref={ref2} className="flex w-full flex-col space-y-5">
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
            className="font-poppins text-xl font-bold text-blue-500 md:text-2xl lg:text-3xl"
          >
            Become a partner
          </motion.h2>

          <div className="">
            <div className="relative z-10 h-7 w-full sm:h-8 md:h-10 lg:h-12">
              <AnimatedHeader
                title="Let's powere progress together. Elevate"
                visible={is2InView}
                delay={0.2}
                className="!w-auto whitespace-nowrap text-base drop-shadow-sm sm:text-xl md:text-2xl lg:text-3xl"
              />
            </div>
            <div className="relative z-10 h-7 w-full sm:h-8 md:h-10 lg:h-12">
              <AnimatedHeader
                title="your impact, and join us as a partner."
                visible={is2InView}
                delay={0.4}
                className="!w-auto whitespace-nowrap text-base drop-shadow-sm sm:text-xl md:text-2xl lg:text-3xl"
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={is2InView ? 'visible' : 'hidden'}
            className="flex items-center space-x-5"
          >
            <motion.div
              className="z-10"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:admin@newsdirectafrica.com?subject=Partnership%20Inquiry"
                className="relative z-10 block overflow-hidden rounded-sm border border-blue-500 bg-white px-5 py-3 text-lg font-semibold text-blue-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-blue-500 before:mix-blend-difference before:duration-300 md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-5 lg:text-2xl lg:hover:before:w-full"
              >
                <span className="z-20">Become a partner</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
