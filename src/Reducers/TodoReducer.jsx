
export default function TodoReducer(state, action) {
    switch(action.type) {

        case 'ADD_TODO': {
            return {
                ...state,
                todoList: [...state.todoList, {
                    id: crypto.randomUUID(),
                    content: action.content,
                    edit: false,
                    done: false,
                    selected: false
                }]
            }
        }

        case 'DELETE_TODO': {
            return {
                ...state,
                todoList: state.todoList.filter((t) => t.id !== action.id)
                }
        }

        case 'VALIDATE_TODO': {
            return {
                ...state,
                todoList: state.todoList.map((t) => 
                t.id !== action.id ? t : 
                {...t, done: !t.done }
                ),
            }
        }

        case 'EDIT_TODO' : {
            return {
                ...state,
                todoList: state.todoList.map((t) => 
                t.id !== action.id ? t : 
                {...t, edit: !t.edit
                })
            }
        }

        case 'SAVE_TODO': {
            return {
                ...state,
                todoList: state.todoList.map((t) => 
                t.id !== action.id 
                ? t 
                : { ...t, content: action.content, edit: false}
                )
            }
        }

        case 'SELECT_TODO': {
            return {
                ...state,
                todoList: state.todoList.map((t) => 
                t.id !== action.id 
                ? {...t, selected: false}
                : {...t, selected: true}
                )
            }
        }

        case 'HANDLE_THEME_CHANGE': {
            return {
                ...state,
                theme: action.name
            }
        }

        default: {
            throw new Error("action inconnue");
        }
    }
}
        
