import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    flex: 4,
    fontSize: 17,
    fontWeight: 'bold',
  },
  done: {
    flex: 4,
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
