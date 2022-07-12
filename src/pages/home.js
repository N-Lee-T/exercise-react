import React from  'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList.js';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

// recieves the two common state variables from App.js
function HomePage({setExerciseToEdit}) {
    const [exercises, setExercise] = useState([]);
    
    const history = useHistory();
    // const navigate = useNavigate();

    // deleting the exercise
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if(response.status === 204){
            const newExercise = exercises.filter(ex => ex._id !== _id);
            setExercise(newExercise);
        } else{
            console.error(`Failed to delete the exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
        // navigate("/edit-exercise");
    }

    // loading the exercise / reloading whenever a change is made
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercise(data);
    }

    // calls loadExercises at change
    useEffect(() => {
        loadExercises();
    }, []); 

    return ( 
        <>
            <hr/>
            <h2> You'll break a sweat just looking at all this exercising </h2>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
            <hr/>
            <button><Link to="/add-exercise">Add another exercise</Link></button>
        </>
    );       
}

export default HomePage;