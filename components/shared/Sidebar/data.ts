import { navLinks } from '../Navbar/data';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from './icons';

export const sidebarLinks = navLinks;

export const otherLinks = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Partners',
    url: '/partners',
  },
  {
    name: 'FAQs',
    url: '/faqs',
  },
];

export const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/SwEconomicSummit',
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sweconomicsummit/',
    icon: InstagramIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/swedish-economic-summit/',
    icon: LinkedinIcon,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/SwEconomicSummit',
    icon: TwitterIcon,
  },
];
