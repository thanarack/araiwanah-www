'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  WrapItem,
  Avatar,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function AvatarComponent(props: any) {
  const { mt, mb } = props;

  return (
    <Box
      mt={mt}
      mb={mb}
      background="whiteAlpha.600"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
    >
      <Box p={4}>
        <Flex justifyContent="center" align="center" direction="column">
          <WrapItem>
            <Avatar
              size="xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </WrapItem>
          <Button mt={3} size="sm" colorScheme='twitter'>ติดตาม</Button>
          <Text mt={3}>Thanarak Chaisri</Text>
          <Text fontSize="sm" color="blackAlpha.600">
            เข้าร่วม 13 ธ.ค. 2562
          </Text>
        </Flex>
        <Flex></Flex>
      </Box>
    </Box>
  );
}
