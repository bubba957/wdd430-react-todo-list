
export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={e => toggleTodo(id, e.taget.checked)}
                />
                {title}
            </label>
            <button 
                onClick={() => deleteTodo(id)}
                className="btn btn-danger"
            >
                Delete
            </button>
        </li>
    )
}