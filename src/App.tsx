import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";

export type FilterValuesType = 'all'|'completed'|'active';


function App() {

    let [tasks1, setTasks]  = useState<Array<TaskPropsType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: true }
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTask(id: number)  {
         let filteredTasks = tasks1.filter( el => el.id !== id)
        setTasks(filteredTasks);
            // return el.id !== id;
            //{
            //     return true
            // } else {
            //     return false
            // }
    }


    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]

    function changeFilter (value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForToDoList = tasks1;
    if (filter === 'completed') {
        tasksForToDoList = tasks1.filter(el => el.isDone === true)
    };
    if (filter === 'active') {
        tasksForToDoList = tasks1.filter(el => el.isDone === false)
    };


    return (
        <div className="App">
            <Todolist title={'Tech'} tasks = {tasksForToDoList} removeTusk = {removeTask} changeFilter={changeFilter} />
            {/*<Todolist title={'Message'} tasks = {tasks2}/>*/}
        </div>
    );
}
export default App;


// export function Counter () {
//     let arr = useState(5);
//     let data = arr[0];
//     let setData = arr[1];
//     return <div onClick={() => {
//         setData(data + 1)
//     }}>{data}</div>
// }



