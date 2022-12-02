import { useState } from 'react';
import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { RelevantLinks } from '../../configs/constant';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MiddleContent() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Box>
      <Flex>
        {RelevantLinks.map((val, index) => (
          <Box key={val.link}>
            <Link href={val.link}>
              <Box
                px={3}
                py={2}
                _hover={{
                  borderRadius: 'md',
                  background: 'white',
                  color: 'cyan.600',
                }}
              >
                <Text
                  as="span"
                  fontSize="lg"
                  fontWeight={path === val.link ? 'bold' : 'normal'}
                >
                  {val.title}
                </Text>
              </Box>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
