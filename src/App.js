import React from 'react';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import ToggleTheme from './components/ToggleTheme';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TaskContextProvider from './contexts/TaskContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <TaskContextProvider>
            <TaskList />
          </TaskContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
