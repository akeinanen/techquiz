import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Select } from './Components/Style';

// Components
import Quiz from './Components/Quiz';

const API_KEY = "";
const baseURL = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}`;

function App() {
  const [quiz, setQuiz] = useState();
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [notification, setNotification] = useState('');
  const [apiCall, setApiCall] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}&limit=1${category}`).then((response) => {
      const data = response.data[0];
      setQuiz(data);
      setNotification('');
    })
  }, [category, difficulty, apiCall]);

  return (
    <div className="App">
      <div>
        <h1>TechQuiz</h1>
      </div>

      <div className="Quiz">
        <h3>Train your knowledge with TechQuiz</h3>
        <Select onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue value="">All</option>
          <option value="Linux">Linux</option>
          <option value="PHP">PHP</option>
        </Select>

        <Select onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>

        <Quiz quiz={quiz} apiCall={apiCall} setApiCall={setApiCall} setNotification={setNotification} />
        <p><b>{notification}</b></p>
      </div>
    </div>
  );
}

export default App;
