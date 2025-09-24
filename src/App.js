// Мой код с добавлением кнопки. С помощью И
import React, { useState } from "react";

export const App = () => {
  const [todoList, setTodoList] = useState([
    { favorit: true, text: "Купить машину" },
    { favorit: false, text: "Купить квартиру" },
    { favorit: false, text: "Купить шапку" },
    { favorit: false, text: "Купить телефон" },
    { favorit: false,  text: "Купить бананы" }
  ]);

  const butStar = (index) => {
    setTodoList(prev =>
      prev.map((item, i) => (i === index ? { ...item, favorit: !item.favorit } : item))
    );
  };

  const newTodList = todoList.map((todo, index) => {
    const todoClass = todo.favorit ? "todo selected" : "todo";
    return (
      <div className="todos" key={index}>
        <div className={todoClass}>
          <div className="star_todo">
            <div className="favorit">
              <span>
                <button className="star" onClick={() => butStar(index)}>☆</button>
              </span>
            </div>
            <div className="todo_text">
              {todo.text}
            </div>
          </div>
          <div className="delet">
            <span>×</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="header">
        <h1>Список Дел</h1>
        <hr />
      </div>
      <input type="text" placeholder="Введите ваш текст..." />
      <button className="add">Добавить</button>
      {newTodList}
    </div>
  );
};
// задание с видео 

// export const App = () => {

//     const todoList = [
//       {favorit: false, text: "Купить машину"},
//       {favorit: false, text: "Купить квартиру"},
//       {favorit: false, text: "Купить шапку"},
//       {favorit: false, text: "Купить телефон"},
//       {favorit: true, text: "Купить бананы"}
//     ]

//     const newTodList = todoList.map((todo) => {
//       let todoClass;
//       if (todo.favorit === false) {
//         todoClass = "todo selected"
//       } else {
//         todoClass = "todo"
//       }
//       return (
//       <div className="todos">
//         <div className={todoClass}> 
//                 <div className="star_todo">
//                   <div className="favorit">
//                     <span>
//                        <button className="star">
//                         ☆
//                        </button>
//                     </span>
//                   </div>
//                   <div className="todo_text">
//                      {todo.text}
//                   </div>
//                   </div>
//                   <div className="delet">
//                      <span>
//                         ×
//                      </span>
//                 </div>
//         </div>
//       </div>
//       )
//     })

//   return (
//     <div className="App">
//       <div className="header">
//       <h1>Список Дел</h1>
//       <hr/>
//       </div>
//       <input type="text" placeholder="Введите ваш текст..."/>
//       <button className="add">Добавить</button>
//       {newTodList}
//     </div>
//   );
// }


