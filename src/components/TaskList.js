import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class TaskList extends Component {
    static contextType = ThemeContext;

    render() {
        return(
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return(
                <div className='task-list' style={{ color: theme.content, background: theme.bg }}>
                    <ul>
                        <li style={{ background: theme.ui }}>Stock supplies</li>
                        <li style={{ background: theme.ui }}>Fight corona</li>
                        <li style={{ background: theme.ui }}>Write an article</li>
                    </ul>
                </div>
                )
            }}

            </ThemeContext.Consumer>
        );
    }
}

export default TaskList;