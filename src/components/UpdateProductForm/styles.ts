import tw from "tailwind-styled-components";

export const Container = tw.section`
  bg-gray-100
  p-8
  rounded
  w-[400px]
  flex flex-col
`;

export const Title = tw.h1`
  text-lg
  font-bold
  mb-4
  text-secondary
  text-center
`;

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
  gap-2
  mb-4
`;

export const ConfirmButton = tw.button`
  bg-green-500
  hover:bg-green-600
  text-center
  text-white
  p-2
  rounded-md
  w-full
`;

export const CancelButton = tw.button`
  bg-red-500
  hover:bg-red-600
  text-center
  text-white
  p-2
  rounded-md
  w-full
`;

export const Message = tw.p`
  mb-4
  text-green-500
  text-center
`;
