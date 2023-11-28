import type { ReactNode } from 'react';

export default interface HeroProps {
  title: string;
  subtitle?: string;
  text?: ReactNode;
}
