'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { BiBookmark } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiHash, BiCommentDetail } from 'react-icons/bi';

export default function Post(props: any) {
  const { data } = props;

  const userUrl = '/u/' + data.user.slug;
  const postLink = '/p/' + data.post.postId;

  return (
    <Box boxShadow="xs" borderRadius="md" background="white" p={5}>
      <Flex gap={2}>
        <Image
          src={data.user.picture}
          alt={data.user.name}
          borderRadius="full"
          width={9}
          height={9}
        />
        <Flex direction="column" alignContent="space-around" mt={-1}>
          <Link href={userUrl}>
            <Button px={1} py={1} type="button" variant="link">
              <Text as="span" color="blackAlpha.700" fontSize="sm">
                {data.user.name}
              </Text>
            </Button>
          </Link>
          <Text
            as="time"
            pl={1}
            color="blackAlpha.600"
            fontWeight="normal"
            noOfLines={1}
            fontSize="xs"
            cursor="default"
            mt={-0.5}
          >
            {dayjs(data.post.createAt).format('DD MMM YYYY')}
          </Text>
        </Flex>
      </Flex>
      <Box pl={12} mt={2}>
        {/* Title */}
        <Link href={postLink}>
          <Heading
            id="post-title"
            as="h2"
            size="md"
            color="blackAlpha.900"
            fontWeight="medium"
            lineHeight="26px"
            _hover={{
              color: 'twitter.600',
            }}
          >
            {data.post.title}
          </Heading>
        </Link>
        {/* Tags */}
        <Wrap mt={1} spacing={0} ml={-3}>
          {data.post.tags.map((val: any, index: number) => (
            <WrapItem key={index} mb={0}>
              <Link href={'/t/' + val.tag}>
                <Button
                  type="button"
                  fontWeight="normal"
                  variant="ghost"
                  size="sm"
                  px={2}
                >
                  <Icon
                    as={BiHash}
                    pos="relative"
                    top={0}
                    color="blackAlpha.500"
                    fontWeight="normal"
                  />
                  {val.tag}
                </Button>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
        {/* Reaction */}
        <Flex mt={4} ml={-3}>
          {data.post.countReaction > 0 && (
            <Box>
              <Button type="button" variant="ghost" size="sm">
                <Flex
                  fontSize="sm"
                  fontWeight="normal"
                  alignItems="center"
                  gap={1.5}
                >
                  <Icon as={AiOutlineHeart} w={4} h={4} />
                  <Text>{data.post.countReaction} รักเลย</Text>
                </Flex>
              </Button>
            </Box>
          )}
          <Box>
            <Button type="button" variant="ghost" size="sm">
              <Flex
                fontSize="sm"
                fontWeight="normal"
                alignItems="center"
                gap={1.5}
              >
                <Icon as={BiCommentDetail} w={4} h={4} />
                {data.post.countComment === 0 && <Text>แสดงความคิดเห็น</Text>}
                {data.post.countComment > 0 && (
                  <Text>{data.post.countLike} ความคิดเห็น</Text>
                )}
              </Flex>
            </Button>
          </Box>
          <Box ml="auto">
            <Button type="button" variant="ghost" size="sm">
              <Flex
                fontSize="sm"
                fontWeight="normal"
                alignItems="center"
                gap={1.5}
              >
                <Icon as={BiBookmark} w={4} h={4} />
              </Flex>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
