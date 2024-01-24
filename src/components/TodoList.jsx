import EditTodo from './EditTodo';
import TodoItem from './TodoItem';

export default function TodoList({
    todoList, 
    deleteTodo, 
    validateTodo, 
    editTodo, 
    saveTodo, 
    selectTodo}) {

    return todoList.length ? 
    (
        <ul>
{/** map() est utilisée pour parcourir chaque élément d'une collection */}
{/** pour chaque élément qui compose la collection, on va créé un composant "todoItem" à chaque élément "todo" */}
{/** Et ces composants "todoItem" est créé avec les propriétés "key et todo" */}
            {todoList.map((todo) => (todo.edit ? (
// Via un map(), on peut soit montré un composant ou l'autre...
                <EditTodo
                key={todo.id}
                todo={todo}
                cancelTodo={() => editTodo(todo.id)}
                saveTodo={(content) => saveTodo(todo.id, content)}
                />
            ) 
            : 
            (
                <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={() => deleteTodo(todo.id)}
                validateTodo={() => validateTodo(todo.id)}
                editTodo={() => editTodo(todo.id)}
                selectTodo={() => selectTodo(todo.id)}
                />
            )
            ))}            
        </ul>
    )
    :
    (
        <p>Aucune tâche en cours</p>
    )  
}