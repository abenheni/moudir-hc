import uuid from 'uuid/v1';

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, {
                description: action.task.description,
                id: uuid()
            }]
        case 'REMOVE_BOOK':
            return state.filter(task => task.id !== action.id)
        default:
            return state
    }
}