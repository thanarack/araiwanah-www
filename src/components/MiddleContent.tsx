'use client';

import { Box } from '@chakra-ui/react';
import NavigationRelevant from './NavigationRelevant';
import PostLists from './PotsLists';

export default function MiddleContent() {
  return (
    <Box>
      <NavigationRelevant />
      <PostLists mt={2}/>
    </Box>
  );
}
