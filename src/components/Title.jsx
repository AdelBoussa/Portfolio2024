import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

const Title = ({ children, level = 1, ...props }) => {
  // Determine the size of the heading based on the level prop
  const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
  const size = sizes[level - 1] || sizes[0];

  return (
    <Box p={4} bg="brand.50" borderRadius="md">
      <Heading as={`h${level}`} size={size} {...props}>
        {children}
      </Heading>
    </Box>
  );
};

export default Title;
