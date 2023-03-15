import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';

const PostUser = () => {
  return (
    <Box>
      <Flex gap={2}>
        <Image
          src="https://res.cloudinary.com/practicaldev/image/fetch/s---H7336Uk--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg"
          alt=""
          borderRadius="full"
          boxSize="36px"
        />
        <Flex direction="column" alignContent="space-around" mt={-0.5}>
          <Link href="/u/1">
            <Button
              background="transparent"
              px={1}
              py={1}
              h="auto"
              type="button"
            >
              <Text as="span" color="blackAlpha.700" fontSize="sm">
                Username
              </Text>
            </Button>
          </Link>
          <Text
            as="time"
            lineHeight={1.5}
            pl={1}
            color="blackAlpha.600"
            noOfLines={1}
            fontSize="xs"
            cursor="default"
            fontWeight="medium"
          >
            โพสต์เมื่อวันที่ {dayjs(new Date()).format('DD MMM YYYY')}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostUser;
