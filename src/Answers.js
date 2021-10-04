import React, { createReactElement } from 'react';

const Answers = ({ question }) => {

    const Input = createReactElement('input', { type: question.multiple_correct_answers ? "checkbox" : "radio" } );

    return(
        <>
            <Input>Test</Input>
        </>
    )
}

export default Answers;