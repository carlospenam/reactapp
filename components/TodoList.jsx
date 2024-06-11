
import { TodoItem } from "./TodoItem";
import { useState } from "react";
import { useTodoContext } from "../context/TodoContext"

export function TodoList () {
    const { tasks, addTask, updateTask } = useTodoContext();
    const [newTask, setNewTask] = useState('');

    const handlerAddTask = (event) => {
        event.preventDefault();
        if(newTask.trim() === '') return;
        const newTaskObj = {
            id: tasks.length + 1,
            todo: newTask,
            completed: false,
            userID: 1
        }
        addTask(newTaskObj);
        setNewTask('');
    }

    const handleUpdateTask = (taskId, updatedText) => {
        updateTask(taskId, {todo: updatedText})
    }

    return (
        <>
            <form onSubmit={(event) => handlerAddTask(event)}>
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task" 
                />
                <button type="submit">Add new task</button>
            </form>
            <hr />
            <ul>
                {
                    tasks?.map(task => (
                        <li key={task.id} style={{cursor: 'pointer'}}>
                            <TodoItem 
                                task={task}
                                onUpdate = {(updatedText)=>handleUpdateTask(task.id, updatedText)} 
                            />
                        </li>
                    ))
                }
            </ul>
        </> 
    )
}