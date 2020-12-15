import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookList from './src/screens/BookList';
import AddingBook from './src/screens/AddingBook';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddingBook">
        <Stack.Screen 
          name="BookList"
          component={BookList}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="AddingBook"
          component={AddingBook}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

