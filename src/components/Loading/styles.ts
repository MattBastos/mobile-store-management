import tw from "tailwind-styled-components";

export const Container = tw.section`
  flex
  items-center
  justify-center
  h-screen
`;

export const Spinner = tw.section`
  border-t-4
  border-primary
  border-solid
  rounded-full
  h-12
  w-12
  animate-spin
`;
