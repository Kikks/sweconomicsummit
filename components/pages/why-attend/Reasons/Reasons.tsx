import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { reasons } from './data';

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

const Reasons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="w-full px-5 py-40 pt-20 md:px-10 md:pt-40 lg:px-20">
      <div ref={ref} className="container space-y-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid w-full grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 lg:gap-y-24"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              id={item.id}
              initial="hidden"
              variants={itemVariants}
              viewport={{ once: true, margin: '-100px' }}
              whileInView="visible"
              className="col-span-1 flex scroll-mt-[200px] items-start space-x-2"
            >
              <span className="self-start font-poppins text-sm font-black text-green-500 md:text-base">
                0{index + 1}
              </span>

              <div className="flex flex-col space-y-3">
                <h3 className="font-poppins text-2xl font-bold md:text-2xl lg:text-3xl">
                  {item?.title}
                </h3>

                <p className="max-w-[40ch] md:text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reasons;
