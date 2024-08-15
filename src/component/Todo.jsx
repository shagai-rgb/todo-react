import React from "react";

export const Todo = ({ array1, deleteTodo, checkTodo }) => {
  return (
    <div className="todo">
      <div>
        <h1>Todo list</h1>
        {array1.map(({ todo, id, check }, index) => {
          if (check == false) {
            return (
              <div className="todoList" key={index}>
                <input type="checkbox" onChange={() => checkTodo(id)} />{" "}
                <span> {todo} </span>
                <button onClick={() => deleteTodo(id)}>delete</button>
              </div>
            );
          }
        })}
      </div>
      <div>
        <h1>Todo list</h1>
        {array1.map(({ todo, id, check }, index) => {
          if (check == true) {
            return (
              <div className="todoList" key={index}>
                <input type="checkbox" checked /> <span> {todo} </span>
                <button onClick={() => deleteTodo(id)}>delete</button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
