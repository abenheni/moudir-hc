import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;  
    return(
        <nav style={{ background: theme.ui, color: theme.content }}>
        <h1>Moudir Context Hook</h1>
        <div className='auth-box' onClick={ toggleAuth }>
            { isAuthenticated ? 'Welcome User!' : 'Log in'}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    );
}

export default NavBar;