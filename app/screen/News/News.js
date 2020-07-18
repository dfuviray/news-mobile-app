import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Message} from './NewStyles';
import ListItem from '../../components/ListItem/ListItem';
import useApi from '../../hooks/useApi';
import Separator from '../../components/Separator/Separator';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

export default function News() {
  const {
    data,
    error,
    loading,
    loadMore,
    request,
    setloadMoreloading,
  } = useApi();
  useEffect(() => {
    request();
  }, []);

  return (
    <Container>
      {error ? (
        <Message>Cannot retriev data</Message>
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <FlatList
          data={data}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={(item) => (item.id + 1).toString()}
          renderItem={({item}) => <ListItem data={item} />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadMore()}
          ListFooterComponent={() => setloadMoreloading && <LoadingSpinner />}
        />
      )}
    </Container>
  );
}
