'use client';

import { Container, Grid, GridItem } from '@chakra-ui/react';
import AsideLeft from '../AsideLeft';
import Footer from '../Footer';
import Navbar from '../Navbar';
import AsideInfo from './UserInfo';
import AsideProfile from './AsideProfile';

export default function LayoutProfile({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Container as="main" maxWidth={['980']} mt={20}>
        <Grid templateColumns="repeat(19, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <AsideProfile />
          </GridItem>
          <GridItem colSpan={13}>{children}</GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
