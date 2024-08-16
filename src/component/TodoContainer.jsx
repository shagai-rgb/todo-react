import React from "react";
import { Button } from "@/component/Button";
import { Input } from "@/component/Input";
import { Todo } from "@/component/Todo";
import { useState } from "react";
import { ModalEdit } from "./ModalEdit";

export const TodoContainer = () => {
  const [text, setValue] = useState("");
  const [array1, setArray1] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [text1, setText1] = useState("");
  const [editingId, setEditingId] = useState("");

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

  const onclick1 = () => {
    const updatedTodo = array1.map((el) => {
      if (el.id == editingId) {
        return { ...el, todo: text1 };
      }
      return el;
    });

    setArray1(updatedTodo);
    setEditingId("");
    setShowModal(false);
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
  };

  const checkTodo1 = (id) => {
    setArray1(
      array1.map((el) => {
        if (el.id == id) {
          el.check = false;
        }
        return el;
      })
    );
  };

  const editTodo = (id) => {
    setShowModal(true);
    setEditingId(id);
  };

  const deleteTodo = (id) => {
    setArray1(array1.filter((el) => el.id !== id));
  };
  const noneModal = () => {
    setShowModal(false);
    array1.map((el) => {
      el.edit = false;
      return el;
    });
  };
  const editText = (e) => {
    setText1(e.target.value);
  };

  return (
    <div className="todoContainer">
      <div className="todoInputSide">
        <Input handleChange={handleChange} value={text} />
        <Button onclick={onclick} />
      </div>
      <Todo
        deleteTodo={deleteTodo}
        checkTodo={checkTodo}
        checkTodo1={checkTodo1}
        array1={array1}
        editTodo={editTodo}
      />
      {showModal && (
        <ModalEdit
          editText={editText}
          onclick1={onclick1}
          noneModal={noneModal}
        />
      )}
    </div>
  );
};
