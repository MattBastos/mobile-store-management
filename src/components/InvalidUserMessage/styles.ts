import tw from "tailwind-styled-components";

export const Container = tw.section`
  text-center
  bg-red-200
  border
  border-red-500
  p-4
  md:p-6
  rounded-md
  flex
  flex-col
  justify-center
  fixed
  top-1/4
  md:top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
`;

export const Title = tw.h1`
  mb-2
  md:mb-4
  text-lg
  md:text-xl
  text-red-700
`;

export const Button = tw.button`
  bg-red-500
  text-white
  py-1
  px-2
  md:py-2
  md:px-4
  rounded-md
  hover:bg-red-600
  cursor-pointer
  text-base
  md:text-lg
`;
