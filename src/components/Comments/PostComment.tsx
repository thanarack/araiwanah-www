import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { Posts } from '../../../configs/constant';
import CommentComponent from './Comment';
import CommentChild from './CommentChild';
import CommentEditorNormal from './CommentEditorNornal';

const PostComment = (props: any) => {
  const [comments, setComments] = useState<any[]>(Posts);

  return (
    <Box test-id="box-comment">
      <Heading as="h3" size="md">
        ความเห็น (29)
      </Heading>
      <Box mt={4}>
        <CommentEditorNormal />
      </Box>
      <Flex mt={4} direction="column">
        {comments.map((val, key) => (
          <>
            <CommentComponent
              key={key}
              data={val}
              showMainLeftLine
              pt={!key ? 0 : 2}
            />
            {val.totalReplyCount > 0 && (
              <CommentChild postId={val.id} totalReplyCount={val.totalReplyCount} />
            )}
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default PostComment;
