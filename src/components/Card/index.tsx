import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function Card({
  children,
  ...props
}: PropsWithChildren<BoxProps>) {
  return (
    <Box
      borderRadius="10px"
      padding="20px"
      width="30vw"
      minW="300px"
      height="300px"
      backgroundColor="white"
      shadow="6px 6px 30px rgba(0, 0, 0, 0.1)"
      {...props}
    >
      {children}
    </Box>
  );
}
