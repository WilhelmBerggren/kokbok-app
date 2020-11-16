import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NudesWrapper, NudesImage } from './Nudes.styles';

export const Nudes = () => {
  const nav = useNavigation();

  return (
    <NudesWrapper>
      <Text>This is where I store my nudes... If I had any!</Text>
      <NudesImage source={{uri: "https://pbs.twimg.com/media/EaRM5coWkAEJ1n4?format=jpg&name=large"}}></NudesImage>
      <Button title="Go home" onPress={() => nav.navigate("Home")} />
    </NudesWrapper>
  )
}