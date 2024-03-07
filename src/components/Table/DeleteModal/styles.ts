import tw from 'tailwind-styled-components';

export const OverlayBackdrop = tw.section`
  fixed
  top-0
  left-0
  w-full
  h-full
  flex
  items-center
  justify-center
  bg-black
  bg-opacity-50
  z-10
`;

export const Container = tw.section`
  bg-white fixed
  left-1/2
  top-1/2
  z-20
  flex
  h-50
  w-50
  -translate-x-1/2
  -translate-y-1/2
  transform
  flex-col
  items-center
  justify-center
  rounded-md
  p-4
  shadow-xl
`;

export const TitleContainer = tw.section`
  mb-1
  md:mb-2
  flex
  w-full
  items-center
  justify-between
`;

export const Title = tw.h1`
  ml-2
  text-md
  md:text-xl
  font-bold
  text-gray-700
`;

export const CloseModalButton = tw.button`
  rounded-full
  mr-2
  p-1
  md:p-3
  transition-colors
  duration-200
  ease-in-out
  hover:bg-gray-200
`;

export const SeparatorLine = tw.hr`
  mb-1
  md:mb-2
  h-1
  w-4/5
  border-t
  border-gray-500
`;

export const Text = tw.p`
  mb-2
  md:mb-4
  text-center
  text-base
  md:text-xl
`;

export const ModalButtonsContainer = tw.section`
  flex
  justify-center
  items-center
  gap-3
  md:gap-4
`;

export const ConfirmButton = tw.button`
  bg-red-500
  hover:bg-red-600
  text-sm
  md:text-base
  text-center
  text-white
  p-2
  rounded-md
  transition-colors
  duration-200
  ease-in-out 
`;

export const CancelButton = tw.button`
  bg-gray-500
  hover:bg-gray-600
  text-sm
  md:text-base
  text-center
  text-white
  p-2
  rounded-md
  transition-colors
  duration-200
  ease-in-out 
`;
