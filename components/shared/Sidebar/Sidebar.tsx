import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import type { FC } from 'react';
import useKeypress from 'react-use-keypress';

import AnimatedHeader from '../../ui/AnimatedHeader';
import { otherLinks, sidebarLinks, socials } from './data';
import type SidebarProps from './Sidebar.props';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
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
  exit: {
    y: '-100vh',
    transition: {
      duration: 0.5,
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

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  useKeypress('Escape', () => {
    onClose();
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed z-[400] flex h-screen w-full flex-col overflow-hidden bg-green-950"
        >
          <div className="container flex w-full items-center justify-end space-x-5 p-5 duration-500 md:px-10 lg:space-x-10 lg:py-7">
            <motion.button
              className="z-[500] flex h-8 w-8 items-center justify-center rounded-sm duration-300 hover:bg-white/30"
              onClick={onClose}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </motion.button>

            <motion.div>
              <Link
                href="/"
                onClick={onClose}
                className="relative z-[500] overflow-hidden rounded-sm bg-white px-5 py-3 font-semibold text-green-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-green-500 before:mix-blend-difference before:duration-300 lg:hover:before:w-full"
              >
                <span className="">Register Now</span>
              </Link>
            </motion.div>
          </div>

          <div className="container flex flex-1 flex-col items-center justify-center space-y-20 overflow-y-auto px-5 py-16 sm:space-y-40 md:px-10 md:py-5 lg:flex-row lg:space-x-10 lg:space-y-0 lg:py-7">
            <div className="flex w-full flex-col items-start justify-center space-y-5 lg:w-4/5">
              {sidebarLinks.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  className="relative z-10 h-14 w-full sm:h-20 md:h-28 lg:h-[7.8rem]"
                  onClick={onClose}
                >
                  <AnimatedHeader
                    title={item.name}
                    visible
                    delay={(index + 1) * 0.2 + 0.2}
                    as="h4"
                    className="font-outline-white font-outline-2 hover:font-outline-green-500 flex !w-auto items-center whitespace-nowrap font-poppins text-5xl font-bold text-white drop-shadow-sm duration-300 hover:text-green-950 sm:text-7xl md:text-[90px] lg:text-[100px] lg:leading-loose"
                  />
                </Link>
              ))}
            </div>
            <div className="flex w-full flex-col items-start space-y-20 lg:w-1/5">
              <div className="w-full items-start md:flex md:space-x-5 lg:block lg:space-x-0 lg:space-y-3">
                {otherLinks.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    onClick={onClose}
                    className="relative z-10 !block h-8 max-w-[150px] flex-1 sm:h-10 md:h-12 lg:h-12 lg:w-full lg:max-w-none"
                  >
                    <AnimatedHeader
                      title={item.name}
                      visible
                      delay={(index + 1) * 0.2 + 0.2}
                      as="h6"
                      className="!block !w-auto whitespace-nowrap font-heebo text-xl leading-loose text-white drop-shadow-sm duration-300 hover:text-green-500 sm:text-2xl md:text-3xl lg:text-4xl"
                    />
                  </Link>
                ))}
              </div>

              <motion.div
                variants={socialContainerVariant}
                className="flex w-full items-center space-x-3"
              >
                {socials.map((Item, index) => (
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    variants={socialVariants}
                    href={Item.url}
                    whileHover={{
                      scale: 1.5,
                    }}
                  >
                    <Item.icon />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
