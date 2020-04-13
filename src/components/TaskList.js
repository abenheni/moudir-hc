import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from './TaskDetails';

const TaskList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { tasks } = useContext(TaskContext);
    const theme = isLightTheme ? light : dark;
    return(
        <div className='task-list' style={{ color: theme.content, background: theme.bg }}>
            <ul>
                {tasks.map((task) => {
                    return(<TaskDetails task={task} key={task.id} />)
                })}
            </ul>
        </div>
    );
}

export default TaskList;