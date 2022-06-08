import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all'|'completed'|'active';


function App() {

    let [tasks1, setTasks]  = useState<Array<TaskPropsType>>([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Redux", isDone: true }
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTask(id: string)  {
         let filteredTasks = tasks1.filter( el => el.id !== id)
        setTasks(filteredTasks);
            // return el.id !== id;
            //{
            //     return true
            // } else {
            //     return false
            // }
    }

    function addTask (title:string){
        let newTask = {id:v1(), title:title, isDone: false};
        let newTasks = [newTask, ...tasks1]
        setTasks(newTasks)
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
            <Todolist title={'Tech'}
                      tasks = {tasksForToDoList}
                      removeTusk = {removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
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



