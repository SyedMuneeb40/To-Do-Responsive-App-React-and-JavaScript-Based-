import React from "react";
import Styles from "./TaskCard.module.css"

const TaskCard = ({element , taskId , completeHandlerfunc , deleteHandlerfunc})=>{
    return(
        <div className={Styles.TaskCards}>
            <div className={Styles.TaskDescription}>
                <p className={Styles.TaskName}> {element.name}</p>
                <h5>Status : {element.status}</h5>
            </div>
            <div className={Styles.TaskButtons}>
                <button  onClick={()=>completeHandlerfunc(taskId)}>☑️</button>
                <button onClick={()=>deleteHandlerfunc(taskId)}>🗑️</button>
            </div>
        </div>
    );
};

export default TaskCard;