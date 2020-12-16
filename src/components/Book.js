import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/styles';
import { Entypo } from '@expo/vector-icons';

export default function Book({ title, author }) {
  return (
    <View style={styles.bookCardContainer}>
      <TouchableOpacity 
      >
        <View style={styles.bookCard}>
          <View style={styles.bookDetails}>
            <Text style={styles.authorTxtStyle}> {title} </Text>
            <Text style={styles.titleTxtStyle}> {author} </Text>
          </View>
          <Entypo name="arrow-with-circle-right" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

