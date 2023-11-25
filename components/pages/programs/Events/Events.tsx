import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { events } from './data';

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

const Events = () => {
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
          className="grid w-full grid-cols-1 gap-20 md:grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:gap-y-24"
        >
          {events.map((item, index) => (
            <motion.div
              id={item.id}
              key={index}
              initial="hidden"
              variants={itemVariants}
              viewport={{ once: true, margin: '-100px' }}
              whileInView="visible"
              className="col-span-1 flex scroll-mt-[200px] flex-col items-start space-y-3"
            >
              <span className="font-poppins text-xs font-black text-blue-500 md:text-sm">
                {item?.date}
              </span>
              <h3 className="font-poppins text-2xl font-bold md:text-2xl lg:text-3xl">
                {item?.title}
              </h3>
              <p className="max-w-[50ch]">{item.summary}</p>

              {item.schedule.map((schedule, scheduleIndex) => (
                <div key={scheduleIndex} className="!mt-10 w-full space-y-4">
                  {schedule.title.trim() !== '' && (
                    <h4 className="text-lg font-bold md:text-xl">
                      {schedule.title}
                    </h4>
                  )}

                  <ul key={scheduleIndex} className="w-full space-y-2">
                    {schedule.items.map((scheduleItem, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex justify-between space-x-2 md:items-start md:justify-normal md:space-x-5"
                      >
                        <span className="font-poppins text-xs font-medium md:text-sm">
                          {scheduleItem?.title}{' '}
                          <span className="hidden md:inline-block">:</span>
                        </span>
                        <span className="w-[130px] text-right font-poppins text-xs font-bold text-blue-500 md:w-auto md:text-left md:text-sm">
                          {scheduleItem?.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
