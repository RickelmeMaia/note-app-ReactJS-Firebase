import React from "react";
import { Link } from "react-router-dom"
import styles from "./SideBar.modules.css"

function SideBar(){

    return(
        <div className="sideBar">
            <Link to="/allNotes">All Notes</Link>
            <Link to="/newNotes">New Notes</Link>
            <Link to="/allNotes">All Notes</Link>
            <Link to="/newNotes">New Notes</Link>
            <Link to="/allNotes">All Notes</Link>
            <Link to="/allNotes">All Notes</Link>
        </div>
    )

}

export default SideBar