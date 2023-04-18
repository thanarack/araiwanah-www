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
          <Flex direction="row" gap={2} py={1.5} alignItems="center">
            <Icon color="gray.400" as={FiUsers} w="4" h="4" />
            <Text fontSize="sm">
              0
              <Text as="span" ml={1} color="blackAlpha.800">
                ผู้ติดตาม
              </Text>
            </Text>
          </Flex>
          <Flex direction="row" gap={2} py={1.5} alignItems="center">
            <Icon color="gray.400" as={IoNewspaperOutline} w="4" h="4" />
            <Text fontSize="sm">
              0
              <Text as="span" ml={1} color="blackAlpha.800">
                โพสต์
              </Text>
            </Text>
          </Flex>
          <Flex direction="row" gap={2} py={1.5} alignItems="center">
            <Icon color="gray.400" as={BiCommentDetail} w="4" h="4" />
            <Text fontSize="sm">
              0
              <Text as="span" ml={1} color="blackAlpha.800">
                ความคิดเห็น
              </Text>
            </Text>
          </Flex>
          <Flex direction="row" gap={2} py={1.5} alignItems="center">
            <Icon color="gray.400" as={FiHash} w="4" h="4" />
            <Text fontSize="sm">
              0
              <Text as="span" ml={1} color="blackAlpha.800">
                แท็คที่ติดตาม
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
