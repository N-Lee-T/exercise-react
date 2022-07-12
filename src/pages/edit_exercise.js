import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({ exerciseToEdit }) => {
    // notice the diff w/ add: we don't use defaults, we get the actual values from teh movie object
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory()
    // const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise), //body set to string representation of new JSON object
            headers: {
                'Content-Type': 'application/JSON'
            },
        });
        if(response.status === 200){
            alert("Successfully edited");
        } else {
            alert('Invalid!');
        }
        history.push("/");
        // navigate("/");
    };

    return (
        <div>
            <h2>Change it up</h2>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                maxLength={3}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                value={unit} onChange={e => setUnit(e.target.value)}>
                    <option value={'lb'}>pounds</option>
                    <option value={'kg'}>kilos</option>
            </select>
            <input
                type="text"
                value={date}
                maxLength={8}
                onChange={e => setDate(e.target.value)} />
            <hr/>
            <button onClick={editExercise}>Save it</button>
        </div>
    );
}


export default EditExercisePage;