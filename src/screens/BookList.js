import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

import { styles } from '../../styles/styles';
import { AntDesign } from '@expo/vector-icons'; 
import Book from '../components/Book';
import { useSelector, useDispatch } from 'react-redux';
import {  addBook, deleteBook } from '../reducer/store'

export default function BookList({ navigation }) {
  const [books, setBooks] = useState([
    { id: Date.now().toString() + 1, title: 'Le petit prince', author: 'Antoine de Saint-Exupéry' }
  ]);


  const showContent = () => {
    if(books.length === 0) {
      return (
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>The list of books is empty </Text>
        </View>
      )
    } else {
      return (
        <FlatList 
          data={books}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return(
              <Book 
                title={item.title}
                author={item.author}
              />
            )
          }}
        />
      )
    }
  }

  return (
    <View style={styles.container}>
      { showContent() }
      <TouchableOpacity 
        style={styles.bookListBtn}
        onPress={() => navigation.navigate("AddingBook")}
      >
        <AntDesign name="plus" size={15} color="white" />
        <Text style={styles.bookListTxtBtn}> add a new book </Text>
      </TouchableOpacity>
    </View>
  )
}
