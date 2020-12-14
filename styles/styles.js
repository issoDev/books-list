import { StyleSheet } from 'react-native';
import colors from './colors'

export const styles = StyleSheet.create({
  // BookList.js StyleSheet
  container: {
    flex: 1,
    backgroundColor: colors.lightdark,
    paddingVertical: 25,
    paddingHorizontal: 10
  },
  titleContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.white,
    fontSize: 19,
    fontWeight: 500
  },
  bookListBtn: {
    height: 35,
    width: 155,
    borderRadius: 20,
    backgroundColor: colors.darkgreen,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookListTxtBtn: {
    color: colors.white,
    fontSize: 15
  }
});