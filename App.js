import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import TodoList from './TodoList';

type Props = {};
export default class App extends Component<Props> {
  state = {
    newTodo: '',
    todos: [],
  }

  constructor(props) {
    super(props);
    this.loadTodos();
  }

  onChangeText(newTodo) {
    this.setState({ newTodo });
  }

  onPressAdd() {
    const { newTodo } = this.state;
    this.setState({
      // ADDボタンを押したらnewTodoの文字列を消去
      newTodo: '',
      // ADDボタンを押したら入力フォーラムの文字列がtodos配列に格納される
      todos: [newTodo, ...this.state.todos],
    }, () => this.storeTodos());
  }

  onPressDelete(index) {
    this.setState({
      todos: this.state.todos.filter((t, i) => i !== index),
    }, () => this.storeTodos());
  }

  storeTodos() {
    const str = JSON.stringify(this.state.todos);
    AsyncStorage.setItem('todos', str);
  }

  loadTodos() {
    AsyncStorage.getItem('todos').then((str) => {
      const todos = str ? JSON.parse(str) : [];
      this.setState({ todos });
    });
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <TextInput
          // ADDボタンを押したら入力フォーラムの文字列を消すためにある
          value={this.state.newTodo}
          style={styles.form}
          onChangeText={text => this.onChangeText(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.onPressAdd()}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
        <TodoList
          todos={this.state.todos}
          onPressDelete={index => this.onPressDelete(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  form: {
    backgroundColor: '#EEE',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
