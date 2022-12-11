import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
const AddTodo = ({todo, setTodo, setFiltered}) => {
  const [texts, setText] = React.useState('');

  const handleAdd = () => {
    setTodo([...todo, {id: todo.length * 2, text: texts}]);
    setFiltered(todo);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Görev Ekleyin"
        style={styles.input}
        onChangeText={setText}
        value={texts}
      />
      <TouchableHighlight onPress={handleAdd}>
        <View style={styles.button}>
          <Text style={styles.addText}>Ekle</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 5,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  button: {
    backgroundColor: 'limegreen',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 1,
  },
  addText: {
    color: 'white',
  },
});
