import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { ItemContext } from "../context/ItemContextProvider";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useContext(ItemContext);
  const [itemText, setItemText] = useState("");
  const [val, setval] = useState();



  const removeItem = (id) => {
    setItems(items.filter((it) => it.id !== id));
  };

  const editItems = (id) => {
    const editTodo = items.filter((it) => it.id === id);
    setItemText(editTodo[0].title);
    setval(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (val) {
      const editTodo = items.filter((it) => {
        if (it.id === val) {
          it.title = itemText;
        }
      });
    } else {
      const newItem = {
        completed: false,
        id: items.length + 1,
        title: itemText,
        userId: 10,
      };
      setItems([...items, newItem]);
    }
    setItemText("");
    setval();
  };

  function toggleCheck(val) {
    // setItems((prev) => prev.map(task => task.id === id ? {...items,completed:!task.completed} : task))
    const Tasks = items.map((Task) =>
      Task.id === val
        ? {
            ...Task,
            completed: !Task.completed,
          }
        : Task
    );

    setItems(Tasks);
  }

  return (
    <>
      <div className="TodoWrapper">
        <h1>Todo App!!</h1>
        <form onSubmit={handleSubmit} className="TodoForm">
          <input
            type="text"
            value={itemText}
            onChange={(e) => {
              setItemText(e.target.value);
            }}
            className="todo-input"
          />
          <button className="todo-btn">{val ? "Edit" : "Add"}</button>
        </form>

        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItems={editItems}
            toggleCheck={toggleCheck}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
