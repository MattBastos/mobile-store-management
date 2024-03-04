import tw from "tailwind-styled-components";

export const InputSection = tw.section`
  mb-4
`;

export const Label = tw.label`
  block
  text-md
  font-medium
  text-gray-600
`;

export const Input = tw.input`
  mt-1
  p-2
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
  mb-4
`;

export const Button = tw.button`
  bg-primary
  text-white
  p-2
  rounded-md
  w-full
`;
