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
import Link from 'next/link';
import { MockPots } from '../../../configs/constant';

export default function AsideSimilarPost(props: any) {
  const { mt } = props;
  const [data, setData] = useState(MockPots);

  return (
    <Box
      background="whiteAlpha.600"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
      mt={mt}
    >
      <Box>
        <Heading as="h5" size="md" p={4}>
          {/* <Icon
            as={BiHash}
            pos="relative"
            top={1}
            color="blackAlpha.900"
            fontWeight="normal"
          /> */}
          โพสต์ที่คล้ายกัน
        </Heading>
      </Box>
      <Box>
        {data.length === 0 && (
          <Flex px={4} mb={6} alignItems="center" direction="column">
            <Text textAlign="center" py={4} color="blackAlpha.600">
              อุ๊ยย.. 🤭 ดูเหมือนว่ายังไม่มีโพสต์
              <br /> มาสร้างโพสต์แรกของคุณกันเถอะ 📝
            </Text>
            <Link href="/new">
              <Button colorScheme="twitter" variant="solid" size="sm">
                สร้างโพสต์
              </Button>
            </Link>
          </Flex>
        )}
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
                    borderBottom="1px"
                    borderColor="gray.200"
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
