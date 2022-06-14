import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active';


function App() {

    let [tasks1, setTasks] = useState<Array<TaskPropsType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: true}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTask(id: string) {
        let filteredTasks = tasks1.filter(el => el.id !== id)
        setTasks(filteredTasks);
        // return el.id !== id;
        //{
        //     return true
        // } else {
        //     return false
        // }
    }
    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks1]
        setTasks(newTasks)
    }
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]
    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }
    let tasksForToDoList = tasks1;
    if (filter === 'completed') {
        tasksForToDoList = tasks1.filter(el => el.isDone === true)
    };
    if (filter === 'active') {
        tasksForToDoList = tasks1.filter(el => el.isDone === false)
    };
    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks1.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        let copy = [...tasks1]
        setTasks(copy);
        // setTasks([...tasks1]); это упращенная версия, чтоб не создавать новую переменную
    }
    return (
        <div className="App">
            <Todolist title={'Tech'}
                      tasks={tasksForToDoList}
                      removeTusk={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
            {/*<Todolist title={'Message'} tasks = {tasks2}/>*/}
        </div>
    );
}

export default App;



