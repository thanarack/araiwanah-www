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

interface IComment {
  data: any;
  showMainLeftLine?: boolean;
  pt?: number;
}

const CommentComponent: React.FC<IComment> = (props) => {
  const { data, showMainLeftLine, pt } = props;
  return (
    <Box test-id="comment">
      <Flex direction="row" gap={2}>
        {data.parentId && (
          <Flex direction="column">
            <Box
              height={10}
              width={10}
              borderBottom={2}
              borderLeft={2}
              borderStyle="solid"
              borderColor="gray.100"
              ml={4}
              borderBottomLeftRadius={10}
              zIndex={2}
            />
            <Box
              height="100%"
              ml={4}
              mt={-2}
              borderLeft={2}
              borderStyle="solid"
              borderColor={showMainLeftLine ? 'gray.100' : 'transparent'}
              width={2}
              zIndex={0}
            />
          </Flex>
        )}
        <Flex direction="column" alignItems="center">
          <Box pt={pt}>
            <Avatar
              mt={2.5}
              name={data.userName}
              src={data.userAvatar}
              w={8}
              h={8}
            />
          </Box>
          {data.subComments && data.subComments.length > 0 && (
            <Box
              height="100%"
              ml={2}
              borderLeft={2}
              borderStyle="solid"
              borderColor="gray.100"
              width={2}
            />
          )}
        </Flex>
        <Flex direction="column" gap={1} flex={1} pt={pt}>
          <Box borderRadius="xl" border="2px" borderColor="gray.100">
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
            <Button
              leftIcon={<AiOutlineHeart />}
              size="sm"
              variant="ghost"
              _hover={{
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }}
              _active={{ backgroundColor: 'transparent' }}
            >
              ถูกใจ
            </Button>
            <Button
              leftIcon={<BiCommentDetail />}
              size="sm"
              variant="ghost"
              _hover={{
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }}
              _active={{ backgroundColor: 'transparent' }}
            >
              ตอบกลับ
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

CommentComponent.defaultProps = {
  showMainLeftLine: true,
};

export default CommentComponent;
