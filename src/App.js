import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home.js';
import AddExercisePage from './pages/create_exercise';
import EditExercisePage from './pages/edit_exercise';
import { useState } from 'react';
import Navigation from './components/Navigation';

function App() {
    // lifting up state: define common state variables in the API so we can use 'em in the UI (sibling nodes can both access info)
    const [exerciseToEdit, setExerciseToEdit] = useState();

    return (
        <div className="App">
            <header>
                <h1 className='headfirst'>OMG Exercise!</h1>
                <p>Welcome: You can view, create, update, and delete exercises here.</p>
            </header>
            <Router>
                <div className='Navigating'>
                    <Navigation/>
                </div>
                <div className="App-header">
                    <Route path="/" exact>
                        <HomePage setExerciseToEdit={setExerciseToEdit}/> 
                    </Route>
                    <Route path="/add-exercise">
                        <AddExercisePage/>
                    </Route>
                    <Route path="/edit-exercise">
                        <EditExercisePage exerciseToEdit={exerciseToEdit}/>
                    </Route>
                </div>
            </Router>
            <footer className='footie'>
                <h2>© 2022 Nathan Thompson</h2>
            </footer>
        </div>
    );
}

export default App;

