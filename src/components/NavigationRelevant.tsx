import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RelevantLinks } from '../../configs/constant';

export default function NavigationRelevant() {
  const router = useRouter();
  const path = router.pathname;

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
