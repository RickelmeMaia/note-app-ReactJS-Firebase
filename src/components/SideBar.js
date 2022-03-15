import React from "react";
import { Link } from "react-router-dom"
import styles from "./SideBar.modules.css"

function SideBar(){

    return(
        <div className="sideBar">
            <Link to="/allPosts">All Posts</Link>
            <Link to="/newPosts">New Posts</Link>
            <Link to="/allPosts">All Posts</Link>
            <Link to="/newPosts">New Posts</Link>
            <Link to="/allPosts">All Posts</Link>
        </div>
    )

}

export default SideBar