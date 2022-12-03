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
import { GoCommentDiscussion } from 'react-icons/go';
import { BiHash } from 'react-icons/bi';

export default function Post(props: any) {
  const { data } = props;

  const userUrl = '/' + data.user.slug;
  const postLink = '/' + data.user.slug + '/' + data.post.slug;

  return (
    <Box
      boxShadow="xs"
      borderRadius="md"
      background="white"
      p={5}
    >
      <Flex gap={2}>
        <Image
          src={data.user.picture}
          alt={data.user.name}
          borderRadius="full"
          boxSize="32px"
        />
        <Flex direction="column" alignContent="space-around" mt={-1.5}>
          <Link href={userUrl} />
          <Button background="transparent" px={1} py={1} h="auto" type="button">
            <Text as="span" color="blackAlpha.700" fontSize="sm">
              {data.user.name}
            </Text>
          </Button>
          <Text
            as="time"
            lineHeight={1.5}
            pl={1}
            color="blackAlpha.600"
            noOfLines={1}
            fontSize="xs"
            cursor="default"
          >
            {dayjs(data.post.createAt).format('DD MMM YYYY')}
          </Text>
        </Flex>
      </Flex>
      <Box pl="44px" mt={1.5}>
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
        <Wrap mt={1} spacing={0}>
          {data.post.tags.map((val: any, index: number) => (
            <WrapItem key={index} mb={0}>
              <Link href={'/t/' + val.tag}>
                <Button
                  type="button"
                  fontWeight="normal"
                  fontSize="sm"
                  color="blackAlpha.700"
                  background="transparent"
                  borderWidth="1px"
                  borderColor="transparent"
                  px={1.5}
                  py={1.5}
                  h="auto"
                  _hover={{
                    background: 'blackAlpha.100',
                    borderWidth: '1px',
                    borderColor: 'blackAlpha.300',
                  }}
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
        <Flex mt={2} ml={-1}>
          {data.post.countReaction > 0 && (
            <Box>
              <Button
                type="button"
                background="transparent"
                h="auto"
                px={3}
                py={1.5}
                _hover={{
                  background: 'blackAlpha.50',
                }}
              >
                <Flex
                  color="blackAlpha.700"
                  fontSize="sm"
                  fontWeight="normal"
                  alignItems="center"
                  gap={2}
                >
                  <Icon as={AiOutlineHeart} w={5} h={5} />
                  <Text>{data.post.countReaction} ความสนใจ</Text>
                </Flex>
              </Button>
            </Box>
          )}
          <Box>
            <Button
              type="button"
              background="transparent"
              h="auto"
              px={3}
              py={1.5}
              _hover={{
                background: 'blackAlpha.50',
              }}
            >
              <Flex
                color="blackAlpha.700"
                fontSize="sm"
                fontWeight="normal"
                alignItems="center"
                gap={2}
              >
                <Icon as={GoCommentDiscussion} w={5} h={5} />
                {data.post.countComment === 0 && <Text>แสดงความคิดเห็น</Text>}
                {data.post.countComment > 0 && (
                  <Text>{data.post.countLike} ความคิดเห็น</Text>
                )}
              </Flex>
            </Button>
          </Box>
          <Box ml="auto">
            <Button
              type="button"
              background="transparent"
              h="auto"
              px={0.5}
              py={1.5}
              title="บันทึกไว้อ่านภายหลัง"
              _hover={{
                background: 'blackAlpha.50',
              }}
            >
              <Flex
                color="blackAlpha.600"
                fontSize="sm"
                fontWeight="normal"
                alignItems="center"
                gap={2}
              >
                <Icon as={BiBookmark} w={5} h={5} />
              </Flex>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
