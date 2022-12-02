import { List, ListIcon, ListItem, Icon, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { AsideListItems } from '../../configs/constant';

export default function AsideLeft() {
  return (
    <>
      <List>
        {AsideListItems.map((val, index) => (
          <ListItem key={index} role="group">
            <Link href={val.link}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                py={2}
                pl={2}
                _hover={{
                  borderRadius: 'md',
                  background: 'gray.200',
                  color: 'cyan.600',
                }}
              >
                <ListIcon color="gray.500" as={val.icon} w="5" h="5" />
                <Text _groupHover={{ textDecoration: 'underline' }}>
                  {val.title}
                </Text>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
