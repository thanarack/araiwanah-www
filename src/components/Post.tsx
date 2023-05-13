'use client';

import {
  Avatar,
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
import { useRouter } from 'next/navigation';

export default function Post(props: any) {
  const { data } = props;

  const router = useRouter();

  const userUrl = '/u/' + data.user.slug;
  const postLink = '/p/' + data.post.postId;

  const onComment = () => {
    router.push(postLink + '#post-comment');
  };

  return (
    <Box boxShadow="xs" borderRadius="md" background="white" p={5}>
      <Flex gap={2}>
        <Link href={userUrl}>
          <Avatar
            src={data.user.picture}
            title={data.user.name}
            width={9}
            height={9}
          />
        </Link>
        <Flex direction="column" alignContent="space-around" mt={-1}>
          <Link href={userUrl}>
            <Button px={1} py={1} type="button" variant="link">
              <Text as="span" color="gray.600" fontSize="sm">
                {data.user.name}
              </Text>
            </Button>
          </Link>
          <Text
            as="time"
            pl={1}
            color="gray.400"
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
        <Wrap mt={1} spacing={0} ml={-2.5}>
          {data.post.tags.map((val: any, index: number) => (
            <WrapItem key={index} mb={0} color="gray.900">
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
                  <Text>{data.post.countReaction} ถูกใจ</Text>
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
                onClick={() => onComment()}
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
