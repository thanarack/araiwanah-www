'use client';

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import Footer from '../../../src/components/Footer';
import Navbar from '../../../src/components/Navbar';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

export default function LoginPage({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const state = searchParams?.get('state');

  return (
    <>
      <Container as="main" maxWidth={['680']} py={26}>
        <Flex
          background="whiteAlpha.600"
          borderRadius="md"
          boxShadow="xs"
          overflow="hidden"
          p={12}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h2" size="lg">
            Exolog ยินดีต้อนรับ
          </Heading>
          <Text mt={2}>
            ชุมชนเพื่อการแบ่งปันเรื่องราวต่างๆ ที่เกิดขึ้นในประเทศไทย
          </Text>
          {!state && <LoginComponent />}
          {state === 'new-user' && <RegisterComponent />}
        </Flex>
      </Container>
    </>
  );
}
