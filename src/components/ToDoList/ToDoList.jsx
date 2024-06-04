import React, { useState } from "react";

export const ToDoList = () => {
  const [list, setList] = useState(["Eat breakfast", "walk", "train"]);
  const [newList, setNewList] = useState();

  function handleInputChange(event) {
    setNewList(event.target.value);
  }
  function addTask() {
    if (newList.trim() !== "") {
      setList((t) => [...t, newList]);
      setNewList("");
    }
  }
  function deleteTask(index) {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedList = [...list];
      [updatedList[index], updatedList[index - 1]] = [
        updatedList[index - 1],
        updatedList[index],
      ];
      setList(updatedList);
    }
  }
  function moveTaskDown(index) {
    if (index < list.length - 1) {
      const updatedList = [...list];
      [updatedList[index], updatedList[index + 1]] = [
        updatedList[index + 1],
        updatedList[index],
      ];
      setList(updatedList);
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>To Do list</h1>
        <input
          type="text"
          placeholder="Enter a task"
          value={newList}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
        <ol>
          {list.map((list, index) => (
            <li key={index}>
              <span className="text">{list}</span>
              <button className="Delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="Move-btn" onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button className="Move-btn" onClick={() => moveTaskDown(index)}>
                Down
              </button>
            </li>
          ))}{" "}
        </ol>
      </div>
    </div>
  );
};
