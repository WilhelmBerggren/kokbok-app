import 'react-native-gesture-handler';
import React from 'react';

import { createClient, Provider } from 'urql';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/Home/Home';
import { Details } from './screens/Details/Details';

const client = createClient({ url: 'https://kokbok.azurewebsites.net/api' })

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Details" component={Details} />
  </Tab.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Provider value={client}>
        <Tabs />
      </Provider>
    </NavigationContainer>
  );
}

export default App;