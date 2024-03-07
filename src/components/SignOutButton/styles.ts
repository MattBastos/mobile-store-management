import tw from "tailwind-styled-components";

export const SignOutButton = tw.button`
  flex
  justify-center
  items-center
  gap-2
  bg-primary
  px-4
  py-2
  rounded
  hover:bg-red-400
  transition-colors
  duration-300
  ease-in-out
  border
`;

export const SignOutTextButton = tw.p`
  font-semibold
`;

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

export const ModalContainer = tw.section`
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

export const ModalTitle = tw.h2`
  text-xl
  mb-4
  mx-2
`;

export const ModalButtonsContainer = tw.section`
  flex
  justify-center
  items-center
  gap-4
`;

export const ConfirmButton = tw.button`
  bg-red-500
  hover:bg-red-600
  text-center
  text-white
  p-2
  rounded-md
`;

export const CancelButton = tw.button`
  bg-gray-500
  hover:bg-gray-600
  text-center
  text-white
  p-2
  rounded-md
`;
