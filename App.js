import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookList from './src/screens/BookList';
import { BooksContext } from './src/context/BooksContext';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="booklist" 
          component={BookList} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <BooksContext.Provider value={10}>
      <App />
    </BooksContext.Provider>
    
  )
}

