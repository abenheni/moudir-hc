import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { ThemeContext } from '../contexts/ThemeContext';

const TaskDetails = ({ task }) => {
    const { dispatch } = useContext(TaskContext);
    return(
        <li>
            <div className='task-description'>{task.description}</div>
            <button onClick={() => dispatch({type: 'REMOVE_TASK', id: task.id})} />
        </li>
    )
}

export default TaskDetails;