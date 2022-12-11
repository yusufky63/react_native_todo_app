import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  flat: {
    flexDirection: 'column',
  },
  header_info: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 1,
  },
  todo_count: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: 5,
  },
  filter: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: 5,
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 5,
  },
});
