'use client';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function RegisterPop(props: any) {
  const { mt, mb } = props;

  return (
    <Box
      mt={mt}
      mb={mb}
      background="whiteAlpha.600"
      borderRadius="md"
      boxShadow="xs"
      overflow="hidden"
    >
      <Box p={4}>
        <Box>
          <Heading as="h4" size="md">
            สวัสดี ! 😁 🥳 ต้อนรับสู่ @อะไรวะน๊ะ
            ชุมชนสำหรับแบ่งปันเรื่องราว
          </Heading>
          <Text mt={3}>
            แพลตฟอร์มที่ให้ผู้ใช้โพสต์พูดคุยสอบถาม / ขอความช่วยเหลือ /
            บทความหรือประกาศ
          </Text>
        </Box>
        <Flex direction="column" gap={1} mt={3}>
          <Link href="/enter/?state=new-user">
            <Button
              type="button"
              colorScheme="twitter"
              variant="outline"
              w="full"
              _hover={{
                background: 'twitter.500',
                color: 'white',
                textDecoration: 'underline',
                borderColor: 'twitter.500',
              }}
            >
              สร้างบัญชี
            </Button>
          </Link>
          <Link href="/enter/?state=new-user">
            <Button type="button" colorScheme="gray" variant="ghost" w="full">
              เข้าสู่ระบบ
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
