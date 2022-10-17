import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask, deleteComplete, deleteIncomplete, editComplete, editIncomplete, moveToComplete, moveToIncomplete } from './redux/action'

export default function Home() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [newTask, setNewtask] = useState('')
    const [editFlag, setEditFlag] = useState(false)
    const [editText, setEditText] = useState('')
    const [editIndex, setEditIndex] = useState();
    const [editCategory, setEditCategory] = useState()

    var newTaskHandler = (event) => {
        setNewtask(event.currentTarget.value)
    }

    var addTask = () => {
        if (newTask !== '') {
            dispatch(addNewTask(newTask))
            setNewtask('')
        }
    }

    var checkboxHandler = (event, status) => {
        if (status === "incomplete") {
            dispatch(moveToComplete(event.currentTarget.id))
        }
        else {
            dispatch(moveToIncomplete(event.currentTarget.id))
        }
    }

    var editTextHandler = (event) => {
        setEditText(event.currentTarget.value)
    }

    var editHandler = (event, category) => {
        setEditFlag(true)
        setEditIndex(event.currentTarget.id)
        setEditCategory(category)
        if (category === "incomplete") {
            setEditText(state.incompleteTasks[event.currentTarget.id])
        }
        else {
            setEditText(state.completeTasks[event.currentTarget.id])
        }

    }

    var editTaskEvent = (event) => {
        if (editCategory === 'incomplete') {
            dispatch(editIncomplete({
                index: editIndex,
                value: editText
            }))
        }
        else {
            dispatch(editComplete({
                index: editIndex,
                value: editText
            }))
        }
        setEditFlag(false)
    }

    var deleteHandler = (event, category) => {
        if (category === "incomplete") {
            dispatch(deleteIncomplete(event.currentTarget.id))
        }
        else {
            dispatch(deleteComplete(event.currentTarget.id))
        }
    }

    return (
        <div className='homeContainer'>
            <div className='addTaskDiv'>
                {(editFlag === true) ? <input type="text" placeholder='Edit task' onChange={(event) => editTextHandler(event)} value={editText} /> : <input type="text" placeholder='Add new task' onChange={(event) => newTaskHandler(event)} value={newTask} />}<br />
                {(editFlag === true) ? <button className='addTaskBtn' onClick={(event) => editTaskEvent(event)}>Edit Task</button> : <button className='addTaskBtn' onClick={() => addTask()}>Add Task</button>}
            </div>

            <div className='incompleteTasksDiv'>
                <p className='categoryHeading'>Incomplete Tasks</p>
                {(state.incompleteTasks.length > 0) ? state.incompleteTasks.map((item, index) => {
                    return (
                        <>
                            <hr />
                            <div key={index} className="eachTaskDiv">
                                {(editFlag === true)}<input type="checkbox" id={index} key={index} onChange={(event) => checkboxHandler(event, "incomplete")} checked={false} />
                                <p>{item}</p>
                                <button className='editBtn' onClick={(event) => editHandler(event, "incomplete")} id={index}>Edit</button>
                                <button className='deleteBtn' id={index} onClick={(event) => deleteHandler(event, "incomplete")}>Delete</button>
                            </div>

                            <hr />
                        </>
                    )
                }) : ''}

            </div>

            <hr />

            <div className='completeTasksDiv'>
                <p className='categoryHeading'>Complete Tasks</p>
                {(state.completeTasks?.length > 0) ? state.completeTasks.map((item, index) => {
                    return (
                        <>
                            <hr />
                            <div key={index} className="eachTaskDiv">
                                <input type="checkbox" id={index} key={index} onClick={(event) => checkboxHandler(event, "complete")} checked={true} />
                                <p>{item}</p>
                                <button className='editBtn' onClick={(event) => editHandler(event, "complete")} id={index}>Edit</button>
                                <button className='deleteBtn' id={index} onClick={(event) => deleteHandler(event, "complete")}>Delete</button>
                            </div>
                            <hr />
                        </>
                    )
                }) : ''}

            </div>


        </div>
    )
}
