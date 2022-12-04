'use client';

import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box mb="auto" as="footer" mt={20} background="blackAlpha.50" py={16}>
      <Container maxWidth="1280">
        <Flex gap={2} direction="column" alignItems="center">
          <Text>
            <Link href="/">
              <Text color="twitter.600" fontWeight="semibold" as="span" mr={1}>
                @Araiwanah | อะไรวะน๊ะ
              </Text>
            </Link>
            🤔😮 &#8213; แอปพลิเคชันชุมชนสำหรับแบ่งปันเรื่องราว
            มาร่วมเป็นส่วนหนึ่งกับเรากันเถอะ
          </Text>
          <Text textAlign="center">
            เนื้อหาที่ถูกสร้างโดย
            <Link href="/policy">
              <Text color="twitter.600" fontWeight="semibold" as="span" mr={1}>
                ชุมชน
              </Text>
            </Link>
            หากพบเห็นเนื้อหาที่ละเมิดลิขสิทธิ์สามารถกดรายงานได้ทันที <br />
          </Text>
          <Text>
            พัฒนาด้วย
            <Link href="https://nextjs.org" target="_blank">
              <Text color="twitter.600" fontWeight="semibold" as="span" mx={1}>
                Next.js
              </Text>
            </Link>
            และ
            <Link href="https://reactjs.org" target="_blank">
              <Text color="twitter.600" fontWeight="semibold" as="span" mx={1}>
                React.js
              </Text>
            </Link>
            , Inspiration template by
            <Link href="https://dev.to" target="_blank">
              <Text color="twitter.600" fontWeight="semibold" as="span" mx={1}>
                Dev.to
              </Text>
            </Link>
            🤔😮 &#xA9; 2022.
          </Text>
          <Text fontSize="3xl">🍀</Text>
        </Flex>
      </Container>
    </Box>
  );
}
