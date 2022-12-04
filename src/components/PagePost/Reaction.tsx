'use client';

import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiCommentDetail } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';

export default function Reaction() {
  return (
    <Box as="aside" mt={10}>
      <Flex
        direction="column"
        justifyItems="center"
        alignItems="center"
        gap={8}
        color="blackAlpha.700"
      >
        <Button variant="ghost" _hover={{ background: 'transparent' }}>
          <Flex direction="column" alignItems="center" gap={2}>
            <Icon as={AiOutlineHeart} w={6} h={6} />
            <Text fontSize="sm" fontWeight="normal">0</Text>
          </Flex>
        </Button>
        <Button variant="ghost" _hover={{ background: 'transparent' }}>
          <Flex direction="column" alignItems="center" gap={2}>
            <Icon as={BiCommentDetail} w={6} h={6} />
            <Text fontSize="sm" fontWeight="normal">0</Text>
          </Flex>
        </Button>
        <Button variant="ghost" _hover={{ background: 'transparent' }}>
          <Flex direction="column" alignItems="center" gap={2}>
            <Icon as={BiBookmark} w={6} h={6} />
            <Text fontSize="sm" fontWeight="normal">0</Text>
          </Flex>
        </Button>
        <Button variant="ghost" _hover={{ background: 'transparent' }}>
          <Flex direction="column" alignItems="center" gap={2}>
            <Icon as={BsThreeDots} w={6} h={6} />
          </Flex>
        </Button>
      </Flex>
    </Box>
  );
}
