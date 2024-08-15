import React from "react";
import { Button } from "@/component/Button";
import { Input } from "@/component/Input";
import { Todo } from "@/component/Todo";
import { useState } from "react";

export const TodoContainer = () => {
  const [text, setValue] = useState("");
  const [array1, setArray1] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onclick = () => {
    const id = "id" + Math.random().toString(16).slice(2);
    if (text !== " ") {
      setArray1((prevArray) => [
        ...prevArray,
        { todo: text, id: id, check: false },
      ]);
      setValue(" ");
    }
  };
  const checkTodo = (id) => {
    setArray1(
      array1.map((el) => {
        if (el.id == id) {
          el.check = true;
        }
        return el;
      })
    );
    // setArray1(array1.filter((el) => el.id !== id));
    console.log(array1);
    console.log(id);
  };

  const deleteTodo = (id) => {
    setArray1(array1.filter((el) => el.id !== id));
  };

  return (
    <div>
      <Input handleChange={handleChange} value={text} />
      <Button onclick={onclick} />
      <Todo deleteTodo={deleteTodo} checkTodo={checkTodo} array1={array1} />
    </div>
  );
};
