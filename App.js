import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AddTODO } from "./components/addComponent";
import { Header } from "./components/header";
import { useState } from "react";
import { TodoList } from "./components/todoItem";

let taskDone = 0;
export default function App() {
  const [list, setList] = useState([]);
  const handleAddTodo = (todo) => {
    setList([...list, todo]);
  };
  const handleIsChecked = (id) => {
    //handleIsChecked
    console.log(id);
    //handleDelete
    // setList((prevList) => {
    //   const temp = [...prevList];
    //   temp[id].done = !temp[id].done;
    //   return temp;
    // }
    setList((prevList) => {
      const temp = prevList.filter((item) => item.id !== id);
      //console.log(temp);
      taskDone++;
      console.log(taskDone);
      return temp;
    });
  };
  return (
    <View>
      <Header title={"TODO APP"} />
      <AddTODO onTodoAdd={handleAddTodo} />
      <StatusBar style="hidden" />
      <TodoList
        todos={list}
        handleCheckBox={handleIsChecked}
        counterDone={taskDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
