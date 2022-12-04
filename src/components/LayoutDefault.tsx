'use client';

import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Box mt={20}>{children}</Box>
      <Footer />
    </>
  );
}
