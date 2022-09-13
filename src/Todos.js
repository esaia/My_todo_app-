import React, { useEffect, useReducer, useRef, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const getlocalstorage = () => {
    if (localStorage.getItem("todos")) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  };

  const reduserfunction = (todos, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [newvalue(action.payload.name), ...todos];
      case "TOOGLE_TODO":
        return todos.map((todo) => {
          if (action.payload.todoID === todo.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
      case "EDITING_TODO":
        const edititem = todos.find(
          (todo) => action.payload.editID === todo.id
        );
        edititem.name = action.payload.name;

        //edititemi iyos pirveli siashi
        const fromindex = todos.indexOf(edititem);
        const toIndex = 0;
        const element = todos.splice(fromindex, 1)[0];
        todos.splice(toIndex, 0, element);
      case "TODO_DELETE":
        return todos.filter((todo) => todo.id !== action.payload.todoID);
      default:
        return todos;
    }
  };

  const newvalue = (name) => {
    return { id: Date.now(), name: name, completed: false };
  };
  const [editID, seteditID] = useState(null);
  const [isEditing, setisEditing] = useState(false);
  const [todos, dispatch] = useReducer(reduserfunction, getlocalstorage());
  const [name, setname] = useState("");
  const inputref = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch({ type: "EDITING_TODO", payload: { editID, name } });
      setisEditing(false);
    } else {
      dispatch({ type: "ADD_TODO", payload: { name } });
    }
    setname("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, isEditing]);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="w-full outline-none m-2 px-3 py-1"
          type="text"
          ref={inputref}
        />
      </form>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            setname={setname}
            setisEditing={setisEditing}
            seteditID={seteditID}
            inputref={inputref}
          />
        );
      })}
    </div>
  );
};

export default Todos;
