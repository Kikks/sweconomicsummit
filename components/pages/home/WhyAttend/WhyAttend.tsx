import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import AnimatedHeader from '../../../ui/AnimatedHeader';
import { whyAttendLinks } from './data';

const linksContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const linkVariant = {
  hidden: {
    opacity: 0,
    y: 50,
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

const WhyAttend = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section className="w-full px-5 py-40 md:px-10 lg:px-20">
      <div ref={ref} className="container">
        <div className="flex flex-col items-start space-y-3">
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
            WHY ATTEND
          </motion.h2>

          <div className="">
            <div className="relative z-10 h-7 w-full sm:h-8 md:h-10 lg:h-12">
              <AnimatedHeader
                title="Interested in Economic Development"
                visible={isInView}
                delay={0.2}
                className="!w-auto whitespace-nowrap text-base drop-shadow-sm sm:text-xl md:text-2xl lg:text-3xl"
              />
            </div>
            <div className="relative z-10 h-7 w-full sm:h-8 md:h-10 lg:h-12">
              <AnimatedHeader
                title="in the South West? South West Economic"
                visible={isInView}
                delay={0.4}
                className="!w-auto whitespace-nowrap text-base drop-shadow-sm sm:text-xl md:text-2xl lg:text-3xl"
              />
            </div>
            <div className="relative z-10 h-7 w-full sm:h-8 md:h-10 lg:h-12">
              <AnimatedHeader
                title="Summit is the place to be."
                visible={isInView}
                delay={0.6}
                className="!w-auto whitespace-nowrap text-base drop-shadow-sm sm:text-xl md:text-2xl lg:text-3xl"
              />
            </div>
          </div>
        </div>

        <motion.div
          variants={linksContainerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-10 grid w-full grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 md:flex md:items-center md:gap-0 md:space-x-10 xl:space-x-20"
        >
          {whyAttendLinks.map((item, index) => (
            <motion.div key={index} variants={linkVariant}>
              <Link
                href={item.url}
                className="col-span-1 flex items-center space-x-2"
              >
                <span className="self-start font-poppins text-[0.6rem] font-black text-green-500 md:text-xs">
                  0{index + 1}
                </span>
                <span className="relative cursor-pointer font-poppins font-semibold duration-500 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:bg-green-500 before:duration-300 hover:before:w-full md:text-xl xl:text-2xl">
                  {item.label}
                </span>
                <ChevronRightIcon className="h-5 w-5 text-green-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAttend;
