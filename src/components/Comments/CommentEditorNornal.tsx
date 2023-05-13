/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Avatar, Box, Button, Flex } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { marked } from 'marked';
import '../../../styles/editor.css';

const mapTokenAllow = (tokens: any) => {
  const token = tokens.map((token: any) => {
    console.log(token);
    if (!['paragraph', 'space'].includes(token.type)) {
      token.type = 'text';
      token.text = token.raw;
    }
    if (token.tokens) {
      token.tokens = mapTokenAllow(token.tokens);
    }
    return token;
  });

  return token;
};

const getAllowToken = (text: string) => {
  const lexer = new marked.Lexer();
  lexer.lex(text);
  const tokens = mapTokenAllow(lexer.tokens);

  return tokens;
};

const CommentEditorNormal = (props: any) => {
  const { isChildComment, pt } = props;
  const [previewContent, setPreviewContent] = useState<string>('');
  const [isDisabledBtnPreview, setIsDisabledBtnPreview] =
    useState<boolean>(true);
  const [isExpended, setIsExpended] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const editorRef = useRef<HTMLDivElement>(null);

  const onPreview = () => {
    const tokens = getAllowToken(text);
    const renderer = new marked.Renderer();
    renderer.paragraph = function (text) {
      text = text.replace(/\n+/g, '<br />');
      return '<p>' + text + '</p>';
    };
    // renderer.text = function (text) {
    //   text = text.replace(/ /g, '<br />');
    //   return text;
    // };

    const options = {
      renderer: renderer,
    };
    const html = marked.parser(tokens, options);
    if (html) {
      setPreviewContent(html);
    }
  };

  const onSetText = (e: React.FormEvent<HTMLElement>) => {
    const value = String(e.currentTarget.outerText);
    setText(value);
    setIsDisabledBtnPreview(!value.length);
  };

  useEffect(() => {
    if (isPreview) onPreview();
  }, [isPreview]);

  return (
    <Box test-id="comment">
      <Flex direction="row" gap={2}>
        {isChildComment && (
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
              borderColor="transparent"
              width={2}
              zIndex={0}
            />
          </Box>
        )}
        <Flex direction="column" alignItems="center">
          <Box pt={pt}>
            <Avatar
              mt={2.5}
              name="Test"
              src={
                'https://res.cloudinary.com/practicaldev/image/fetch/s--7fPr9eUD--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/291763/67acdcdc-2d99-4098-b8bc-af5a3b89a590.jpg'
              }
              w={8}
              h={8}
            />
          </Box>
        </Flex>
        <Flex direction="column" gap={1} flex={1} pt={pt}>
          <Box
            borderRadius="xl"
            border="2px"
            borderColor="gray.100"
            borderStyle="solid"
            height="auto"
            _focusWithin={{
              border: 2,
              borderColor: 'twitter.500',
              borderStyle: 'solid',
            }}
          >
            <Box p={4} pr={2} display={!isPreview ? 'block' : 'none'}>
              <Box
                ref={editorRef}
                id="editorRef"
                role="textbox"
                pr={1}
                width="full"
                contentEditable
                placeholder="เขียนความคิดเห็นหน่อยสิ 😝"
                onFocus={() => setIsExpended(true)}
                border={0}
                minHeight={100}
                maxHeight={320}
                overflowY="scroll"
                onInput={(e: React.FormEvent<HTMLElement>) => onSetText(e)}
                resize="none"
                borderColor="transparent"
                wordBreak="break-word"
                _focusVisible={{
                  border: 0,
                  borderColor: 'transparent',
                  outline: 'none',
                }}
              />
            </Box>

            {isPreview && (
              <Box
                p={4}
                dangerouslySetInnerHTML={{ __html: previewContent }}
                wordBreak="break-word"
              />
            )}
          </Box>
          {isExpended && (
            <Flex gap={2} mt={1}>
              <Button size="md" colorScheme="twitter" isDisabled={!text.length}>
                ตกลง
              </Button>
              <Button
                size="md"
                colorScheme="gray"
                isDisabled={isDisabledBtnPreview}
                onClick={() => setIsPreview((prev) => !prev)}
              >
                {isPreview ? 'กลับไปแก้ไข' : 'พรีวิว'}
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CommentEditorNormal;
