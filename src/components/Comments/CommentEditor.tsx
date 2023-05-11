'use client';

import { Avatar, Box, Flex } from '@chakra-ui/react';
import { StrictMode, useState } from 'react';
import dynamic from 'next/dynamic';
import MdEditor from 'md-editor-rt';

import 'md-editor-rt/lib/style.css';

// const DynamicMdEditor = dynamic(() => import('md-editor-rt'), {
//   loading: () => <p>Loading...</p>,
// });

const CommentEditor = () => {
  const [text, setText] = useState('# Hello Editor');

  return (
    <Box test-id="comment">
      <Flex direction="row" gap={2}>
        <Flex direction="column" alignItems="center">
          <Box>
            <Avatar
              mt={2.5}
              name="Test"
              src={
                'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg'
              }
              w={8}
              h={8}
            />
          </Box>
        </Flex>
        <Flex direction="column" gap={1} flex={1}>
          <Box borderRadius="xl" border="1px" borderColor="gray.100">
            <Box p={4}>
              <StrictMode>
                <MdEditor
                  modelValue={text}
                  language="en-US"
                  onChange={setText}
                  toolbars={[]}
                  noUploadImg={true}
                  maxLength={10000}
                  preview={false}
                />
              </StrictMode>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CommentEditor;
