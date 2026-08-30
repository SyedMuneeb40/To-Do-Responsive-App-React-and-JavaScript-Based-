import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Styles from "./TodoApp.module.css"
import TaskCard from "./TaskCard.jsx"

const TodoApp = ()=>{
    const [input , setInput] = useState("");
    const [list , setList] = useState([]);


    const addTaskHandler = ()=>{
        
        if (input.trim() === "") return;

        let task = { id : Math.floor(Math.random() * 10000), name:input, status:"pending" };
        setList((prevList)=>{ return [...prevList , task]})
        setInput("");
    }

    const completeHandler = (Id) => {
        setList((prevList) => {
            return prevList.map((task)=>{
                return task.id === Id ? {...task , status:"completed"} : task;
            })
        })
    };

    const deleteHandler = (Id) => {
        setList((prevList) => prevList.filter((task) => {
            return task.id !== Id;
        }));
    };

    
        useEffect(() => {
        console.log(list);
        }, [list]);



    return(
        <>
            <div className= {Styles.container}>
                <h1 className={Styles.MainHeading}>Your To-do List 📝</h1>
                <div className={Styles.InputContainer}>
                    <input value={input} onChange={(e)=> {setInput(e.target.value)}} type="text" placeholder="Enter Task Here" />
                    <button onClick={addTaskHandler}>Add</button>
                </div> 
                <h1 className={Styles.MainHeading}>Tasks-List :</h1>
                <div className={Styles.TasksContainer}>
                    {
                        list.map((task)=>{
                           return <TaskCard element={task} key={task.id} taskId = {task.id} completeHandlerfunc={completeHandler} deleteHandlerfunc={deleteHandler}/>
                        })
                    }
                </div>
            </div>       
        </>
    )
}

export default TodoApp;