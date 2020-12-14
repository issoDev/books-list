import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from '../../styles/styles';
import { AntDesign } from '@expo/vector-icons'; 

export default function BookList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>The list of books is empty</Text>
      </View>
      <TouchableOpacity style={styles.bookListBtn}>
        <AntDesign name="plus" size={15} color="white" />
        <Text style={styles.bookListTxtBtn}> ADD A NEW BOOK </Text>
      </TouchableOpacity>
    </View>
  )
}
