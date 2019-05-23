import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/navbar";
import ExercisesList from "./components/exerciseList/exercise-list";
import EditExercise from "./components/createUser/create-user";
import CreateExercise from "./components/createExercise/create-exercise";
import CreateUser from "./components/createUser/create-user";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
