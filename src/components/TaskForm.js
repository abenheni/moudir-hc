import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewTaskForm = () => {
    const { dispatch } = useContext(TaskContext);
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TASK', task: {
            description
        }})
        setDescription('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='description' value={description} 
                onChange={(e) => setDescription(e.target.value)} required />
            <input type='submit' value='add task' />
        </form>
    )
}

export default NewTaskForm;