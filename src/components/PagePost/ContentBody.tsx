'use client';

import { Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import PostComment from '../Comments/PostComment';
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
      minH="300px"
    >
      <Box p={9} borderBottom="1px" borderColor="blackAlpha.200">
        <PostUser />
        <Heading as="h2" size="lg" mt={4} mb={4}>
          How JWTs Could Be Dangerous and Its Alternatives
        </Heading>
        <PostMarkDown content={getContent?.content} />
      </Box>
      <Box p={9}>
        <Box id="post-comment">
          <PostComment />
        </Box>
      </Box>
    </Box>
  );
}
