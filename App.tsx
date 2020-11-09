import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useQuery, createClient, Provider } from 'urql';
import gql from 'graphql-tag';

const client = createClient({ url: 'https://localhost:5001/api' })

export default function App() {
  return (
    <Provider value={client}>
      <View style={styles.container}>
        <Text>Welcome to Kokbok 🍆</Text>
        <Component />
      </View>
    </Provider>
  );
}

type QueryReturns = {
  projects: [
    {
      createdBy: string,
      id: number,
      name: string,
    }
  ]
}

const Component = () => {
  const [result] = useQuery<QueryReturns>({
    query: gql`
      query {
        projects {
          id
          name
          createdBy
        }
      }
    `,
  })

  if (result.fetching) return <View><Text>Loading...</Text></View>
  if (result.error){
    console.log(result.error);
     return <View><Text>Error: {result.error.message}</Text></View>
  }

  console.log(result);

  return (
    <View>
      <Text>Things:</Text>
      {result.data?.projects.map(project => (
        <View key={project.id}>
          <Text>{project.id}</Text>
          <Text>{project.name}</Text>
          <Text>{project.createdBy}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
