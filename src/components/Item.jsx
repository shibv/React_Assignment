import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const Item = ({ item, removeItem, editItems, toggleCheck }) => {

  return (
    <div className="Todo">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          toggleCheck(item.id);
        }}
      />

      <p className={item.completed ? "isChecked" : "notChecked"}>{item.title}</p>

      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => {
            editItems(item.id);
          }}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => {
            removeItem(item.id);
          }}
        />
      </div>
    </div>
  );
};

export default Item;
