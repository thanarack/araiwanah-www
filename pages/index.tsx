import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import AsideLeft from '../src/components/AsideLeft';
import MiddleContent from '../src/components/MiddleContent';
import Navbar from '../src/components/Navbar';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container as="main" maxWidth="1280" mt="20">
        <Grid templateColumns="repeat(11, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <AsideLeft />
          </GridItem>
          <GridItem colSpan={6}>
            <MiddleContent />
          </GridItem>
          <GridItem colSpan={3} bg="cyan.500" borderRadius="md"/>
        </Grid>
      </Container>
    </Box>
  );
}
