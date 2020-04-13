import { v1 as  uuidv1 } from 'uuid';

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, {
                description: action.task.description,
                id: uuidv1()
            }]
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.id)
        default:
            return state
    }
}