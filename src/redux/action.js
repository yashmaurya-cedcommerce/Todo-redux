import { ADD_TASK, DELETE_COMPLETE_TASK, DELETE_INCOMPLETE_TASK, EDIT_COMPLETE_TASK, EDIT_INCOMPLETE_TASK, MOVE_TO_COMPLETE, MOVE_TO_INCOMPLETE } from "./type"

export const addNewTask = (data) => {
    return {
        type: ADD_TASK,
        payload: data
    }
}

export const moveToComplete=(data)=> {
    return {
        type: MOVE_TO_COMPLETE,
        payload: data
    }
}

export const moveToIncomplete=(data)=> {
    return {
        type: MOVE_TO_INCOMPLETE,
        payload: data
    }
}

export const editIncomplete=(data)=> {
    return {
        type: EDIT_INCOMPLETE_TASK,
        payload: data
    }
}

export const editComplete=(data)=> {
    return {
        type: EDIT_COMPLETE_TASK,
        payload: data
    }
}

export const deleteIncomplete=(data)=> {
    return {
        type: DELETE_INCOMPLETE_TASK,
        payload: data
    }
}

export const deleteComplete=(data)=> {
    return {
        type: DELETE_COMPLETE_TASK,
        payload: data
    }
}