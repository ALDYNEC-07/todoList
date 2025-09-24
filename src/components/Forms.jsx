import React from "react";

export const Forms = ({text, setText, addTodo}) => {
    return (
        <div className="forms">
            <input type="text" 
                placeholder="Введите ваш текст..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="add" onClick={addTodo}>Добавить</button>
        </div>
    )
}




