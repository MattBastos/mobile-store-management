import tw from "tailwind-styled-components";

export const Container = tw.section`
  text-center
  bg-red-200
  border
  border-red-500
  p-6
  rounded-md
  mb-4
  flex
  flex-col
  justify-center
  fixed
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
`;

export const Title = tw.h1`
  mb-4
  text-xl
  text-red-700
`;

export const Button = tw.button`
  bg-red-500
  text-white
  py-2
  px-4
  rounded-md
  hover:bg-red-600
  cursor-pointer
  text-lg
`;
