'use client';

import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { BiHash } from 'react-icons/bi';
import { MockPots } from '../../configs/constant';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FollowerThreads(props: any) {
  const { title, mt } = props;
  const router = useRouter();

  const [data, setData] = useState([
    {
      id: '1',
      username: 'Thanarak Chaisri',
      slug: 'bank',
      image: 'https://bit.ly/sage-adebayo',
    },
    {
      id: '1',
      username: 'Thanarak Chaisri',
      slug: 'bank',
      image: 'https://bit.ly/sage-adebayo',
    },
    ,
    {
      id: '1',
      username: 'Thanarak Chaisri',
      slug: 'bank',
      image: 'https://bit.ly/sage-adebayo',
    },
    {
      id: '1',
      username: 'Thanarak Chaisri',
      slug: 'bank',
      image: 'https://bit.ly/sage-adebayo',
    },
    {
      id: '1',
      username: 'Thanarak Chaisri',
      slug: 'bank',
      image: 'https://bit.ly/sage-adebayo',
    },
  ]);

  const onClickView = (userSlug: any) => {
    router.push('/u/' + userSlug);
  };

  const onClickFollow = (e: any) => {
    console.log('2');
    e.stopPropagation();
  };

  return (
    <Box
      background="whiteAlpha.600"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
      top={20}
      position="sticky"
      mt={mt}
    >
      <Heading as="h5" size="md" p={4}>
        {title}
      </Heading>
      <Box>
        {data.length > 0 && (
          <List>
            {data.map((val: any, index: number) => (
              <ListItem
                key={index}
                px={4}
                py={2}
                role="button"
                onClick={() => onClickView(val.slug)}
                _hover={{ background: 'gray.100' }}
              >
                <Flex gap={2} alignItems="center">
                  <Box
                    alignSelf="center"
                    justifySelf="center"
                    justifyItems="center"
                  >
                    <Avatar name={val.username} src={val.image} w={9} h={9} />
                  </Box>
                  <Flex direction="column" flex={1}>
                    <Text
                      fontWeight="semibold"
                      mt={0.5}
                      fontSize="sm"
                      color="gray.600"
                      noOfLines={1}
                    >
                      {val.username}
                    </Text>
                    <Text
                      fontSize="sm"
                      noOfLines={1}
                      mt={-0.5}
                      color="gray.400"
                    >
                      @{val.slug}
                    </Text>
                  </Flex>
                  <Box>
                    <Button
                      onClick={onClickFollow}
                      role="button"
                      colorScheme="twitter"
                      variant="outline"
                      size="sm"
                    >
                      ติดตาม
                    </Button>
                  </Box>
                </Flex>
              </ListItem>
            ))}
          </List>
        )}
        <Box px={4} py={2} _hover={{ background: 'gray.100' }}>
          <Link href="/connect_people">
            <Button
              variant="link"
              justifyContent="start"
              colorScheme="gray"
              fontSize="sm"
              fontWeight="normal"
              width="full"
            >
              แสดงเพิ่มเติม
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
