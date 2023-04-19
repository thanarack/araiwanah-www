import { Box, Flex, Heading } from '@chakra-ui/react';
import CommentComponent from './Comment';

const PostComment = (props: any) => {
  const data = new Array(
    {
      id: '1',
      postId: '',
      userAvatar:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
      userName: 'Michael Tharrington',
      userId: 'sdadas848qwdqwd',
      createdAt: '2019-07-04 22:00:00',
      comment: `<p>I was able to quit my job and create a new and successful company in 3 days :D</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
      totalLikeCount: 0,
      totalReplyCount: 0,
      subComments: [],
    },
    {
      id: '2',
      postId: '',
      userAvatar:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
      userName: 'Michael Tharrington',
      userId: 'sdadas848qwdqwd',
      createdAt: '2023-04-19 22:00:00',
      comment: `<p>I was able to quit my job and create a new and successful company in 3 days :D</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
      totalLikeCount: 0,
      totalReplyCount: 0,
      subComments: [],
    }
  );

  return (
    <Box test-id="box-comment">
      <Heading as="h3" size="lg">
        ความเห็น (29)
      </Heading>
      <Flex mt={4} gap={4} direction="column">
        {data.map((val, key) => (
          <CommentComponent key={key} data={val} />
        ))}
      </Flex>
    </Box>
  );
};

export default PostComment;
