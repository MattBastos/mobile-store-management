'use client';

import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const Container = tw.figure`
  m-2
  h-24
  w-24
  flex
  items-center
  justify-center
  overflow-hidden
  rounded-full
`;

export const Logo = tw(Image)`
  h-full
  w-full
  object-cover
`;