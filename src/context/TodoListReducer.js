import { ADD_TASK, DELETE_TASK } from "../types";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.payload
            ]
        case DELETE_TASK:
            return state.filter( item => item.id !== action.payload )
        
        
        default:
            return state;
    }
}

export default reducer;