import { Bars2Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import appConfig from '../../../utils/appConfig';
import { navLinks } from './data';
import type NavbarProps from './Navbar.props';

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

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

const Navbar: FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? 'bg-black/20 mix-blend-difference backdrop-blur-md'
          : 'bg-transparent'
      } absolute z-[200] flex w-full justify-center p-5 duration-500 md:fixed md:px-10 lg:px-20 lg:py-7`}
    >
      <div className="container flex items-center justify-between">
        <motion.div variants={itemVariant} initial="hidden" animate="visible">
          <Link
            href="/"
            className="font-poppins font-semibold text-white md:text-lg"
          >
            {appConfig.site_name}
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center md:space-x-10"
        >
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={itemVariant}>
              <Link
                href={link.url}
                className={`relative hidden cursor-pointer font-poppins font-semibold text-white duration-500 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:duration-300 hover:before:w-full lg:block ${
                  link.url !== '/' && pathname.startsWith(link.url)
                    ? 'before:!w-full'
                    : ''
                } ${
                  link.url === '/' && pathname === link.url
                    ? 'before:w-full'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <motion.button
            variants={itemVariant}
            className="z-[500] flex h-8 w-8 items-center justify-center rounded-sm duration-300 hover:bg-white/30"
            onClick={toggleSidebar}
          >
            <Bars2Icon className="h-6 w-6 text-white" />
          </motion.button>

          <motion.div variants={itemVariant} className="hidden md:inline-block">
            <Link
              href="/register"
              className="relative z-[500] overflow-hidden rounded-sm bg-white px-5 py-3 font-semibold text-blue-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-blue-500 before:mix-blend-difference before:duration-300 lg:hover:before:w-full"
            >
              <span className="">Register Now</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
