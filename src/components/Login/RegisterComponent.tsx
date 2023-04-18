import { useState } from 'react';
import { Input, Button, Flex, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';

export default function RegisterComponent() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, lastName, username, password, repeatPassword });
  };

  return (
    <Box width="100%" mt={8}>
      <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <Flex direction="column" mb={6}>
            <Text mb={2}>ชื่อ</Text>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              focusBorderColor="twitter.600"
              borderColor="blackAlpha.300"
            />
          </Flex>
          <Flex direction="column" mb={6}>
            <Text mb={2}>นามสกุล</Text>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              focusBorderColor="twitter.600"
              borderColor="blackAlpha.300"
            />
          </Flex>
          <Flex direction="column" mb={6}>
            <Text mb={2}>อีเมล</Text>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              focusBorderColor="twitter.600"
              borderColor="blackAlpha.300"
            />
          </Flex>
          <Flex direction="column" mb={6}>
            <Text mb={2}>รหัสผ่าน</Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="twitter.600"
              borderColor="blackAlpha.300"
            />
          </Flex>
          <Button colorScheme="twitter" type="submit">
            สร้างบัญชี
          </Button>
          <Link href="/" passHref legacyBehavior>
            <Text
              as="a"
              alignSelf="center"
              mt={6}
              fontSize="sm"
              color="blue.500"
            >
              ยกเลิก
            </Text>
          </Link>
        </Flex>
      </form>
    </Box>
  );
}
