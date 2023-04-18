'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  WrapItem,
  Avatar,
  List,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiUsers, FiHash } from 'react-icons/fi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BiCommentDetail } from 'react-icons/bi';

export default function UserInfo(props: any) {
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
      <Box px={4} py={2}>
        <Flex direction="column" color="blackAlpha.800">
          <Flex direction="row" gap={2} py={1.5}>
            <Icon color="gray.500" as={FiUsers} w="5" h="5" />
            <Text fontSize="sm">0 ผู้ติดตาม</Text>
          </Flex>
          <Flex direction="row" gap={2} py={1.5}>
            <Icon color="gray.500" as={IoNewspaperOutline} w="5" h="5" />
            <Text fontSize="sm">0 โพสต์ทั้งหมด</Text>
          </Flex>
          <Flex direction="row" gap={2} py={1.5}>
            <Icon color="gray.500" as={BiCommentDetail} w="5" h="5" />
            <Text fontSize="sm">0 ความคิดเห็น</Text>
          </Flex>
          <Flex direction="row" gap={2} py={1.5}>
            <Icon color="gray.500" as={FiHash} w="5" h="5" />
            <Text fontSize="sm">0 แท็คที่ติดตาม</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
