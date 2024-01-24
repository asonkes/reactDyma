import { useState } from "react";

export default function EditTodo({todo, saveTodo, cancelTodo}) {

    const [value, setValue] = useState(todo.content);

    function handleChange(e) {
        console.log('here');
        const value = e.target.value;
        setValue(value);
    }

    function handleClickSaveTodo() {
       if(value.length) {
        saveTodo(value);
        setValue('');
       }
    }

    return (
        <>
        <div>
            <input 
            type="text" 
            onChange={handleChange}
            value={value}
            className="mt-50 mb-20 p-20" 
            />

            <button 
            onClick={handleClickSaveTodo} 
            className="btn btn-primary m-20">Sauvegarder
            </button>

             <button 
            onClick={cancelTodo} 
            className="btn btn-primary m-20">Annuler
            </button>

        </div>
        </>
    )
}