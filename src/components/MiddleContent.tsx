import { Box } from '@chakra-ui/react';
import NavigationRelevant from './NavigationRelevant';
import PostLists from './PotsLists';

export default function MiddleContent() {
  return (
    <Box>
      <NavigationRelevant />
      <PostLists mt={1.5}/>
    </Box>
  );
}
