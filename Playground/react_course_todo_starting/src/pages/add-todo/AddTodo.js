import NavBar from "../NavBar";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
const AddTodo = () => {
  const AddTodoText = useRef();

  const History = useHistory();

  const AddTodoHandler = (e) => {
    e.preventDefault();
    const todoString = AddTodoText.current.value;
    //Array of todo
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialTodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(initialTodo));

    History.push("/");
  };

  return (
    <>
      <NavBar />
      <div className="todo_container">
        <div>
          <h1>Add Todo</h1>
        </div>
        <form onSubmit={AddTodoHandler}>
          <input type="text" ref={AddTodoText}></input>
          <button>Add Todo</button>
        </form>
      </div>
    </>
  );
};
export default AddTodo;
