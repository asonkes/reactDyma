import { useReducer} from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ThemeContext from './context/Theme';
import TodoReducer from "./Reducers/TodoReducer";

export default function App() {

  const [state, dispatch] = useReducer(TodoReducer, {
    theme: 'primary',
    todoList: []
  }
  )

  function addTodo(content) {
    dispatch({
      type: 'ADD_TODO',
      content
    })
  }

  function deleteTodo(id) {
    dispatch({
      type: 'DELETE_TODO',
      id
    })
  }

  function validateTodo(id) {
    dispatch({
      type: 'VALIDATE_TODO',
      id
    })
  }

  function editTodo(id) {
    dispatch({
      type: 'EDIT_TODO',
      id
    })
  }

  function saveTodo(id, content) {
    dispatch({
      type: 'SAVE_TODO',
      id,
      content
    })
  }

  function selectTodo(id) {
    dispatch({
      type: 'SELECT_TODO',
      id
    })
    }

    function handleThemeChange(e) {
      dispatch({
        type: 'HANDLE_THEME_CHANGE',
        name: e.target.value
      })
    }


  return (
    <>
    <ThemeContext.Provider value={state.theme}>
    <div className="d-flex flex-column justify-content-center allgn-items-center p-20">
      <div className="card container p-20">
          <h1>Liste des tâches</h1>
          <div className="d-flex justify-content-end align-items-center">
            <select className="btn btn-reverse-primary mr-15" onChange={handleThemeChange} value={state.theme}>
              <option value="primary">Orange</option>
              <option value="secondary">Bleu</option>
            </select>
          </div>
          <AddTodo addTodo={addTodo}/>
          <TodoList 
          todoList={state.todoList} 
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