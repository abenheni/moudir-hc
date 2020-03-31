import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class NavBar extends Component {

    render() {
        return (
        <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
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
                }}
                </ThemeContext.Consumer>
            )}
        </AuthContext.Consumer>)
    }
}

export default NavBar;