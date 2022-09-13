import React from "react";

const Todo = ({
  todo,
  dispatch,
  setname,
  setisEditing,
  seteditID,
  inputref,
}) => {
  const toogle = (e) => {
    e.preventDefault();
    dispatch({ type: "TOOGLE_TODO", payload: { todoID: todo.id } });
  };

  const edittodo = (e) => {
    e.preventDefault();
    setisEditing(true);
    inputref.current.focus();
    setname(todo.name);
    seteditID(todo.id);
  };

  const deletetodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "TODO_DELETE",
      payload: { todoID: todo.id },
    });
  };

  return (
    <div className="m-2 p-2 bg-red-200 flex items-center justify-between">
      <p
        className={
          todo.completed ? "text-red-500 font-bold " : "text-gray-500 font-bold"
        }
      >
        {todo.name}
      </p>
      <div>
        <button onClick={toogle} className="bg-green-800 text-white p-1 m-2">
          Toogle
        </button>
        <button onClick={edittodo} className="bg-yellow-700 text-white p-1 m-2">
          Edit
        </button>

        <button onClick={deletetodo} className="bg-red-700 text-white p-1 m-2">
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
