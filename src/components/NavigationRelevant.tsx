'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { RelevantLinks } from '../../configs/constant';

export default function NavigationRelevant(props: any) {
  const { isTag } = props;

  const searchParams = useSearchParams();
  const path = usePathname();
  const sorting = searchParams?.get('sorting') ?? '';
  const tagLink = path + '?sorting=';

  return (
    <Flex gap={4}>
      {RelevantLinks.map((val, index) => (
        <Box key={isTag ? tagLink + val.key : val.link}>
          <Link href={isTag ? tagLink + val.key : val.link}>
            <Box>
              {!isTag && (
                <Text
                  as="span"
                  fontSize="md"
                  fontWeight="semibold"
                  color={path === val.link ? 'black' : 'blackAlpha.500'}
                >
                  {val.title}
                </Text>
              )}

              {isTag && (
                <Text
                  as="span"
                  fontSize="md"
                  fontWeight="semibold"
                  color={sorting === val.key ? 'black' : 'blackAlpha.500'}
                >
                  {val.title}
                </Text>
              )}
            </Box>
          </Link>
        </Box>
      ))}
    </Flex>
  );
}
