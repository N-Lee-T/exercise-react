import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import { useNavigate } from 'react-router-dom';

// import "react-datepicker/dist/react-datepicker.css";

export const AddExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kg');
    const [date, setDate] = useState('');

const history = useHistory()
    // const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise), //body set to string representation of new JSON object
            headers: {
                'Content-Type': 'application/JSON'
            },
        });
        if(response.status === 201){
            alert('Successfully added.');
        } else {
            alert('Invalid request! Try again.');
        }
        history.push("/");
        // navigate("/");
    };

    return (
        <div>
            <h2>Enter a new one</h2>
            <input
                type="text"
                placeholder='Name of exercise'
                value={name}
                minLength={1}
                onChange={e => setName(e.target.value)}
                required />
            <input
                type="number"
                placeholder='Number of reps'
                value={reps}
                min={1}
                max={99}
                onChange={e => setReps(e.target.value)}
                required />
            <input
                type="number"
                placeholder='Weight'
                value={weight}
                min={1}
                max={999}
                onChange={e => setWeight(e.target.value)}
                required />
            <select
                value={unit} onChange={e => setUnit(e.target.value)}>
                    <option value={'lb'}>pounds</option>
                    <option value={'kg'}>kilos</option>
                    required
            </select>
            <input
                type="text"
                min=''
                placeholder='Date: mm-dd-yy'
                value={date}
                maxLength={8}
                onChange={e => setDate(e.target.value)}
                required pattern='/^\d\d-\d\d-\d\d$/' />
            {/* <div className='date'>
            <DatePicker selected={date} onChange={(date) => setDate(date)}/>
            </div> */}
            <hr/>
            <button onClick={addExercise}>Save</button>
        </div>
    );
}

export default AddExercisePage;


