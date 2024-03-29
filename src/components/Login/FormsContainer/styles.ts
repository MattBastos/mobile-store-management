import tw from "tailwind-styled-components";

export const Container = tw.section`
  bg-gray-100
  p-6
  md:p-8
  rounded
  w-[300px]
  md:w-[400px]
  flex
  flex-col
`;

export const Title = tw.h1`
  text-xl
  md:text-2xl
  font-bold
  mb-4
  text-secondary
  text-center
`;

export const SwitchFormContainer = tw.section`
  flex
  justify-center
  items-center
  gap-1
  md:gap-2
`;

export const Text = tw.p`
  text-gray-600
`;

export const UnderlinedText = tw.p`
  text-primary
  cursor-pointer
  underline
  transition-colors
  duration-300
  ease-in-out
  hover:text-blue-500
`;
