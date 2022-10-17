import { ADD_TASK, DELETE_COMPLETE_TASK, DELETE_INCOMPLETE_TASK, EDIT_COMPLETE_TASK, EDIT_INCOMPLETE_TASK, MOVE_TO_COMPLETE, MOVE_TO_INCOMPLETE } from "./type"

export const initialState = {
    incompleteTasks: [],
    completeTasks: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                incompleteTasks: [...state.incompleteTasks, action.payload]
            }
        case MOVE_TO_COMPLETE:
            var incompTemp = state.incompleteTasks
            var compTemp = state.completeTasks
            compTemp.push(state.incompleteTasks[action.payload])
            incompTemp.splice(action.payload, 1)
            return {
                ...state,
                incompleteTasks: [...incompTemp],
                completeTasks: [...compTemp]
            }
        case MOVE_TO_INCOMPLETE:
            var incomp = state.incompleteTasks
            incomp.push(state.completeTasks[action.payload])
            var comp = state.completeTasks
            comp.splice(action.payload, 1)
            return {
                ...state,
                incompleteTasks: [...incomp],
                completeTasks: [...comp]
            }
        case EDIT_INCOMPLETE_TASK:
            var tempOne = state.incompleteTasks
            tempOne[action.payload.index] = action.payload.value
            return {
                ...state,
                incompleteTasks: [...tempOne]
            }
        case EDIT_COMPLETE_TASK:
            var tempTwo = state.completeTasks
            tempTwo[action.payload.index] = action.payload.value
            return {
                ...state,
                completeTasks: [...tempTwo]
            }
        case DELETE_INCOMPLETE_TASK:
            var tempData = state.incompleteTasks
            tempData.splice(action.payload, 1)

            return {
                ...state,
                incompleteTasks: [...tempData]
            }
        case DELETE_COMPLETE_TASK:
            var tempDataTwo = state.completeTasks
            tempDataTwo.splice(action.payload, 1)

            return {
                ...state,
                completeTasks: [...tempDataTwo]
            }
        default:
            return state
    }
}