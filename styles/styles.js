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
    fontWeight: 500
  },

  // CircleButton.js StyleSheet
  circleBtnStyle: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: colors.darkgreen,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleTxtBtn: {
    fontSize: 22,
    fontWeight: 600,
    color: colors.white,
    position: 'absolute',
    top: 0
  },

  // Header.js StyleSheet
  headerContainer: {
    height: '10%',
    alignItems: 'flex-end'
  },

  // AddingBook.js StyleSheet
  addBtnContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'flex-end',
    paddingRight: 25,
    paddingBottom: 20
  }

});