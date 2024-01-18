import React, { useState } from "react";

// TodoItem
const TodoItem = ({ todo, removeTodo }) => {
  const [check, setCheck] = useState(false);

  const style = {
    textDecoration: check ? "line-through" : "none",
  };

  const changeBox = () => {
    setCheck(!check);
  };

  return (
    <div>
      <input type="checkbox" onChange={changeBox} />
      <label style={style}>{todo}</label>
      <button onClick={removeTodo}>삭제</button>
    </div>
  );
};


// TodoList
const TodoList = ({ todoList, setTodoList }) => {


  const onRemove = (todo) => {
    const result = todoList.filter((item) => item !== todo);
    setTodoList(result);
  };

  return (
    <>
      {todoList.map((current, index) => (
        <TodoItem key={index} todo={current} onRemove={() => onRemove(current)}/>
      ))}
    </>
  );
};


// TodoInput
const TodoInput = ({ setTodoList, todoList }) => {
  const [input, setInput] = useState("");

  const addList = () => {
    setTodoList([...todoList, input]);
    setInput("");
  };

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={input} onChange={changeInput} />
      <button onClick={addList}>추가</button>
    </>
  );
};


// App
function App() {
  const [todoList, setTodoList] = useState(["안녕", "안녕2"]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TodoInput setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;