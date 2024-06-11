import PropTypes from 'prop-types'
import { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';

export function TodoItem ({ task, onUpdate }) {
    const { toggleComplete, deletedTask } = useTodoContext();
    const [isEdith, setIsEdit] = useState(false);
    const [newText, setNewText] = useState(task.todo || '');

    const handleSave = () => {
        setIsEdit(false);
        onUpdate(newText);
    }

    const handleToggleComplete = () => {
        toggleComplete(task.id);
    }

    return (
        <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {
                (isEdith) ? (
                    <>
                        <input 
                            type="text"
                            value={newText}
                            onChange={(event) => setNewText(event.target.value)}
                            onBlur={handleSave}
                            autoFocus
                        />
                        <button onClick={handleSave}>save</button>
                    </>
                ) : (
                    <>
                        <div className='contentCheckTask'>
                            <input 
                                type="checkbox"
                                checked={task.completed}
                                onChange={handleToggleComplete} 
                            />
                            <span>{task.todo}</span>
                        </div>
                        <div className='contentButtonAction'>
                            <button onClick={()=> setIsEdit(true)}>Edit</button>
                            <button onClick={() => deletedTask(task.id)}>Deleted</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

TodoItem.propTypes = {
    task: PropTypes.shape({
        todo: PropTypes.string,
        completed: PropTypes.bool,
        id: PropTypes.number
    }).isRequired,
    onUpdate: PropTypes.func.isRequired
};