import { useState } from "react";
import { Todo } from "./components/Todo";
import { Forms } from "./components/Forms";


export const App = () => {

   const [todos, setTodos] = useState([
      {favorite: false, text: "Go to home"},
      {favorite: true, text: "Hello LINCODE"},
      {favorite: false, text: "Listen englich lesson"},
      {favorite: false, text: "Write the code"},
      {favorite: false, text: "Read the book"}
    ])
    const makeFavorite = (indx) => {
      const newTodos = todos.map((item,index) => {
        if(index === indx) {
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
  const [checked, setChecked] = useState(false)
  const addTodo = () => {
    const textTrim = text.trim()
    if(textTrim === "") return;

    if(checked === true) {
      setTodos([
      {
        text: " ✔️ " + text
      },
        ...todos
    ])
    setText("")
    } else {
       setTodos([
      {
        text: text
      },
        ...todos
    ])
    setText("")
    }
    const exists = todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  if(exists) {
    alert("Такое дело уже есть!")
    return 
  } 
  }
  const deleted = (indx) => {
    const filterTodos = todos.filter((todo,index) => indx !== index)
    setTodos(filterTodos)
  }
  return (
    <div className="App">
      <header className="header">
          <h1 className="logo">Todo list</h1>
          <Forms checked={checked}
                 setChecked={setChecked}
                 text={text}
                 setText={setText}
                 addTodo={addTodo}
          />
      </header>
      <Todo todos={todos} 
            makeFavorite={makeFavorite}
            deleted={deleted}
      />
    </div>
  );
}


