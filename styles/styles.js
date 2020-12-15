import { StyleSheet } from 'react-native';
import colors from './colors'

export const styles = StyleSheet.create({
  // BookList.js StyleSheet
  container: {
    flex: 1,
    backgroundColor: colors.lightdark,
    paddingVertical: 20,
    paddingHorizontal: 25
  },
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
    backgroundColor: colors.darkgreen,
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
    height: '12%',
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
    marginTop: 100
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
  }


});