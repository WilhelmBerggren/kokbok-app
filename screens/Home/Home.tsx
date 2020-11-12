import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useData } from '../../hooks/useData';
import { HomeWrapper } from './Home.styles';

export const Home = () => {
  const [result] = useData();
  const nav = useNavigation();

  if (result.fetching) return <View><Text>Loading...</Text></View>
  if (result.error){
    console.log(result.error);
      return <View><Text>Error: {result.error.message}</Text></View>
  }

  return (
    <HomeWrapper>
      <Text>🍆 Welcome to Kokbok 🍆</Text>
      <Text>Things:</Text>
      {result.data?.projects.map(project => (
        <View key={project.id}>
          <Text>{project.id}</Text>
          <Text>{project.name}</Text>
          <Text>{project.createdBy}</Text>
        </View>
      ))}
      <Button title="Details" onPress={() => nav.navigate("Details")} />
    </HomeWrapper>
  )
}