import React from 'react';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <NavBar />
        <TaskList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
