// задание с видео 

import { useState } from "react";
import { Header } from "./components/Header";
import { Forms } from "./components/Forms";
import { Todo } from "./components/Todo";

export const App = () => {
    const [todos, setTodos] = useState([
      {favorite: true, text: "Купить машину"},
      {favorite: false, text: "Купить квартиру"},
      {favorite: false, text: "Купить шапку"},
      {favorite: false, text: "Купить телефон"},
      {favorite: false, text: "Купить бананы"}
    ])

    const deleteTodo = (indexOfDeletedItem) => {
      const filterTodos = todos.filter((todo, index) => {
        if (index === indexOfDeletedItem) {
          return false
        }
        return true
      })

      setTodos(filterTodos)
    }

    const makeFavorite = (indexOfMakeFavorite) => {
      const newTodos = todos.map((item,index) => {
        if (index === indexOfMakeFavorite) {
          return {
            ...item,
            favorite: !item.favorite
          }
        }
        return item
      })
      setTodos(newTodos)
    }

    const [text, setText] = useState("")

    const addTodo = () => {

    const text2 = text.trim();
      if(text2 === "") return;

    const exists = todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());

    if (exists) {
      alert("Такое дело уже есть!");
      return;
    }
      setTodos([
        {
        text: text,
        favorite: false
        },
        ...todos
         ])

    setText("")
    
    }

  return (
    <div className="App">
      <Header/>
      <Forms 
        text={text}
        setText={setText}
        addTodo={addTodo}
      />
      <Todo 
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
        />
    </div>
  );
}