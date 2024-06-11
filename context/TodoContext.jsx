import { createContext, useContext} from "react";
import { useTodos } from "../hooks/useTodos";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export function TodoProvider ({ children }) {
    const { tasks, addTask, updateTask, toggleComplete, deletedTask } = useTodos();
    return (
        <TodoContext.Provider value={{ tasks, addTask, updateTask, toggleComplete, deletedTask }}>
            {children}
        </TodoContext.Provider>
    )
}