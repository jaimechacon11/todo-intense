import { useState } from "react"


const TodoItem = ({ id, todo, completed, handleChangeCompletedTodo, deleteTodo, editTodo,dateFormatted,hourFormatted,startDate }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo);


    const handleSaveTodo = () => {
        editTodo(id, editedTodo);
        setIsEditing(false);
    }

    if(isEditing) {
        return (
            <div className="todo">
                <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                />
                <div className="actions">
                <button onClick={() => setIsEditing(false)}>Cancel</button>
                <button onClick={handleSaveTodo}>Save</button>
                </div>
            </div>
        )
    }

    return (
        <div className="todo">
            <div className="tareas">
            <input
                id={`todo-${id}`}
                type="checkbox"
                checked={completed}
                onChange={() => handleChangeCompletedTodo(id)}
            />
                <label htmlFor={`todo-${id}`}>Tarea : {todo} 
                <br/> Dia de Registro:{dateFormatted} 
                <br/> Hora de Registro:{hourFormatted}
                <br/> Fecha Limite:{startDate} 
                </label>
            </div>
            <div className="actions">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button
                    onClick={() => deleteTodo(id)}
                >Remove</button>
            </div>
        </div>
    )
}

export default TodoItem
