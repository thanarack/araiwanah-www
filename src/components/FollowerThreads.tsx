'use client';

import { useState } from 'react';
import {
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

export default function FollowerThreads(props: any) {
  const { title, mt } = props;

  const [data, setData] = useState([]);

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
              <ListItem key={index}>
                <Link href={'/p/' + val.post.postId}>
                  <Flex
                    direction="column"
                    py={4}
                    px={4}
                    _hover={{ background: 'whiteAlpha.900' }}
                  >
                    <Text>{val.post.title}</Text>
                    <Box mt={1}>
                      {val.post.countComment > 0 && (
                        <Text>{val.post.countComment} ความเห็น</Text>
                      )}
                      {val.post.countComment === 0 && (
                        <Text
                          background="orange.200"
                          width="fit-content"
                          fontSize="sm"
                          borderRadius="md"
                          px={1.5}
                          py={0.5}
                          h="auto"
                        >
                          ใหม่
                        </Text>
                      )}
                    </Box>
                  </Flex>
                </Link>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}
