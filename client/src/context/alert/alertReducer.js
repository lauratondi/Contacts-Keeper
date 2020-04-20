import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            // we are returning an array now (initialState is an array)
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
};