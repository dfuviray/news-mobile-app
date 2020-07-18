import React from 'react';
import {View, Text} from 'react-native';

import {Container, Title, Body} from './ListItemStyles';

export default function ListItem({data: {title, body}}) {
  return (
    <Container>
      <Title numberOfLines={1}>{title}</Title>
      <Body numberOfLines={2}>{body}</Body>
    </Container>
  );
}
