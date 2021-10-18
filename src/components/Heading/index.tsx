import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface IProps extends HeadingProps {
  children: React.ReactNode;
}

function H1({ children, ...props }: IProps) {
  return (
    <Heading
      color="primary.500"
      as="h1"
      fontWeight="bold"
      fontSize="2.2rem"
      marginBottom="18px"
      {...props}
    >
      {children}
    </Heading>
  );
}

function H2({ children, ...props }: IProps) {
  return (
    <Heading
      color="contrast.800"
      as="h2"
      fontSize="1.8rem"
      marginBottom="18px"
      {...props}
    >
      {children}
    </Heading>
  );
}

function H3({ children, ...props }: IProps) {
  return (
    <Heading color="contrast.800" as="h3" fontSize="1.5rem" {...props}>
      {children}
    </Heading>
  );
}

function H4({ children, ...props }: IProps) {
  return (
    <Heading color="contrast.800" as="h4" fontSize="1.2rem" {...props}>
      {children}
    </Heading>
  );
}

export { H1, H2, H3, H4 };
