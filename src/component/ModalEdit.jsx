import React from "react";
import { ModalInput } from "./ModalInput";
import { ModalSave } from "./ModalSave";

export const ModalEdit = ({ noneModal, editText, onclick1 }) => {
  return (
    <div className="editContainer">
      <div className="noneModal" onClick={() => noneModal()}></div>
      <div className="editBorder">
        <h1>Edit Todo</h1>
        <div className="editInput">
          <ModalInput editText={editText} />
          <ModalSave onclick1={onclick1} />
        </div>
      </div>
    </div>
  );
};
