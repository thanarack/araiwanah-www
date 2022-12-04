'use client';

import {
  List,
  ListIcon,
  ListItem,
  Icon,
  Box,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AsideListItems, TagsPopular } from '../../configs/constant';
import { BiHash } from 'react-icons/bi';
import RegisterPop from './RegisterPop';

export default function AsideLeft() {
  return (
    <>
      <RegisterPop mb={4}/>
      <List>
        {AsideListItems.map((val, index) => (
          <ListItem key={index} role="group">
            <Link href={val.link}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                py={2}
                pl={2}
                _hover={{
                  borderRadius: 'md',
                  background: 'whiteAlpha.900',
                  color: 'twitter.600',
                }}
              >
                <ListIcon color="gray.500" as={val.icon} w="5" h="5" />
                <Text _groupHover={{ textDecoration: 'underline' }}>
                  {val.title}
                </Text>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box mt={4}>
        <Heading as="h5" size="sm">
          แท็คยอดนิยม
        </Heading>
        <Box
          h="270px"
          overflow="hidden"
          overflowY="scroll"
          mt={1.5}
          css={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'RGBA(0, 0, 0, 0.08)',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'RGBA(0, 0, 0, 0.24)',
              borderRadius: '10px',
            },
          }}
        >
          <List>
            {TagsPopular.map((val, index) => (
              <ListItem key={index}>
                <Link href={'/t/' + val.tag}>
                  <Flex
                    pl={2}
                    py={2}
                    alignItems="center"
                    _hover={{
                      borderRadius: 'md',
                      background: 'whiteAlpha.900',
                      color: 'twitter.600',
                    }}
                  >
                    <Icon as={BiHash} pos="relative" top={0} />
                    {val.tag}
                  </Flex>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}
