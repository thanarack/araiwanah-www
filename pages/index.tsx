import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import AsideLeft from '../src/components/AsideLeft';

export default function Home() {
  return (
    <div>
      <Box as="nav" backgroundColor="white" position="fixed" width="100%" top="0" boxShadow="sm">
        <Container maxWidth="1280" py="5">
          Navbar
        </Container>
      </Box>
      <Container as="main" maxWidth="1280" mt="20">
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={3}>
            <AsideLeft />
          </GridItem>
          <GridItem colSpan={6} h="10" bg="blue.500" />
          <GridItem colSpan={3} h="10" bg="blue.500" />
        </Grid>
      </Container>
    </div>
  );
}
