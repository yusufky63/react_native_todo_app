import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
const SearchBar = props => {
  return (
    <View>
      <TextInput style={styles.searchBar}
        onChangeText={props.onSearch}
        placeholder="Ara..." />
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingLeft: 20,
  },
});
