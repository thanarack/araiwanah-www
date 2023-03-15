'use client';

import { Box, Heading, Icon } from '@chakra-ui/react';
import { BiHash } from 'react-icons/bi';

export default function AsideAds() {
  return (
    <Box
      as="aside"
      background="whiteAlpha.600"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
    >
      <Box>
        <Heading as="h5" size="md" p={4}>
          <Icon
            as={BiHash}
            pos="relative"
            top={1}
            color="blackAlpha.900"
            fontWeight="normal"
          />
          Advertisement
        </Heading>
      </Box>
      {/* <Box>asdasd</Box> */}
    </Box>
  );
}
