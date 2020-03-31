import React from 'react';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import ToggleTheme from './components/ToggleTheme';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <NavBar />
        <TaskList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
