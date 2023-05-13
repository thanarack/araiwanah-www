'use client';

import { Container, Grid, GridItem } from '@chakra-ui/react';
import AsideLeft from '../../src/components/AsideLeft';
import Footer from '../../src/components/Footer';
import Navbar from '../../src/components/Navbar';
import FollowerThreads from './FollowerThreads';
import Threads from './Threads';

export default function LayoutHome({
  children,
  isFollower,
}: {
  children: React.ReactNode;
  isFollower?: boolean;
}) {
  return (
    <>
      <Navbar />
      <Container as="main" maxWidth="1280" mt={20}>
        <Grid templateColumns="repeat(19, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <AsideLeft />
          </GridItem>
          <GridItem colSpan={10}>{children}</GridItem>
          <GridItem colSpan={5}>
            {isFollower && <FollowerThreads title="แนะนำผู้ใช้" mt={4} />}
            {!isFollower && (
              <Threads
                title="โพสต์ล่าสุด"
                tag={['รับสมัครงาน', 'งานราชการ', 'งานเอกชน']}
                mt={4}
              />
            )}
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

LayoutHome.defaultProps = {
  isFollower: true,
};
