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
    name: 'Exhibit',
    url: '/exhibit',
  },
  {
    name: 'Sponsor',
    url: 'tel:+2347012554798',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    name: 'Newsroom',
    url: 'https://nigeriannewsdirect.com/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    name: 'Media hub',
    url: '/media-hub',
  },
];

export const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61553368957240&mibextid=ZbWKwL',
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/sweconomicsummit?igshid=OGQ5ZDc2ODk2ZA==',
    icon: InstagramIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/south-west-economic-summit/',
    icon: LinkedinIcon,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/sweconsummitng?t=Nl9_Yk4Ukfoq0XPyooBlSg&s=09',
    icon: TwitterIcon,
  },
];
