'use client'

import { Box, Heading } from "@chakra-ui/react";

export default function ContentBody() {
  return (
    <Box as="main" boxShadow="xs" borderRadius="md" background="white" p={5} minH="300px">
      <Box pl={6}>
        <Heading as="h2" size="lg">
          How JWTs Could Be Dangerous and Its Alternatives
        </Heading>
      </Box>
    </Box>
  );
}
