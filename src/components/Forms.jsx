
import React from "react";

export const Forms = ({checked, setChecked, text, setText, addTodo}) => {
    return (
        <div className="inputs">
          <input className="checkbox" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
          <input className="text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <input className="button" type="button" value="Add" onClick={addTodo} />
        </div>
    )
}