import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import AnimatedHeader from '../../../ui/AnimatedHeader';
import { partners } from './data';

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

  return (
    <section className="w-full px-5 py-40 md:px-10 lg:px-20">
      <div ref={ref} className="container space-y-10">
        <div className="">
          <div className="relative z-10 h-7 w-full sm:h-8 md:h-10 lg:h-12">
            <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
              <AnimatedHeader
                title="Partners"
                visible={isInView}
                delay={0.1}
                className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-blue-500 drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              />
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="!mt-20 grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        >
          {partners.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              variants={itemVariants}
              viewport={{ once: true, margin: '-100px' }}
              whileInView="visible"
              className={`group col-span-1 flex aspect-square items-center justify-center border border-blue-950/10 p-10 `}
            >
              <item.Icon />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
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
              href="mailto:partnership@sweconomicsummit.com?subject=Partnership%20Inquiry"
              className="relative z-10 block overflow-hidden rounded-sm border border-blue-500 bg-white px-5 py-3 text-lg font-semibold text-blue-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-blue-500 before:mix-blend-difference before:duration-300 md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-5 lg:text-2xl lg:hover:before:w-full"
            >
              <span className="z-20">Become a partner</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
