import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../styles/styles';

export default function CircleButton({ title }) {
  const navigation = useNavigation();

  const nav = () => {
    return title === 'x'
      ? navigation.goBack()
      : navigation.navigate("BookList")
  }

  return (
    <View>
      <TouchableOpacity 
        style={styles.circleBtnStyle}
        onPress={() => nav()}
      >
        <Text style={styles.circleTxtBtn}> {title} </Text>
      </TouchableOpacity>
      
    </View>
  )
}
