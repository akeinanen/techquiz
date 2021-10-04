import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Answers from './Answers';

const API_KEY="3RhFGh0O4C1sF0SuN9DHh8d60sjMNuoH5B0QXR2u";
const baseURL = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}`;

function App() {
  const [question, setQuestion] = useState();
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  
  useEffect(() => {
    axios.get(`${baseURL}&limit=1${category}`).then((response) => {
      const data = response.data[0];
      setQuestion(data);
    })
  }, [category, difficulty]);



  return (
    <div className="App">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option selected value="">All</option>
        <option value="Linux">Linux</option>
        <option value="PHP">PHP</option>
      </select>

      <select onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <h3>
        {question.id}
      </h3>
      {category}
      
    </div>
  );
}

export default App;
