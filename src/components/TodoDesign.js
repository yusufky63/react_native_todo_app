import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './TodoDesign.styles';
function TodoDesign({data, todo, setTodo}) {
  function handleDelete() {
    const deleteTodo = todo.filter(item => {
      return item.id !== data.id;
    });
    setTodo(deleteTodo);
  }
  function handleDone() {
    const done = todo.map(item => {
      if (item.id === data.id) {
        item.isDone = !data.isDone;
      }
      return item;
    });
    setTodo(done);
  }
  return (
    <TouchableHighlight
      onPress={() => handleDone(data)}
      underlayColor="#DDDDDD"
      style={styles.container}
      onLongPress={() => handleDelete(data)}>
      {data.isDone ? (
        <Text style={styles.done}> {data.text}</Text>
      ) : (
        <Text style={styles.text}>{data.text}</Text>
      )}
    </TouchableHighlight>
  );
}

export default TodoDesign;
