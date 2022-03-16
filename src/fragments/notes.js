import React from "react";
import styles from "./notes.modules.css"

function Notes(props){

    return(
        <div className="note" style={{backgroundColor: props.color}}>
            <h1>{props.title}</h1>
            <h2>{props.category}</h2>
            <p>{props.text}</p>
            <h3>{props.date}</h3>
        </div>
    )

}

export default Notes