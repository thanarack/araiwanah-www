import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  Text,
  textDecoration,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MdSearch } from 'react-icons/md';

export default function Navbar() {
  return (
    <Box
      as="nav"
      backgroundColor="white"
      position="fixed"
      width="100%"
      top="0"
      borderBottom="1px"
      borderColor="blackAlpha.300"
      zIndex={99}
    >
      <Container maxWidth="1280" py={2}>
        <Flex direction="row" gap={4}>
          <Box id="brand">
            <Link href="/">
              <Image
                src="image/Araiwanah-logo.png"
                alt="อะไรวะน่ะ"
                height="40px"
              />
            </Link>
          </Box>
          <Flex id="search-box" pos="relative">
            <Input
              type="text"
              placeholder="ค้นหา..."
              px={2}
              w="420px"
              focusBorderColor="twitter.600"
              maxLength={200}
              borderColor="blackAlpha.400"
              borderWidth={1.5}
            />
            <Button
              p={0}
              borderRadius="10"
              background="transparent"
              pos="absolute"
              right="1px"
              _hover={{ background: 'blackAlpha.200' }}
            >
              <Icon as={MdSearch} w="6" h="6" />
            </Button>
          </Flex>
          <Flex marginLeft="auto">
            <Flex justifyContent="center" alignItems="center" gap={4}>
              <Link href="/enter">
                <Box
                  px={4}
                  py={2}
                  _hover={{
                    borderRadius: 'md',
                    background: 'gray.100',
                    color: 'twitter.600',
                    textDecoration: 'underline',
                  }}
                >
                  <Text>เข้าสู่ระบบ</Text>
                </Box>
              </Link>
              <Link href="/enter/?state=new-user">
                <Button
                  type="button"
                  colorScheme="twitter" variant="outline"
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
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
