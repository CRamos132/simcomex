import React from 'react';

import { Input, InputProps } from '@chakra-ui/react';

const TextInput = React.forwardRef(
  (
    { type = 'text', ...props }: InputProps,
    forwardedRef: React.LegacyRef<HTMLInputElement>,
  ) => (
    <Input
      ref={forwardedRef}
      _disabled={{ cursor: 'not-allowed' }}
      backgroundColor="white"
      border="2px solid"
      borderRadius="16px"
      borderColor="gray.300"
      marginBottom="0"
      padding="20px"
      size="lg"
      colorScheme="gray"
      type={type}
      {...props}
    />
  ),
);

export default TextInput;
