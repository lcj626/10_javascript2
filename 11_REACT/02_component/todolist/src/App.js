import React from 'react';

const {useState} = React;
function Todo() {
  const [todos, setTodos] = useState([
      {id:1, name:'실습 과제 완성시키기'},
      {id:2, name:'조별 과제 아이디어 회의'},
      {id:3, name:'자기소개서 피그마 짜기'}
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(4);

  // const [checked, setChecked] = useState(false);

  const onChangeHandler = e => setInputText(e.target.value);
  const onClickHandler = () =>{
      const addTodo = todos.concat({
          id:nextId,
          name:inputText
      });
      setNextId(nextId + 1);
      setTodos(addTodo);
      setInputText("");
  }

  const onRemove = id =>{
      const addTodo = todos.filter(todo => todo.id !== id);
      setTodos(addTodo);
  }

  const checkList = id => {
      //setChecked({...checked, [e.target.name]: e.target.checked});
      const addTodo = document.getElementById(id);
      addTodo.style.textDecoration = 'line-through';
      addTodo.style.textDecorationColor = 'red';
  }



  const TodoList = todos.map(
      todo =>{
        return (
          <>
            <li>
              <button id={todo.id} onClick={()=> checkList(todo.id)}>완료</button>
              <span>{todo.name}</span>
              <button onClick={() => onRemove(todo.id)}>삭제</button>
            </li>
          </>
        );
      }
  )
  return (
    <>
        <input value={inputText} onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>추가</button>
        <ul>
            {TodoList}
        </ul>
    </>
)
  

}

export default Todo;
