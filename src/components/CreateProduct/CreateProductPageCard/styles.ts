import NextImage from 'next/image';

import tw from "tailwind-styled-components";

export const Container = tw.section`
  hover:bg-white
  cursor-pointer
  text-center
  w-64
  h-80
  p-4
  rounded-lg
  shadow-md
  hover:shadow-lg
  transition
  duration-300
  flex
  flex-col
  bg-gray-200
`;

export const Title = tw.h2`
  text-xl
  lg:text-2xl
  font-bold
  mb-2
  text-secondary
`;

export const Description = tw.p`
  md:text-base
  lg:text-lg
  mb-2
  font-semibold
`;

export const SeparatorLine = tw.hr`
  mb-2
  border-t
  border-gray-300
  w-11/12
  mx-auto
`;

export const ImageContainer = tw.section`
  m-auto
  h-24
  w-24
  flex
  items-center
  justify-center
`;

export const Image = tw(NextImage)`
  h-full
  w-full
  object-cover
`;
