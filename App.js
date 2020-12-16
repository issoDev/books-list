import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text } from 'react-native';
import { styles } from './styles/styles';



export default function App() {
  return (
    <View style={styles.container}> 
      <Text> Hello </Text>
    </View>
  )
}

