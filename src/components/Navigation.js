import React from "react";
import { Link } from "react-router-dom";

function Navigation () {
    return (
        <>
        <nav class="navs">
            <ol>
                <ul class="nav"><Link to='/'>Go Home</Link></ul>
                <ul class="nav"><Link to="/add-exercise">Add an exercise</Link></ul>
                <ul class="nav"><Link to="/edit-exercise">Edit an existing exercise</Link></ul>
            </ol>
        </nav>
        </>
    );}

export default Navigation;
