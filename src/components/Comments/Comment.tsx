import dayjs from 'dayjs';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import CommentEditorNormal from './CommentEditorNornal';
import Link from 'next/link';

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
  lastChildComment?: boolean;
}

const CommentComponent: React.FC<IComment> = (props) => {
  const { data, showMainLeftLine, pt, lastChildComment } = props;
  return (
    <Box test-id="comment">
      <Flex direction="row" gap={2}>
        {data.parentId && (
          <Box>
            <Box
              height={9}
              width={10}
              borderBottom={2}
              borderLeft={2}
              borderStyle="solid"
              borderColor="gray.100"
              ml={4}
              borderBottomLeftRadius={12}
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
          </Box>
        )}
        <Flex direction="column" alignItems="center">
          <Box pt={pt}>
            <Link href="/u/1">
              <Avatar
                mt={2.5}
                name={data.userName}
                src={data.userAvatar}
                w={8}
                h={8}
              />
            </Link>
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
              <Flex gap={2} align="center">
                <Link href="/u/1">
                  <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                    {data.userName}
                  </Text>
                </Link>
                <Text color="gray.400">•</Text>
                <Text color="gray.400" fontWeight="normal" fontSize="xs">
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

      {lastChildComment && (
        <Box width="full">
          <CommentEditorNormal isChildComment pt={2} />
        </Box>
      )}
    </Box>
  );
};

CommentComponent.defaultProps = {
  showMainLeftLine: true,
  lastChildComment: false,
};

export default CommentComponent;
