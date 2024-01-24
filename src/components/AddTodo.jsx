import { useState } from "react";
import Button from '../components/Button';

export default function AddTodo({ addTodo }) {

    const [value, setValue] = useState("");

    function handleChange(e) {
        console.log('here');
        const value = e.target.value;
        setValue(value);
    }

    function handleKeyDown(e) {
        console.log('here');
        console.log(e);
        if(e.code === "Enter" && value.length) {
            console.log('test');
            addTodo(value);
            setValue('');
        }
    }

    function handleClick() {
       if(value.length) {
        addTodo(value);
        setValue('');
       }
    }

    return (
        <>
        <div>
            <input 
            type="text" 
            onChange={handleChange} 
            onKeyDown={handleKeyDown}
            value={value}
            className="mt-50 mb-20 p-20" 
            placeholder="Veuillez ajouter des Todos" />

            <Button onClick={handleClick} text="Ajouter"/>
        </div>
        </>
    )
}