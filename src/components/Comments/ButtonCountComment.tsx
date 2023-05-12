import { Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

interface IButtonCountComment {
  hasMoreComments?: boolean;
  onFetchComment: () => void;
}

const ButtonCountComment: React.FC<IButtonCountComment> = (props) => {
  const { hasMoreComments, onFetchComment } = props;

  const [isShow, setIsShow] = useState<boolean>(false);

  const isDisplayComment = isShow && hasMoreComments

  const onHandleShowComment = () => {
    setIsShow(true);
    onFetchComment();
  };

  if (!hasMoreComments) return <Box mt={2} />;

  return (
    <Box test-id="button-count">
      <Flex direction="row" gap={2}>
        <Flex direction="column">
          <Box
            height={10}
            width={10}
            borderBottom={2}
            borderLeft={2}
            borderStyle="solid"
            borderColor={!isShow ? 'gray.100' : 'transparent'}
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
            borderColor="transparent"
            width={2}
            zIndex={0}
          />
        </Flex>
        {isDisplayComment && (
          <Flex direction="column" gap={1} pt={2}>
            <Button
              ml={-2}
              role="button"
              size="sm"
              variant="ghost"
              color="gray.500"
              _hover={{
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }}
              _active={{ backgroundColor: 'transparent' }}
              onClick={onFetchComment}
            >
              แสดงความเห็นเพิ่มเติม
            </Button>
          </Flex>
        )}
        {!isDisplayComment && (
          <Flex direction="column" gap={1} pt={2}>
            <Button
              ml={-2}
              role="button"
              size="sm"
              variant="ghost"
              color="gray.500"
              _hover={{
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              }}
              _active={{ backgroundColor: 'transparent' }}
              onClick={onHandleShowComment}
            >
              การตอบกลับ 1 รายการ
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

ButtonCountComment.defaultProps = {
  hasMoreComments: false,
};

export default ButtonCountComment;
