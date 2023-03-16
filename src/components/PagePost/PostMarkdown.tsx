'use client';

import { Box } from '@chakra-ui/react';
import 'github-markdown-css/github-markdown-light.css'

const PostMarkDown = (props: any) => {
  const content = props.content;
  return (
    <Box
      as="div"
      id="content-post"
      className="markdown-body markdown-light"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostMarkDown;
