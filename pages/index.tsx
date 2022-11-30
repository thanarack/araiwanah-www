import { Container, Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <nav>Navbar</nav>
      <Container as="main" maxWidth="1280">
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={3}  h="10" bg="blue.500" />
          <GridItem colSpan={6} h="10" bg="blue.500" />
          <GridItem colSpan={3} h="10" bg="blue.500" />
        </Grid>
      </Container>
    </div>
  );
}
