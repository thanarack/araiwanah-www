'use client';

import { Box, Heading } from '@chakra-ui/react';
import PostUser from './PostUset';

export default function ContentBody() {
  return (
    <Box
      as="main"
      boxShadow="xs"
      borderRadius="md"
      background="white"
      p={5}
      minH="300px"
    >
      <Box px={6}>
        <PostUser />
        <Heading as="h2" size="lg" mt="4">
          How JWTs Could Be Dangerous and Its Alternatives
        </Heading>
      </Box>
    </Box>
  );
}
