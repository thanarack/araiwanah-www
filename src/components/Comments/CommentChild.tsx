import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Comments } from '../../../configs/constant';
import ButtonCountComment from './ButtonCountComment';
import CommentComponent from './Comment';

interface ICommentChild {
  postId: string;
}

const CommentChild: React.FC<ICommentChild> = (props) => {
  const [comments, setComments] = useState<any[]>([]);
  const [hasMoreComments, setHasMoreComments] = useState<boolean>(true);

  const onFetchComment = () => {
    setComments(Comments);
    setHasMoreComments(true);
  };

  return (
    <Box>
      <Flex direction="column">
        {comments.map((val, key) => (
          <CommentComponent
            key={key}
            data={val}
            lastChildComment={key + 1 === comments.length}
            pt={2}
          />
        ))}
      </Flex>
      <ButtonCountComment
        hasMoreComments={hasMoreComments}
        onFetchComment={onFetchComment}
      />
    </Box>
  );
};

export default CommentChild;
