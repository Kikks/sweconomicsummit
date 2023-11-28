import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import AnimatedHeader from '../../../ui/AnimatedHeader';

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

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="w-full px-5 py-40 pt-20 md:px-10 md:pt-40 lg:px-20">
      <div ref={ref} className="container flex flex-col items-start space-y-10">
        <div className="">
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="Welcome to the"
              visible={isInView}
              delay={0.1}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-blue-500 drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="SWES 2024"
              visible={isInView}
              delay={0.3}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-blue-500 drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5,
              type: 'spring',
              damping: 30,
            },
          }}
          viewport={{ once: true }}
          className="z-10 flex flex-col space-y-5 font-heebo text-lg md:max-w-[70vw] md:text-xl xl:max-w-[50vw] 2xl:max-w-[700px]"
        >
          <span>
            The inaugural South-West Economic Summit (SWES) brings together
            stakeholders including top government officials, financial
            institutions, economists and thought leaders to discuss the most
            pressing challenges in policies, regulations, infrastructure
            development, and how the South-West can leverage its rich human and
            material resources to drive the region&apos;s economic growth.
          </span>

          <span>
            It is the biggest gathering yet of South-West Governments and
            private sector players peovuding a platform to foster partnerships,
            adumbrate on strategies and innovation to drive the economy.
          </span>
        </motion.div>

        <div className="flex justify-start">
          <motion.div
            className="z-10"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Link
              href="/register"
              className="relative z-10 block overflow-hidden rounded-sm border border-blue-500 bg-white px-5 py-3 text-lg font-semibold text-blue-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-blue-500 before:mix-blend-difference before:duration-300 md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-5 lg:text-2xl lg:hover:before:w-full"
            >
              <span className="z-20">Register Now</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
