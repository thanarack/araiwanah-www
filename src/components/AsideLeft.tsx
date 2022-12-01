import { List, ListIcon, ListItem, Icon } from '@chakra-ui/react';
import { MdHome } from 'react-icons/md';

export default function AsideLeft() {
  return (
    <>
      <List spacing={4}>
        <ListItem>
          <ListIcon as={MdHome} size="lg"/>
          หน้าฟีด
        </ListItem>
        <ListItem>
          <ListIcon as={MdHome} />
          แท็คทั้งหมด
        </ListItem>
        <ListItem>
          <ListIcon as={MdHome} />
          FAQ
        </ListItem>
        <ListItem>
          <ListIcon as={MdHome} />
          เกี่ยวกับเรา
        </ListItem>
        <ListItem>
          <ListIcon as={MdHome} />
          คู่มือใช้งาน
        </ListItem>
      </List>
    </>
  );
}
