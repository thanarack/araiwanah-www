import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import CommentComponent from './Comment';
import CommentEditor from './CommentEditor';

const PostComment = (props: any) => {
  const data = new Array(
    {
      id: '1',
      userAvatar:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
      userName: 'Michael Tharrington',
      userId: 'sdadas848qwdqwd',
      createdAt: '2019-07-04 22:00:00',
      comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
      totalLikeCount: 0,
      totalReplyCount: 0,
      subComments: [
        {
          id: '3',
          parentId: '1',
          userAvatar:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
          userName: 'Michael Tharrington',
          userId: 'sdadas848qwdqwd',
          createdAt: '2019-07-04 22:00:00',
          comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
          totalLikeCount: 0,
          totalReplyCount: 0,
        },
        {
          id: '3',
          parentId: '1',
          userAvatar:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
          userName: 'Michael Tharrington',
          userId: 'sdadas848qwdqwd',
          createdAt: '2019-07-04 22:00:00',
          comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
          totalLikeCount: 0,
          totalReplyCount: 0,
        },
        {
          id: '5',
          parentId: '1',
          userAvatar:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
          userName: 'Michael Tharrington',
          userId: 'sdadas848qwdqwd',
          createdAt: '2019-07-04 22:00:00',
          comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
          totalLikeCount: 0,
          totalReplyCount: 0,
        },
      ],
    },
    {
      id: '2',
      userAvatar:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
      userName: 'Michael Tharrington',
      userId: 'sdadas848qwdqwd',
      createdAt: '2023-04-19 22:00:00',
      comment: `<p>I was able to quit my job and create a new and successful company in 3 days :D</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
      totalLikeCount: 0,
      totalReplyCount: 0,
      subComments: [
        {
          id: '8',
          parentId: '1',
          userAvatar:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
          userName: 'Michael Tharrington',
          userId: 'sdadas848qwdqwd',
          createdAt: '2019-07-04 22:00:00',
          comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
          totalLikeCount: 0,
          totalReplyCount: 0,
        },
      ],
    },
    {
      id: '6',
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
      <Box mt={4}>
        <CommentEditor />
      </Box>
      <Flex mt={4} direction="column">
        {data.map((val, key) => (
          <>
            <CommentComponent
              key={key}
              data={val}
              showMainLeftLine
              pt={key === 0 ? 0 : 2}
            />
            {val.subComments.length > 0 && (
              <Box>
                <Flex direction="column">
                  {val.subComments.map((val2, key) => (
                    <CommentComponent
                      key={key}
                      data={val2}
                      showMainLeftLine={key + 1 < val.subComments.length}
                      pt={2}
                    />
                  ))}
                </Flex>
                <Button
                  ml="24"
                  pl={2}
                  mt={2}
                  size="sm"
                  variant="ghost"
                  color="gray.500"
                  _hover={{
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  }}
                  _active={{ backgroundColor: 'transparent' }}
                >
                  แสดงความเห็นเพิ่มเติม
                </Button>
              </Box>
            )}
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default PostComment;
