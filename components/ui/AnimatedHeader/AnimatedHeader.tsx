import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';

import type AnimatedHeaderProps from './AnimatedHeader.props';

const getComponent = (as: string) => {
  switch (as) {
    case 'h1':
      return motion.h1;
    case 'h2':
      return motion.h2;
    case 'h3':
      return motion.h3;
    case 'h4':
      return motion.h4;
    case 'h5':
      return motion.h5;
    case 'h6':
      return motion.h6;
    default:
      return motion.h1;
  }
};

const AnimatedHeader: FC<AnimatedHeaderProps> = ({
  title,
  visible,
  className,
  delay = 0,
  as = 'h1',
}) => {
  const Component = getComponent(as);

  return (
    <AnimatePresence>
      {visible && (
        <Component
          key={title}
          variants={{
            initial: {},
            animate: {
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.05,
              },
            },
            exit: {
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.05,
              },
            },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`absolute left-0 top-0 flex h-full w-full justify-center overflow-hidden text-center ${
            className || ''
          }`}
        >
          <motion.span
            variants={{
              initial: {
                y: 100,
                opacity: 0,
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  delay,
                  type: 'spring',
                  stiffness: 50,
                  duration: 1,
                },
              },
              exit: {
                y: -100,
                opacity: 0,
                transition: {
                  type: 'spring',
                  stiffness: 50,
                  duration: 1,
                },
              },
            }}
            className={className}
          >
            {title}
          </motion.span>
        </Component>
      )}
    </AnimatePresence>
  );
};

export default AnimatedHeader;
