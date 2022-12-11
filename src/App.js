import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from './components/SearchBar';
import AddTodo from './components/AddTodo';
import TodoDesign from './components/TodoDesign';
import {styles} from './App.styles';
function App() {
  const [todo, setTodo] = React.useState([
    {
      id: 1,
      text: 'GÖREV 1',
      isDone: true,
    },
    {
      id: 2,
      text: 'GÖREV 2',
      isDone: true,
    },
    {
      id: 3,
      text: 'GÖREV 3',
      isDone: false,
    },
  ]);
  const [filtered, setFiltered] = React.useState(todo);

  const handleSearch = text => {
    console.log(text);
    const filter = todo.filter(item => {
      const textData = text.toLowerCase();
      const itemData = item.text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFiltered(filter);
  };

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  // const handleOnlyDone = () => {
  //   const done = todo.filter(item => {
  //     return item.isDone === true;
  //   });
  //   setFiltered(done);
  // };

  // const handleOnlyUndone = () => {
  //   const undone = todo.filter(item => {
  //     return item.isDone === false;
  //   });
  //   setFiltered(undone);
  // };

  const renderTodo = ({item}) => (
    <TodoDesign data={item} todo={todo} setTodo={setTodo} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TODO APP</Text>

      <SearchBar onSearch={handleSearch} />
      <View style={styles.header_info}>
        {/* <Text style={styles.filter} onPress={() => setFiltered(todo)}>
          Hepsi
        </Text>
        <Text style={styles.filter} onPress={handleOnlyDone}>
          Tamamlanlar
        </Text>
        <Text style={styles.filter} onPress={handleOnlyUndone}>
          Tamamlanmamış
        </Text> */}
        <Text style={styles.todo_count}>
          Aktif Görev Sayısı :{todo.filter(x => x.isDone === false).length}
        </Text>
      </View>
      <FlatList style={styles.flat} data={filtered} renderItem={renderTodo} />
      <AddTodo todo={todo} setTodo={setTodo} setFiltered={setFiltered} />
    </View>
  );
}

export default App;
