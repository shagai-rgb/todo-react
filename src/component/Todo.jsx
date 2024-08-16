import React from "react";

export const Todo = ({
  array1,
  deleteTodo,
  checkTodo,
  checkTodo1,
  editTodo,
}) => {
  return (
    <div className="todo">
      <div className="layoutTodo">
        <h1>Todo list</h1>
        {array1.map(({ todo, id, check }, index) => {
          if (check == false) {
            return (
              <div className="todoList" key={index}>
                <div className="todos">
                  <input type="checkbox" onChange={() => checkTodo(id)} />{" "}
                  <span className="todoText">{todo} </span>
                </div>
                <div className="todoButtons">
                  <button className="editButton" onClick={() => editTodo(id)}>
                    edit
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => deleteTodo(id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="layoutTodo">
        <h1>Done list</h1>
        {array1.map(({ todo, id, check }, index) => {
          if (check == true) {
            return (
              <div className="todoList" key={index}>
                <div className="todos">
                  <input
                    type="checkbox"
                    checked
                    onChange={() => checkTodo1(id)}
                  />
                </div>

                <span className="todoText donetext">{todo} </span>
                <div className="todoButtons">
                  <button className="editButton" onClick={() => editTodo(id)}>
                    edit
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => deleteTodo(id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
