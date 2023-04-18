import { FormEventHandler, useState } from 'react';
import { Input, Button, Flex, Text, Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export default function LoginComponent() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ username, password });
  };

  return (
    <Box width="100%" mt={8}>
      <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <Flex direction="column" mb={6}>
            <Text mb={2}>อีเมล</Text>
            <Input
              type="text"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              focusBorderColor="twitter.600"
              borderColor="blackAlpha.300"
            />
          </Flex>
          <Flex direction="column" mb={6}>
            <Text mb={2}>รหัสผ่าน</Text>
            <Input
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              focusBorderColor="twitter.600"
              borderColor="blackAlpha.300"
            />
          </Flex>
          <Button colorScheme="twitter" type="submit">
            เข้าสู่ระบบ
          </Button>
          <Link href="/users/password/new" passHref legacyBehavior>
            <Text
              as="a"
              alignSelf="center"
              mt={6}
              fontSize="sm"
              color="blue.500"
            >
              ลืมรหัสผ่าน
            </Text>
          </Link>
        </Flex>
      </form>
    </Box>
  );
}
