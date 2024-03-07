import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

export const Container = tw.header`
  bg-background
  fixed
  z-40
  flex
  justify-between
  items-center
  h-24
  w-full
  shadow-xl
`;

export const Nav = tw.nav`
  flex
  justify-center
  items-center
  gap-4
`;

export const Link = tw(NextLink)`
  flex
  items-center
  justify-center
  gap-1
  text-gray-200
  transition-colors
  duration-300
  ease-in-out
  hover:text-primary
  hover:underline
`;

export const LinkTitle = tw.h3`
  text-xl
  font-semibold
`;

export const SignOutButtonContainer = tw.section`
  mr-4
`;