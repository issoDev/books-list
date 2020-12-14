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
  }
});