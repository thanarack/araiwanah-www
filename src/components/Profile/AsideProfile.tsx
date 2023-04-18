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
import { ProfileListItems } from '../../../configs/constant';
import { BiHash } from 'react-icons/bi';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

export default function AsideProfile() {
  return (
    <>
      <Avatar />
      <UserInfo mt={4} />
      <List mt={4}>
        {ProfileListItems.map((val, index) => (
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
    </>
  );
}
