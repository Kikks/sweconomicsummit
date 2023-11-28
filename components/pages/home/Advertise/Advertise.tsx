import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import AnimatedHeader from '../../../ui/AnimatedHeader';

const Advertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section className="w-full bg-blue-950 px-5 py-40 pt-20 text-white md:px-10 md:pt-40 lg:px-20">
      <div ref={ref} className="container space-y-20">
        <div className="">
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="Advertise in"
              visible={isInView}
              delay={0.1}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>
          <div className="relative z-10 h-14 w-full sm:h-16 md:h-20 lg:h-28">
            <AnimatedHeader
              title="event brochure"
              visible={isInView}
              delay={0.3}
              className="inline-block !w-auto whitespace-nowrap font-poppins text-4xl font-bold leading-loose text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
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
          className="z-10 flex flex-col space-y-5 font-heebo text-lg text-white md:max-w-[70vw] md:text-xl xl:max-w-[50vw] 2xl:max-w-[700px]"
        >
          <span>
            Entries into the official event programme brochure which will be
            distributed to all attendees at the Summit is now open.
          </span>

          <span>
            Take advantage of 2,500+ attendees to showcase your brand and its
            competitive advantage by advertising in the SWES 2024 programme
            brochure.
          </span>

          <span>
            Kindly contact Mathew on{' '}
            <Link
              className="text-white underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+2347012554798"
            >
              +234 701 255 4798
            </Link>{' '}
            to register.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Advertise;
