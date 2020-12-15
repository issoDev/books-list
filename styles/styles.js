import { StatusBar, Platform, StyleSheet } from 'react-native';
import colors from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightdark,
    paddingVertical: 20,
    paddingHorizontal: 25,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  // BookList.js StyleSheet
  titleContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.white,
    fontSize: 19
  },
  bookListBtn: {
    backgroundColor: colors.darkgreen,
    height: 35,
    width: 155,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    margin: 25,
    bottom: 0
  },
  bookListTxtBtn: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '500'
  },

  // CircleButton.js StyleSheet
  circleBtnStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleTxtBtn: {
    fontSize: 16,
    color: colors.white,
    position: 'absolute',
    top: 8
  },

  // Header.js StyleSheet
  headerContainer: {
    paddingTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  // AddingBook.js StyleSheet
  addBtnContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'flex-end',
    paddingRight: 25,
    paddingBottom: 20
  },
  textInputContainer: {
    alignItems: 'center',
    marginTop: 125
  },
  bookInput: {
    borderWidth: 1,
    borderColor: 1,
    height: 45,
    width: '95%',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 15,
    marginVertical: 10
  },

  // Book.js StyleSheet
  bookCardContainer: {
    paddingTop: 30
  },
  bookCard: {
    height: 65,
    width: '100%',
    backgroundColor: colors.darkgray,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookDetails: {
    justifyContent: "center"
  },
  authorTxtStyle: {
    color: colors.green,
    fontWeight: "200"
  },
  titleTxtStyle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500"
  }

});