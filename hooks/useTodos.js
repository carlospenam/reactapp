import { useEffect, useState } from "react";
import { getTodoList } from "../service/getTodoList";

export function useTodos () {
    const { dataTasks } = getTodoList();
    const [tasks, setTasks ] = useState([]);

    useEffect(()=>{
        setTasks(dataTasks)
    }, [dataTasks])

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }
    
    const updateTask = (taskId, updateNewTask) => {
        const updatedTask = tasks?.map(task => {
            if(task.id === taskId){
                return { ...task, ...updateNewTask }
            }
            return task;
        })
        setTasks(updatedTask);
    }

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deletedTask = (id) => {
        const updateDeletedTask = tasks.filter(task => task.id !== id);
        setTasks(updateDeletedTask);
    }

    return {
        tasks,
        addTask,
        updateTask,
        toggleComplete,
        deletedTask
    }
}