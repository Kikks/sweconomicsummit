import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import appConfig from '../../../utils/appConfig';
import { socials } from '../Sidebar/data';
import { footerLinks, inquiryLinks } from './data';
import FooterLink from './FooterLink';

const itemVariant = {
  hidden: {
    opacity: 0,
    y: -50,
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

const socialContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const socialVariants = {
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

const Footer = () => {
  return (
    <>
      <section className="-mb-10 w-full pt-10">
        <div className="mx-auto flex w-full max-w-[650px] flex-col items-center space-y-16 px-5 text-center">
          <motion.p
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
            viewport={{ once: true, margin: '-100px' }}
            className="text-xl md:text-3xl"
          >
            Register now for a unique experience of inspiration, meeting and
            networking.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.5,
                type: 'spring',
                damping: 30,
              },
            }}
            viewport={{ once: true, margin: '-100px' }}
            className="z-10"
          >
            <Link
              href="/register"
              className="relative z-10 block overflow-hidden rounded-sm border border-blue-950 bg-white px-5 py-3 text-lg font-semibold text-blue-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-blue-500 before:mix-blend-difference before:duration-300 md:px-8 md:py-4 md:text-xl lg:px-10 lg:py-5 lg:text-2xl lg:hover:before:w-full"
            >
              <span className="z-20">Register Now</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="w-full bg-blue-950 p-5 pt-20 text-white md:px-5 md:py-16 md:pt-32 lg:px-28">
        <div className="container flex flex-col space-y-10">
          <div className="flex w-full flex-col items-center justify-between space-y-20 md:flex-row md:items-start md:space-y-0">
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <motion.div
                variants={itemVariant}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="/"
                  className="font-poppins text-lg font-semibold text-white md:text-xl"
                >
                  {appConfig.site_name}
                </Link>
              </motion.div>

              <motion.div
                variants={socialContainerVariant}
                className="flex w-full items-center justify-center space-x-3 md:justify-start"
              >
                {socials.map((Item, index) => (
                  <motion.a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    href={Item.url}
                    whileHover={{
                      scale: 1.5,
                    }}
                  >
                    <Item.icon height={16} width={16} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 sm:place-items-start">
              <div className="flex min-w-[200px] flex-col items-center space-y-5 sm:items-end md:items-start">
                {footerLinks.map((item, index) => (
                  <FooterLink key={index} {...item} />
                ))}
              </div>

              <hr className="w-full border-white/10 sm:hidden" />

              <div className="flex min-w-[200px] flex-col items-center space-y-5 sm:items-start md:items-start">
                {inquiryLinks.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-0.5 text-center sm:items-start sm:text-left"
                  >
                    <span className="font-medium">{item.label}</span>
                    <Link
                      href={`mailto:${item.email}`}
                      className="relative cursor-pointer text-sm text-white/60 duration-500 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:duration-300 hover:before:w-full"
                    >
                      {item.email}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-3"></div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center border-t border-white/10 pt-10">
            <div className="space-y-0.5">
              <p className="text-xs text-white lg:text-sm">
                Hosted by: Nigerian NewsDirect
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
