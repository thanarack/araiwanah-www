'use client';

import { Container, Grid, GridItem } from '@chakra-ui/react';
import AsideLeft from '../../src/components/AsideLeft';
import Footer from '../../src/components/Footer';
import Navbar from '../../src/components/Navbar';
import Threads from '../../src/components/Threads';

export default function LayoutHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Container as="main" maxWidth="1280" mt={20}>
        <Grid templateColumns="repeat(10, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <AsideLeft />
          </GridItem>
          <GridItem colSpan={8}>
            <Grid templateColumns="repeat(12, 1fr)" gap={4}>
              <GridItem colSpan={8}>{children}</GridItem>
              <GridItem colSpan={4}>
                <Threads title="พูดคุยสอบถาม" tag={['พูดคุยสอบถาม']} />
                <Threads
                  title="หวยเด็ด / ลอตเตอรี่"
                  tag={['หวยเด็ด', 'หวย', 'ลอตเตอรี่']}
                  mt={4}
                />
                <Threads
                  title="รับสมัครงาน"
                  tag={['รับสมัครงาน', 'งานราชการ', 'งานเอกชน']}
                  mt={4}
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
