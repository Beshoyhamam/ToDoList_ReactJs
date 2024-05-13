import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({task, toggleComplate, deleteTodo, editTodo}) => {

    return (
        <div className="Todo">
            <p
                onClick={() => toggleComplate(task)}
                className={`${task.complated ? "completed" : ""}`}
            >
                {task.task}
            </p>
            <div className="control-btn">
                <FaPenToSquare onClick={() => editTodo(task)} />
                <FaTrashAlt onClick={() => deleteTodo(task)}/>
            </div>
        </div>
    );
}

export default Todo;