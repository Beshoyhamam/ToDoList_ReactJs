import { useState } from "react"

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (el) => {
        el.preventDefault()

        editTodo(value, task)
        

        setValue("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Update Task"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    );
}

export default EditTodoForm;