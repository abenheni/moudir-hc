import React, { createContext, useState, useReducer } from 'react';
import { taskReducer } from '../reducers/taskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
      <TaskContext.Provider value={{tasks}}>
          {props.children}
      </TaskContext.Provider>  
    );
}

export default TaskContextProvider;