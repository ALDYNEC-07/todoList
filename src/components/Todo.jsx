import React from "react";

export const Todo = ({todos, makeFavorite, deleteTodo}) => {
    return (
        todos.map((todo, index) => {
      return (
      <div className="todos">
        <div className={`todo ${todo.favorite ? "selected" : ""}`}> 
                <div className="star_todo">
                  <div className="favorite">
                    <span>
                       <button className="star" onClick={() => makeFavorite(index)}>
                        ☆
                       </button>
                    </span>
                  </div>
                  <div className="todo_text">
                     {todo.text}
                  </div>
                  </div>
                  <div className="delet">
                     <button onClick={() => deleteTodo(index)}> × </button>
                </div>
        </div>
      </div>
      )
    })
    )
}