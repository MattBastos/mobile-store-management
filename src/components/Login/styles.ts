import tw from "tailwind-styled-components";

export const InputSection = tw.section`
  mb-2
  md:mb-4
`;

export const Label = tw.label`
  block
  text-sm
  md:text-base
  font-medium
  text-gray-600
`;

export const Input = tw.input`
  mt-1
  p-1
  md:p-2
  w-full
  border
  rounded-md
  border-gray-400
  focus:border-primary
  focus:outline-none
  transition-colors
  duration-200
  ease-in-out
`;

export const ButtonSection = tw.section`
  flex
  justify-center
  mb-2
  md:mb-4
`;

export const Button = tw.button`
  bg-primary
  text-center
  text-white
  p-1
  md:p-2
  rounded-md
  w-full
`;

export const ErrorMessage = tw.p`
  mb-2
  md:mb-4
  text-red-500
  text-center
`;
