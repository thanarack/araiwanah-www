'use client';

import { Avatar, Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import DynamicMdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import '../../../styles/editor.css';

const rendererCustom = {
  heading(text: string, level: number) {
    return '#'.repeat(level) + ' ' + text + '\n';
  },
  newLineText(text: string) {
    return `<p>${text}</p>`;
  },
  normalText(text: string) {
    return text;
  },
};

DynamicMdEditor.config({
  markedRenderer(renderer: any) {
    renderer.heading = rendererCustom.heading;
    renderer.code = rendererCustom.normalText;
    renderer.blockquote = rendererCustom.normalText;
    renderer.html = rendererCustom.normalText;
    renderer.hr = rendererCustom.normalText;
    renderer.list = rendererCustom.normalText;
    renderer.listitem = rendererCustom.normalText;
    renderer.checkbox = rendererCustom.normalText;
    renderer.BiParagraph = rendererCustom.normalText;
    renderer.table = rendererCustom.normalText;
    renderer.tablerow = rendererCustom.normalText;
    renderer.tablecell = rendererCustom.normalText;
    renderer.strong = rendererCustom.normalText;
    renderer.em = rendererCustom.normalText;
    renderer.codespan = rendererCustom.normalText;
    renderer.br = rendererCustom.normalText;
    renderer.del = rendererCustom.normalText;
    renderer.link = rendererCustom.normalText;
    renderer.image = rendererCustom.normalText;
    renderer.text = rendererCustom.normalText;
    renderer.sup = rendererCustom.normalText;

    return renderer;
  },
});

const CommentEditor = () => {
  const [previewContent, setPreviewContent] = useState<string>('');
  const [isDisabledBtnPreview, setIsDisabledBtnPreview] =
    useState<boolean>(true);
  const [isExpended, setIsExpended] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [editorHeight, setEditorHeight] = useState<number>(0);

  const onHtmlChanged = (html: string) => {
    if (html) {
      setPreviewContent(encodeURI(html));
      setIsDisabledBtnPreview(false);
    }
  };

  const onSetText = (value: string) => {
    setText(value);
    setIsDisabledBtnPreview(true);
    const getElText = document.querySelector('#dynamicMdEditor-textarea');
    const getHeight = getElText?.scrollHeight ?? 0;
    if (getHeight < 300) {
      setEditorHeight(getHeight);
    }
  };

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
          <Box
            borderRadius="xl"
            border="2px"
            borderColor="gray.100"
            _focusWithin={{
              border: 2,
              borderColor: 'twitter.500',
              borderStyle: 'solid',
            }}
          >
            {!isPreview && (
              <DynamicMdEditor
                editorId="dynamicMdEditor"
                modelValue={text}
                language="en-US"
                onChange={onSetText}
                toolbars={[]}
                footers={[]}
                noUploadImg={true}
                maxLength={5000}
                preview={false}
                style={{ height: editorHeight }}
                onFocus={() => setIsExpended(true)}
                placeholder="เขียนความคิดเห็นหน่อยสิ 😝"
                toolbarsExclude={['bold']}
                onHtmlChanged={onHtmlChanged}
              />
            )}
            {isPreview && (
              <Box p={4} dangerouslySetInnerHTML={{ __html: previewContent }} />
            )}
          </Box>
          {isExpended && (
            <Flex gap={2} mt={1}>
              <Button size="md" colorScheme="twitter" isDisabled={!text}>
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

export default CommentEditor;
