
import React from "react";

export const Todo = ({todos, makeFavorite, deleted}) => {
    return (
    <main className="main">
        {
          todos.map((todo, index) => (
            <div className={todo.favorite ? "selected" : "todo"}>
             <div className="star-todo">
              <div className="star">
                <input className="button" type="button" value="☆" onClick={() => makeFavorite(index)} />
              </div>
              <div className="todo">
                  {todo.text}
              </div>
              <div className="delet">
                <input className="dlt" type="button" value="❌" onClick={() => deleted(index)} />
              </div>
            </div>
            </div>
          ))
        }
    </main>
    )
}