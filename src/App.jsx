import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ThemeContext from './context/Theme';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [theme, setTheme] = useState('primary');

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      done: false,
      edit: false,
      content, 
      selected: false 
    };

    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id) {
// Donc ici, on va appeler la "todoList", sauf l'élément qu'on va supprimer...
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function validateTodo(id) {
    setTodoList(todoList.map((todo) => todo.id === id ? ({
      ...todo, done: !todo.done
    }) 
    : 
    todo))
  }

  function editTodo(id) {
    setTodoList(todoList.map((todo) => todo.id === id ? ({
      ...todo, edit: !todo.edit
    }) 
    : 
    todo))
    console.log('hello')
  }

  function saveTodo(id, content) {
    setTodoList(todoList.map((todo) => todo.id === id 
    ? {
      ...todo,
      edit: false,
      content
    }
    : todo
    ))
  }

  function selectTodo(id) {
    setTodoList(
      todoList.map((todo) =>
      todo.id === id 
      ? {
        ...todo,
        selected: true
      }
      :
      {
        ...todo,
        selected: false
      }))
    }

    function handleThemeChange(e) {
      const theme = e.target.value;
      setTheme(theme);
    }


  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className="d-flex flex-column justify-content-center allgn-items-center p-20">
      <div className="card container p-20">
          <h1>Liste des tâches</h1>
          <div className="d-flex justify-content-end align-items-center">
            <select className="btn btn-reverse-primary mr-15" onChange={handleThemeChange} value={theme}>
              <option value="primary">Orange</option>
              <option value="secondary">Bleu</option>
            </select>
          </div>
          <AddTodo addTodo={addTodo}/>
          <TodoList 
          todoList={todoList} 
          deleteTodo={deleteTodo} 
          validateTodo={validateTodo} 
          editTodo={editTodo}
          saveTodo={saveTodo} 
          selectTodo={selectTodo}/>
      </div>
    </div>
    </ThemeContext.Provider>
    </>
  );
}