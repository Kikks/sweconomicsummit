import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import AnimatedHeader from '../../../ui/AnimatedHeader';
import { conferenceScheduleData } from './data';

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

const ConferenceSchedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="w-full px-5 py-40 pt-20 md:px-10 md:pt-40 lg:px-20">
      <div ref={ref} className="container space-y-20">
        <div className="">
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="Much more than"
              visible={isInView}
              delay={0.1}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-green-500 drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="just a conference"
              visible={isInView}
              delay={0.3}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-green-500 drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid w-full grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {conferenceScheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              variants={itemVariants}
              viewport={{ once: true, margin: '-100px' }}
              whileInView="visible"
              className="col-span-1 flex flex-col items-start space-y-3"
            >
              <span className="font-poppins text-xs font-black text-green-500 md:text-sm">
                {item?.date}
              </span>
              <h3 className="font-poppins text-2xl font-bold md:text-2xl lg:text-3xl">
                {item?.title}
              </h3>
              <p>{item.summary}</p>
              <Link
                href={item.url}
                className="relative col-span-1 flex items-center space-x-2 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:bg-green-500 before:duration-300 hover:before:w-full "
              >
                <span className="cursor-pointer font-poppins font-bold text-green-500 duration-500 md:text-lg xl:text-lg">
                  Discover more
                </span>
                <ArrowRightIcon className="h-4 w-4 text-green-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConferenceSchedule;
