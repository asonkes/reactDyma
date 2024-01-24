export default function TodoItem({
    todo, 
    deleteTodo, 
    validateTodo, 
    editTodo,
    selectTodo
}) {

    return (
        <>
        <li 
        onClick={selectTodo}
        className={`display-flex justify-content-center align-items-center ${todo.selected ? 'selected' : ''}`}>
            
            <span className="flex-fill p-30">{todo.content} {todo.done && '✅'}</span> 

            <button 
            onClick={(e) => {
                e.stopPropagation();
                validateTodo();
            }}
            className="btn btn-primary m-20">
                Valider
            </button>

            <button 
            onClick={(e) => {
                e.stopPropagation();
                editTodo()
            }}
            className="btn btn-primary m-20">
                Modifier
            </button>

            <button 
            onClick={(e) => {
                e.stopPropagation();
                deleteTodo()
            }}
            className="btn btn-reverse-primary m-20">
                Supprimer
            </button>

        </li>
        </>
    )
}