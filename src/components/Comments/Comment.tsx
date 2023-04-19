import dayjs from 'dayjs';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';

const fromDay = (data: string) => {
  const date = dayjs(data);
  const now = dayjs();
  if (now.diff(date, 'year') > 1) {
    return date.format('D MMM YYYY');
  }
  return date.fromNow();
};

const CommentComponent = (props: any) => {
  const { data } = props;
  return (
    <Box test-id="comment">
      <Flex direction="row" gap={2}>
        <Box>
          <Avatar
            mt={2.5}
            name={data.userName}
            src={data.userAvatar}
            w={8}
            h={8}
          />
        </Box>
        <Flex direction="column" gap={1} flex={1}>
          <Box borderRadius="xl" border="1px" borderColor="blackAlpha.200">
            <Box p={4}>
              <Flex gap={2}>
                <Text fontSize="sm" fontWeight="semibold">
                  {data.userName}
                </Text>
                <Text color="blackAlpha.600" fontWeight="normal" fontSize="sm">
                  {fromDay(data.createdAt)}
                </Text>
              </Flex>
              <Box mt={2} fontSize="lg">
                <Box
                  as="div"
                  id="content-post"
                  className="markdown-body markdown-light"
                  dangerouslySetInnerHTML={{ __html: data.comment }}
                />
              </Box>
            </Box>
          </Box>
          <Flex gap={2}>
            <Button leftIcon={<AiOutlineHeart />} size="sm" variant="ghost">
              ถูกใจ
            </Button>
            <Button leftIcon={<BiCommentDetail />} size="sm" variant="ghost">
              ตอบกลับ
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CommentComponent;
