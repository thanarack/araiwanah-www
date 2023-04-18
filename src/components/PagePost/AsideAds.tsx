'use client';

import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { BiHash } from 'react-icons/bi';

export default function AsideAds(props: any) {
  const { mt } = props;

  return (
    <Box
      as="aside"
      background="white"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
      mt={mt}
    >
      {/* <Box>
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
      </Box> */}
      <Flex p={4} justify="center" align="center">
        Ads show here
      </Flex>
    </Box>
  );
}
