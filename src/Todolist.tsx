import React from 'react';
import {FilterValuesType} from "./App";
import {Debugger} from "inspector";

type TodolistPropsType = {
    title?: string | number
    tasks: Array<TaskPropsType>
    removeTusk: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export type TaskPropsType = {
    id:number,
    title:string,
    isDone:boolean
}


export const Todolist = (props: TodolistPropsType) => {
    return (<div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el=>{

                return (
                    <li key={el.id}> <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                    <button onClick={ () => { props.removeTusk(el.id)}}>x</button>
                    </li>
                )
                })}
                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={()=> {props.changeFilter('all')}}>All</button>
                <button onClick={()=> {props.changeFilter('active')}}>Active</button>
                <button onClick={()=> {props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>

    )
}