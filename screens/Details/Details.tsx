import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { DetailsWrapper } from './Details.styles';

export const Details = () => {
  const nav = useNavigation();

  return (
    <DetailsWrapper>
      <Text>This is a details screeen 😎</Text>
      <Button title="Go home" onPress={() => nav.navigate("Home")} />
    </DetailsWrapper>
  )
}
