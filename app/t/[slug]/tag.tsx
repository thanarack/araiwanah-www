'use client';

import { Box, Heading } from '@chakra-ui/react';
import LayoutHome from '../../../src/components/LayoutHome';
import NavigationRelevant from '../../../src/components/NavigationRelevant';
import PostLists from '../../../src/components/PotsLists';

const Tag = (props: any) => {
  const { tagId } = props;

  return (
    <LayoutHome>
      <Box>
        <Heading as="h5" size="md" color="purple.500">
          #{decodeURI(tagId)}
        </Heading>
        <Box mt={4}>
          <NavigationRelevant isTag />
          <PostLists mt={2} />
        </Box>
      </Box>
    </LayoutHome>
  );
};

export default Tag;
