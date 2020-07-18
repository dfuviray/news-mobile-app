import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {colors} from '../../config/colors';
import {Container, Message} from './NewStyles';
import ListItem from '../../components/ListItem/ListItem';
import useApi from '../../hooks/useApi';
import Separator from '../../components/Separator/Separator';

export default function News() {
  const {data, error, loading, request} = useApi();
  useEffect(() => {
    request();
  }, []);

  return (
    <Container>
      {error ? (
        <Message>Cannot retriev data</Message>
      ) : loading ? (
        <ActivityIndicator size="large" color={colors['light-black']} />
      ) : (
        <FlatList
          data={data}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ListItem data={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
