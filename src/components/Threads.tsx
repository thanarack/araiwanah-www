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

export default function Threads(props: any) {
  const { title, mt } = props;

  const [data, setData] = useState([]);

  return (
    <Box
      background="whiteAlpha.600"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
      mt={mt}
    >
      <Heading as="h5" size="md" p={4}>
        <Icon
          as={BiHash}
          pos="relative"
          top={1}
          color="blackAlpha.900"
          fontWeight="normal"
        />
        {title}
      </Heading>
      <Box>
        {data.length === 0 && (
          <Flex px={4} mb={6} alignItems="center" direction="column">
            <Text textAlign="center" py={4}>
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
                <Link href={'/' + val.user.slug + '/' + val.post.slug}>
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
