import { useState } from 'react';
import { List, ListItem } from '@chakra-ui/react';
import Post from './Post';
import { MockPots } from '../../configs/constant';

export default function PostLists(props: any) {
  const { mt } = props;

  const [data, setData] = useState(MockPots);

  return (
    <List mt={mt} spacing={2}>
      {data.map((val, index) => (
        <ListItem key={index}>
          <Post data={val} />
        </ListItem>
      ))}
    </List>
  );
}
