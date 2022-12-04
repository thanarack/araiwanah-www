'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RelevantLinks } from '../../configs/constant';

export default function NavigationRelevant() {
  const path = usePathname();

  return (
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
                color: 'twitter.600',
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
  );
}
