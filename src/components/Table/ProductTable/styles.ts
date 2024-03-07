import tw from "tailwind-styled-components";

export const SearchBarContainer = tw.section`
  flex
  justify-between
`;

export const SearchBar = tw.input`
  p-1
  md:p-2
  w-2/4
  border
  rounded-md
  border-gray-400
  focus:border-primary
  focus:outline-none
  transition-colors
  duration-200
  ease-in-out
`;

export const NoProductsMessage = tw.h2`
  text-xl
  text-center
  font-bold
  text-gray-100
`;

export const Container = tw.section`
  flex
  w-full
  flex-col
  gap-5
`;

export const TableContainer = tw.section`
  relative
  w-full
  max-h-[625px]
  overflow-y-auto
  overflow-x-auto
  rounded-t-xl
`;

export const Table = tw.table`
  w-full
  table-auto
  border-collapse
  border-spacing-0
  rounded-t-xl
  bg-gray-100
  text-center
`;

export const THead = tw.thead`
  bg-primary
  text-sm
  uppercase
  text-gray-100
  md:text-base
  lg:text-lg
`;

export const TH = tw.th`
  px-4
  py-3
`;

export const TBody = tw.tbody`
  text-sm
  text-gray-600
  md:text-base
  lg:text-lg
`;

export const TBodyRow = tw.tr`
  border-b
  border-gray-300
  transition-colors
  ease-in-out
  hover:bg-gray-300
`;

export const TD = tw.td`
  font-semibold
  px-2
  py-2
  md:px-4
`;

export const TDActions = tw.td`
  flex
  items-center
  justify-center
  gap-4
  px-2
  py-2
  md:px-4
`;

export const TableEditButton = tw.button`
  flex
  items-center
  justify-center
  md:h-9
  md:w-16
  lg:h-10
  lg:w-20
  p-2
  rounded-md
  md:rounded-lg
  text-white
  bg-green-500
  hover:bg-green-600
  transition-colors
  duration-200
  ease-in-out 
`;

export const TableDeleteButton = tw.button`
  flex
  items-center
  justify-center
  md:h-9
  md:w-16
  lg:h-10
  lg:w-20
  p-2
  rounded-md
  md:rounded-lg
  text-white
  bg-red-500
  hover:bg-red-600
  transition-colors
  duration-200
  ease-in-out 
`;

export const Message = tw.p`
  md:text-lg
  lg:text-xl
  text-gray-100
  text-center
`;
