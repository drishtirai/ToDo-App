import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";
import Button from "../components/Button";
import Icons from "../components/Icons";
import SQLite from "react-native-sqlite-storage";

console.log(Date.now().toString());


const TodoScreen = () => {
  // Init local state
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);


  

  //handle Add Todo
  const handleAddTodo = () => {
    // structure of a single todo item
    // {
    //   id:
    //   title:
    // }
    if(todo===""){
      return; // early return
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
    
  };
  //Handle Delete Todo
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };
  // Handle Edit Todo
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
      setTodoList(updatedTodos);
      setEditedTodo(null);
      setTodo("");
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  // Render Todo

  const renderTodos = ({ item, index }) => {
    return (
      <View style={styles.renTodo}>
        <Text
          style={{ color: "white", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="#ffb158"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#ffb158"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={styles.outerContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add a Task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      
      {editedTodo ? (
        <Button onPress={handleUpdateTodo} label="Save" />
      ) : (
        <Button onPress={handleAddTodo} label="Add" />
      )}
      
      {/* Render Todo List */}
      <FlatList data={todoList} renderItem={renderTodos} />
      {todoList.length <= 0 && <Fallback />}
    </View>
    
  );
};
export default TodoScreen;
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: "#671820",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  outerContainer: {
    margin: 16,
  },
  button: {
    backgroundColor: "#ffb158",
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  renTodo: {
    backgroundColor: "#671820",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});