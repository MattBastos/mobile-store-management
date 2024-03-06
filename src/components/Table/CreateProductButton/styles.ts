import tw from "tailwind-styled-components";

export const CreateProductButton = tw.button`
  max-w-20
  md:max-w-24
  self-end
  flex
  justify-center
  items-center
  gap-1
  bg-primary
  px-2
  py-1
  md:px-4
  md:py-2
  rounded
  hover:bg-secondary
  transition-colors
  duration-300
  ease-in-out
  border
`;

export const CreateProductTextButton = tw.p`
  font-semibold
  text-md
  md:text-lg
`;
