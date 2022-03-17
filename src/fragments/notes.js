import React from "react";
import styles from "./notes.modules.css"
import { doc, deleteDoc} from "firebase/firestore"
import {db} from "../firebase"

function Notes(props){

    const deleteNote = async(id) => {
        const noteDoc = doc(db, "posts", id)
        await deleteDoc(noteDoc)
    }

    return(
        <div className="note" style={{backgroundColor: props.color}}>
            <h1>{props.title}</h1>
            <h2>{props.category}</h2>
            <p>{props.text}</p>
            <h3>{props.date}</h3>
            <button onClick={()=>deleteNote(props.id)}>deletar</button>
        </div>
    )

}

export default Notes