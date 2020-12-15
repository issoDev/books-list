import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../../styles/styles';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';

export default function AddingBook({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titleStyle}>Adding Book</Text>
      <View style={styles.addBtnContainer}>
        <CircleButton title="+" />
      </View>
      
    </View>
  )
}
