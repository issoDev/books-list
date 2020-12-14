import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

export default function CircleButton({ title, navigation }) {
  return (
    <View>
      <TouchableOpacity 
        style={styles.circleBtnStyle}
        onPress={() => console.log(navigation)}
      >
        <Text style={styles.circleTxtBtn}> {title} </Text>
      </TouchableOpacity>
      
    </View>
  )
}
