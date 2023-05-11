/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Box, Flex } from '@chakra-ui/react';

export default function AsideAds(props: any) {
  const { mt } = props;

  return (
    <Box
      className="aside-sidebar"
      background="white"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
      mt={mt}
      position={'sticky'}
      top={20}
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
