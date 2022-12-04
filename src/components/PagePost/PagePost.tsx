'use client';

import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import ContentBody from './ContentBody';
import AsideProfile from './AsideProfile';
import Reaction from './Reaction';

export default function PagePost() {
  return (
    <Box>
      <Container as="main" maxWidth="1280" mt={20}>
        <Grid templateColumns="repeat(18, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <Reaction />
          </GridItem>
          <GridItem colSpan={12}>
            <ContentBody />
          </GridItem>
          <GridItem colSpan={5}>
            <AsideProfile />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
