import { Flex, FlexProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface IProps extends FlexProps {
    htmlFor: string;
    label: string;
}

export default function Label({
  htmlFor, label, children, ...props
}: PropsWithChildren<IProps>) {
  return (
    <Flex
      as="label"
      color="gray.500"
      htmlFor={htmlFor}
      direction="column"
      alignItems="flex-start"
      width="100%"
      fontSize="1.1rem"
      fontWeight="bold"
      gridRowGap="8px"
      {...props}
    >
      {label}
      {children}
    </Flex>
  );
}
