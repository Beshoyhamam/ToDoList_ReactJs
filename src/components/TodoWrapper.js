import { useState } from "react";
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from "uuid"
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Tasks")) || [])

    const addTodo = (todo) => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            complated: false,
            isEditing: false
        }])

        localStorage.setItem("Tasks", JSON.stringify([...todos, {
            id: uuidv4(),
            task: todo,
            complated: false,
            isEditing: false
        }]))
        
    }

    const toggleComplate = (ele) => {
        setTodos(todos.map(todo => todo === ele ? { ...todo, complated: !todo.complated } : todo))
        ele.complated = !ele.complated
        localStorage.setItem("Tasks", JSON.stringify(todos))
    }

    const deleteTodo = (ele) => {
        setTodos(todos.filter(el => el !== ele))
        todos.splice(todos.indexOf(ele), 1)
        localStorage.setItem("Tasks", JSON.stringify(todos))
    }

    const editTodo = (ele) => {
        setTodos(todos.map(todo => todo === ele ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, ele) => {
        setTodos(todos.map(todo => todo === ele ? { ...todo, task, isEditing: !todo.isEditing } : todo))
        ele.isEditing = !ele.isEditing
        ele.task = task
        localStorage.setItem("Tasks", JSON.stringify(todos))
    }

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((item, index) => (
                item.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={item} key={Math.random()}/>
                    
                ) : (
                    <Todo
                    task={item}
                    key={index}
                    toggleComplate={toggleComplate}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
                )
                
            ))}
            
        </div>
    );
}

export default TodoWrapper;