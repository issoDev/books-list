import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import { styles } from '../../styles/styles';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';

export default function AddingBook() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.textInputContainer}>
      <TextInput 
        style={styles.bookInput}
        placeholder="Add a book title here"
        value={bookTitle}
        onChangeText={titleText => setBookTitle(titleText)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput 
        style={styles.bookInput}
        placeholder="Add the author of the book here"
        value={bookAuthor}
        onChangeText={authorText => setBookAuthor(authorText)}
        autoCapitalize="none"
        autoCorrect={false}
        blurOnSubmit={true}
      />
      </View>
      <View style={styles.addBtnContainer}>
        <CircleButton 
          title="➕" 
          disabled={bookTitle === '' ? true : false}
        />
      </View>
    </View>
  )
}
