import React, { useEffect, useState } from "react";
import styles from "./AllNotes.modules.css"
import {getDocs, collection} from "firebase/firestore"
import {db} from "../firebase"
import Notes from "../fragments/notes";

function AllPosts(){

    const[notes, setNotes] = useState([]);
    const notesCollectionRef = collection(db, "posts")

    useEffect(()=>{
        const getNotes = async ()=>{
            const data = await getDocs(notesCollectionRef)
            setNotes(data.docs.map((doc) =>({...doc.data(),id: doc.id})))
        }

        getNotes()

    }, [])
    
    return(
        <div className="allNotes">
            {notes.map((note)=>{
                return(
                    <Notes color={note.color} text={note.text} title={note.title} category={note.category} date={note.date} id={note.id}/>
                )
            })}
        </div>
    )

}

export default AllPosts