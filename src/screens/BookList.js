import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/styles';
import { AntDesign } from '@expo/vector-icons'; 

export default function BookList({ navigation, route }) {

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>The list of books is empty </Text>
      </View>
      <TouchableOpacity 
        style={styles.bookListBtn}
        onPress={() => navigation.push("AddingBook")}
      >
        <AntDesign name="plus" size={15} color="white" />
        <Text style={styles.bookListTxtBtn}> add a new book </Text>
      </TouchableOpacity>
    </View>
  )
}
