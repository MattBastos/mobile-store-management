import tw from "tailwind-styled-components";

export const Container = tw.section`
  bg-white
  cursor-pointer
  text-center
  hover:bg-gray-100
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

export const DetailsContainer = tw.section`
  flex
  flex-col
  gap-1
  m-auto
`;

export const TextDetails = tw.span`
  font-semibold
`;
