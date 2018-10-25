/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    newTodo: '',
    todos: [],
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
    })
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
        <ScrollView style={styles.scrollview}>
          {
            this.state.todos.map((todo, index) => (
              <View key={todo+index} style={styles.todoContainer}>
                <Text>{todo}</Text>
              </View>
            ))
          }
        </ScrollView>
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
  scrollview: {
    backgroundColor: '#DDD',
  },
  todoContainer: {
    backgroundColor: '#FFF',
    padding: 10,
  },
});
