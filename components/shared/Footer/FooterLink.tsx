import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { FooterLinkProps } from './Footer.props';

const FooterLink: FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="relative cursor-pointer duration-500 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:bg-blue-500 before:duration-300 hover:before:w-full"
    >
      {label}
    </Link>
  );
};

export default FooterLink;
