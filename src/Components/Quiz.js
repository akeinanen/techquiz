import React, { useState } from 'react';
import { Button } from './Style';

const Quiz = ({ quiz, apiCall, setApiCall, setNotification }) => {
    const [userAnswer, setUserAnswer] = useState('test');



    // Wait until the API is loaded
    if (!quiz) {
        return (
            <>
                <h3>Loading...</h3>
            </>
        )
    }

    const validateAnswer = () => {
        if (Object.values(quiz.answers).indexOf(userAnswer) === Object.values(quiz.correct_answers).indexOf("true")) {
            // Right answer
            setNotification("Right answer, well done!");
            setTimeout(() => {
                setApiCall(!apiCall);
            }, 1000)
        } else {
            // Wrong answer
            setNotification("Wrong answer, try again.")
        }
    }

    const answers = [];
    Object.values(quiz.answers).map((answer, i) => {
        if (answer !== null) {
            // Push answers that contains content to an array
            answers.push(
                <div key={i}>
                    <input type={quiz.multiple_correct_answers === true ? "checkbox" : "radio"} name="answer" onChange={() => setUserAnswer(answer)} />
                    <label>{answer}</label>
                </div>
            )
        }
        return null;
    });

    return (
        <>
            <h3>{quiz.question}</h3>

            {answers}
            <Button onClick={validateAnswer}>Answer</Button>
        </>
    )

}

export default Quiz;