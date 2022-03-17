import React, { useEffect, useState } from "react";
import {addDoc, collection, getDocs} from "firebase/firestore"
import {db} from "../firebase"

function NewPosts(){

    const notesCollectionRef = collection(db, "posts")
    const categoryCollectionRef = collection(db, "category")
    const colorsCollectionRef = collection(db,"colors")

    const [category, setCategory] = useState([])
    const [colors, setColors] = useState([])

    useEffect(()=>{

        const getDocsFunction = async (coll,set)=>{
            const data = await getDocs(coll)
            set(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        }
        getDocsFunction(categoryCollectionRef , setCategory)
        getDocsFunction(colorsCollectionRef , setColors)
    },[])

    const[newTitle, setNewTitle] = useState("")
    const[newCategory, setNewCategory] = useState("study")
    const[newText, setNewText] = useState("")
    const[newColor, setNewColor] = useState("rgb(255,247,64)")

    const createNote = async ()=>{
        let today = new Date();
        let date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()

        await addDoc(notesCollectionRef, {title: newTitle, category: newCategory, text: newText, color: newColor, date: date})
    }

    return(
        <div className="newNotes">
            <input type="text" maxLength={16} name="title" placeholder="Title" onChange={(e)=>(setNewTitle(e.target.value))}/>
            <select name="category" onChange={(e)=>(setNewCategory(e.target.value))}>
                {category.map((category)=>{
                    return <option value={category.option}>{category.option}</option>
                })}
            </select>
            <select name="color" onChange={(e)=>(setNewColor(e.target.value))}>
                {colors.map((colors)=>{
                    return <option value={colors.value} >{colors.color}</option>
                })}
            </select>
            <textarea name="text" cols="30" rows="10" onChange={(e)=>(setNewText(e.target.value))}></textarea>
            <button onClick={createNote}>Create New Note</button>
        </div>
    )

}

export default NewPosts