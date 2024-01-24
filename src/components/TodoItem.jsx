import Button from "./Button";

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

            <Button onClick={(e) => {
                e.stopPropagation();
                validateTodo();
            }} 
                    text="Valider"
            />

            <Button onClick={(e) => {
                e.stopPropagation();
                editTodo()
            }} 
                text="Modifier"/>

            <Button onClick={(e) => {
                e.stopPropagation();
                deleteTodo()
            }}  
                    text="Supprimer"
            />

        </li>
        </>
    )
}