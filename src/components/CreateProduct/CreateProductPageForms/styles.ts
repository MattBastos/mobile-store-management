import tw from "tailwind-styled-components";

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

export const FormContainer = tw.section`
  fixed
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  bg-gray-100
  p-8
  rounded
  w-[400px]
  flex
  flex-col
  z-20
`;

export const Title = tw.h2`
  text-2xl
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
  text-gray-600
  text-center
`;

export const DetailSection = tw.section`
  my-4
  border-gray-400
  border-y
  py-2
`;

export const DetailTitle = tw.h3`
  text-lg
  font-semibold
  text-center
  text-secondary
`;

export const ProductManagementContainer = tw.section`
  flex
  fixed
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  gap-8
  z-20
`;

export const BulkFormContainer = tw.section`
  bg-gray-100
  p-8
  rounded
  w-[400px]
  flex
  flex-col
  z-30
`;

export const ProductsContainer = tw.section`
  flex
  flex-col
  bg-gray-100
  p-8
  rounded
  w-[700px]
  z-30
`;
