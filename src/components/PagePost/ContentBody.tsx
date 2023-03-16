'use client';

import { Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import PostMarkDown from './PostMarkdown';
import PostUser from './PostUset';

export default function ContentBody() {
  const postPage = useSelector((a: RootState) => a.postPage);
  const getContent = postPage.posts.length
    ? postPage.posts.find((v) => v.id === 'test')
    : null;

  return (
    <Box
      as="main"
      boxShadow="xs"
      borderRadius="md"
      background="white"
      p={5}
      minH="300px"
    >
      <Box px={6}>
        <PostUser />
        <Heading as="h2" size="lg" mt={4} mb={4}>
          How JWTs Could Be Dangerous and Its Alternatives
        </Heading>
        <PostMarkDown content={getContent?.content} />
      </Box>
    </Box>
  );
}
